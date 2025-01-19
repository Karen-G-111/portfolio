import { useOutletContext } from "react-router-dom";
import Block from "../Block";
import Title from "../Title";
import Chronology from "./chronology/Chronology";
import Knowladge from "./Knowladge";
import style from "./Resume.module.css"
import Skills from "./Skills";
import { useEffect } from "react";


function Resume() {
    const { load } = useOutletContext();
    useEffect(() => {
        load(3);
    }, [])
    return (<div className={style.main}>
        <Title title="Resume" tag={<span></span>} />
        <div className={style.pair}>
            <Block title="Programming Skill" tag={<Skills skills={[
                { name: 'HTML/CSS', percent: 78, },
                { name: 'JavaScript', percent: 80 },
                { name: 'React', percent: 50 },
                { name: 'Sass', percent: 52 }]} />} />

            <Block title="Language Skill" tag={<Skills skills={[
                { name: 'Arminian', percent: 100, },
                { name: 'Russian', percent: 90 },
                { name: 'English', percent: 32 },]} />} />
        </div>
        <div className={style.pair}>
            <Block title="My Education" tag={<Chronology chron={[
                { major: "Programming", name: "Yerevan State College Of Informatics.", text: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
                { major: "Information systems ", name: "National Polytechnic University of Armenia ", text: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
            ]} />} />

            <Block title="Other Knowledge" tag={<Knowladge list={['SEO', 'Flexibility', 'Team Collaboration', 'Social Media', 'Cryptography']} />} />
        </div>
        <a href="/CV.pdf" download="CV.pdf" className={style.button}><span>Download CV</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></a>
    </div >)
}

export default Resume;