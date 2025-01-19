import RecentWCard from "./RecentWCard";
import style from "./RecentWorks.module.css";

function RecentWorks() {
    return (<div className={style.block}>
        <RecentWCard contains={['HTML', 'css', 'React']} name="Pixel-Pulse-website" />
        <RecentWCard contains={['HTML', 'Css', 'Js']} name="Tech-Trekker-website" />
        <RecentWCard contains={['Html', 'CSS', 'React', 'Sass']} name="Bright-Bloom-Web" />
        <RecentWCard contains={['Html', 'css']} name="Code-Crafters-Hub" />
    </div>)
}

export default RecentWorks;