import React, { useEffect, useRef, useState } from 'react'
import style from './Scroll.module.css'

function Scroll({ tag }) {

    const ref = useRef(null);
    const main = useRef(null);
    let items = useRef(0);
    let currentPos = useRef(0);
    let moveStep = useRef(0);
    let rightEnd = useRef(0);

    const [objectSize, setObjectSize] = useState(0);


    useEffect(() => {
        main.current = ref.current.querySelector('.scroll > * > *');
        let objects = ref.current.querySelectorAll('.scroll > *:first-child > * > *');

        for (let item of objects) {
            main.current.append(item.cloneNode(true));
        }

        items.current = objects.length * 2;

    }, []);

    useEffect(() => {
        let objects = ref.current.querySelectorAll('.scroll > *:first-child > * > *');

        let objSize = Number(objects[0].getBoundingClientRect().width.toFixed(3));
        let parentSize = Number(main.current.getBoundingClientRect().width.toFixed(3));
        let elmCount = Math.round((parentSize + 16) / (objSize + 16));

        moveStep.current = objSize + 16;
        rightEnd.current = -(objects.length - elmCount) * (objSize + 16) + 1;

        currentPos.current = -Math.floor((items.current - elmCount) / 2) * (objSize + 16);
        main.current.style.transform = `translateX(${currentPos.current}px)`

        //
        main.current.addEventListener('mousedown', mouseDown);
        main.current.addEventListener('touchstart', mouseDown);
        //
        window.addEventListener('mouseup', mouseUp);
        window.addEventListener('touchend', mouseUp);
        //
        window.addEventListener('resize', func);

        let mousePos = 0;
        let lastPos;
        let lastPath;
        let lasMove = 0;

        const body = document.documentElement.getElementsByTagName('body');


        return () => {
            window.removeEventListener('resize', func);
            main.current.removeEventListener('mousedown', mouseDown);
            main.current.removeEventListener('touchstart', mouseDown);
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            body.style = "overflow: auto";
        }

        function mouseDown(e) {
            const now = main.current.getBoundingClientRect().left;
            const start = ref.current.getBoundingClientRect().left;

            if (e.type === 'touchstart') {
                mousePos = e.touches[0].pageX;
            } else {
                mousePos = e.pageX;
            }
            lastPos = currentPos.current;
            currentPos.current = now - start;
            main.current.style.transform = `translateX(${currentPos.current}px)`

            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            body.style = "overflow: hidden";
            main.current.style.transitionDuration = '0s';

        }

        function mouseMove(e) {
            if (e.type === 'touchmove') {
                lastPath = e.touches[0].pageX - lasMove;
                lasMove = e.touches[0].pageX;
                currentPos.current = lastPos + e.touches[0].pageX - mousePos;
            } else {
                currentPos.current = lastPos + e.pageX - mousePos;
                lastPath = e.movementX;
            }

            moveMainToCopy();
            main.current.style.transform = `translateX(${currentPos.current}px)`

        }

        function mouseUp() {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            main.current.style.transitionDuration = '1s';

            const countInLeft = currentPos.current / (objSize + 16);
            if (Math.abs(lastPos - currentPos.current) >= 20) {
                if (lastPath > 0) {
                    currentPos.current = Math.ceil(countInLeft) * (objSize + 16);
                } else {
                    currentPos.current = Math.floor(countInLeft) * (objSize + 16);
                }

            } else {
                currentPos.current = Math.round(countInLeft) * (objSize + 16);
            }
            main.current.style.transform = `translateX(${currentPos.current}px)`;
            body.style = "overflow: auto";
        }

        function func() {
            let size = Number(objects[0].getBoundingClientRect().width.toFixed(3))
            if (size !== objectSize) {
                setObjectSize(size);
            }
        }
    }, [objectSize]);


    return (<div ref={ref} className={`${style.main} scroll`}>
        {React.cloneElement(tag, { move })}
    </div>)

    function move(lr) {
        moveMainToCopy()

        if (lr) {
            currentPos.current += moveStep.current;
        } else {
            currentPos.current -= moveStep.current;
        }
        main.current.style.transform = `translateX(${currentPos.current}px)`
    }

    function moveMainToCopy() {

        if (currentPos.current <= rightEnd.current) {
            currentPos.current += (items.current / 2) * (moveStep.current);
        } else if (currentPos.current >= -(moveStep.current + 1)) {
            currentPos.current -= (items.current / 2) * (moveStep.current);
        }
        else {
            return;
        }

        main.current.style.transitionDuration = '0s';
        main.current.style.transform = `translateX(${currentPos.current}px)`
        let trigger = main.current.getBoundingClientRect();
        main.current.style.transitionDuration = '1s';
    }
}

export default Scroll