import style from './Theme.module.css';

import { useEffect, useRef, useState } from 'react';

//getComputedStyle(document.documentElement).getPropertyValue('--color-green');
//document.documentElement.style.setProperty('--color-green', '#aaaaaa');

function Theme() {

    const theme = useRef(localStorage.getItem('theme'));

    useEffect(() => {
        theme.current = localStorage.getItem('theme');
        if (!theme.current) {
            localStorage.setItem('theme', 'light');
            theme.current = 'light';
        }
        if (theme.current === 'dark') {
            toDark();
        }
    })

    const [isDark, setIsDark] = useState(theme.current === 'light' ? false : true);

    return (<div
        className={`${style.block} ${isDark ? style.moon : style.sun}`}
        onClick={toggleTheme}
    >
        {isDark ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg> :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg>
        }
    </div>);

    function toggleTheme() {
        setIsDark((val) => {
            val ? toBright() : toDark();
            theme.current = val ? 'light' : 'dark'
            localStorage.setItem('theme', theme.current);

            return !val;
        })
    }

    function toDark() {
        let color = document.documentElement.style;

        color.setProperty('--header-color', '#fff');
        color.setProperty('--border-color', '#3f4042');
        color.setProperty('--border-color-d', '#222222');
        color.setProperty('--border-color-l', '#3f4042');
        color.setProperty('--background-color-header', '#2a2a2abb');
        color.setProperty('--background-color', '#2a2a2a');
        color.setProperty('--body-background-c', '#222222');
        color.setProperty('--photo-background', '#222222');
        color.setProperty('--photo-border', '#606060');
        color.setProperty('--icon-color', '#a6a6a6');
        color.setProperty('--text-color', '#948daa');
        color.setProperty('--header-color-2', '#ffffff');
        color.setProperty('--button-background', '#2a2a2a');
        color.setProperty('--blur-color', '#636e72');
        color.setProperty('--fill-color', '#454545');
        color.setProperty('--button-background-2', '#606060');
        color.setProperty('--filter-map', 'invert()');

    }

    function toBright() {
        let color = document.documentElement.style;

        color.setProperty('--header-color', '#222222');
        color.setProperty('--border-color', '#eae8ef');
        color.setProperty('--border-color-d', '#eae8ef');
        color.setProperty('--border-color-l', '#f3f6f6');
        color.setProperty('--background-color-header', '#ffffffbb');
        color.setProperty('--background-color', '#fff');
        color.setProperty('--body-background-c', '#fff');
        color.setProperty('--photo-background', '#f3f6f6');
        color.setProperty('--photo-border', '#a5b1c2');
        color.setProperty('--icon-color', '#636e72');
        color.setProperty('--text-color', '#778ca3');
        color.setProperty('--header-color-2', '#636e72');
        color.setProperty('--button-background', '#f3f6f6');
        color.setProperty('--blur-color', '#bdc3c7');
        color.setProperty('--fill-color', '#d9d9d9');
        color.setProperty('--button-background-2', '#a5b1c2');
        color.setProperty('--filter-map', '');
    }
}
/*   --filter-map: '';
 */

export default Theme