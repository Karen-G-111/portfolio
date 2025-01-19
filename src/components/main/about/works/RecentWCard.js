import style from './RecentWCard.module.css'

function RecentWCard({ name, contains }) {
    return (<div className={style.block}>
        <a className={style.text}><span className={style.icon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l48 0c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l48 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm48 112c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm-6.3 71.8L82.1 335.9c-1.4 5.4-2.1 10.9-2.1 16.4c0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.1-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8l-14.8 0c-14.5 0-27.2 9.7-30.9 23.8zM128 336l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg></span>{name}</a>
        <div className={style.note}>
            {setNotes()}
        </div>
    </div>)

    function setNotes() {
        return contains.map((val, ind) => {
            return f(val, ind);
        });

        function f(val, ind) {
            switch (val.toUpperCase()) {
                case 'HTML':
                    return <span className={style.html} key={ind}>HTML</span>
                case 'CSS':
                    return <span className={style.css} key={ind}>CSS</span>
                case 'SASS':
                    return <span className={style.sass} key={ind}>SASS</span>
                case 'JS':
                    return <span className={style.js} key={ind}>JS</span>
                case 'REACT':
                    return <span className={style.react} key={ind}>React</span>
                default:
                    return <span key={ind}>{val}</span>
            }
        }
    }

}

export default RecentWCard;