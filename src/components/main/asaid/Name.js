import { useEffect, useRef, useState } from 'react';
import style from './Name.module.css';

let prof = {
    projs: ["I'm a Frontand developer"],
};

function Name() {

    const [text, setText] = useState('');
    const [isBlink, setIsBlink] = useState(false);

    const id = useRef(null);
    const whichFunction = useRef(true);
    const wordNumber = useRef(0);
    const step = useRef(0);

    useEffect(() => {
        start();
        return () => {
            clearTimeout(id.current);
        }
    }, [text]);


    return (<div className={style.container}>
        <p className={style.name}>Karen Galoyan</p>
        <p className={style.animText}>{text}<span className={isBlink ? style.blink : ''}>|</span></p>
    </div>);


    function delet() {
        if (wordNumber.current + 1 === prof.projs.length) {
            wordNumber.current = -1;
            step.current += 6;
        }

        if (0 === step.current) {
            ++wordNumber.current;
            whichFunction.current = true;
            add();
        } else {
            id.current = setTimeout(() => {
                setText(v => {
                    --step.current;
                    return v.slice(0, -1);
                })
            }, 65);
        }
    }

    function add() {

        if (prof.projs[wordNumber.current].length === step.current) {
            if (wordNumber.current === 0) {
                step.current -= 6;
            }
            whichFunction.current = false;
            setIsBlink(true);
            id.current = setTimeout(() => {
                delet();
                setIsBlink(false);
            }, 2400);
        }
        else {
            id.current = setTimeout(() => {
                setText(v => {
                    return v + prof.projs[wordNumber.current][step.current++];
                })
            }, 200);
        }


    }

    function start() {
        if (whichFunction.current) {
            add();
        }
        else {
            delet();
        }
    }
}


export default Name;