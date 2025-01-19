import { useOutletContext } from 'react-router-dom'
import Footer from '../../Footer'
import ReadyWork from '../../services/ReadyWork'
import style from './WorkInfoPage.module.css'
import { useEffect } from 'react';

function WorkInfoPage({ imgs, info, headImg, name }) {

    const { activePage } = useOutletContext();
    useEffect(() => {
        activePage[1](0);
    }, [])


    return (<div className={style.body}>

        <h2 className={style.title}>{name}</h2>

        <div className={style.headImg}>
            <img src={headImg} alt='' />
        </div>

        <div className={style.info}>
            <div className={style.details}>
                <p className={style.headInfo}>Project Details:</p>
                <div className={style.infoContent}>
                    <p className={style.inf}><span>Client:</span> <span>{info.client}</span></p>
                    <p className={style.inf}><span>Industry:</span> <span>{info.industry}</span></p>
                    <p className={style.inf}><span>Technologies:</span> <span>{info.technologies}</span></p>
                    <p className={style.inf}><span>Date:</span> <span>{info.date}</span></p>
                    <p className={style.inf}><span>URL:</span> <a href={info.url.url}>{info.url.name}</a></p>
                    <p className={style.inf}><span>Share:</span> <span className={style.links}>
                        <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg></a>
                        <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>    </a>
                        <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg></a>
                        <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg></a>
                        <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg></a>
                    </span></p>
                </div>
            </div>
            <div>
                <p className={style.headInfo2}>Project Info:</p>
                <div className={style.projectInfo}>
                    {info.projectInfo.map((v, i) => <p key={i} className={style.infoText}>{v}</p>)}
                </div>
            </div>

        </div>

        <div className={style.imgs}>
            {imgs.map((v, i) => {
                return (<div className={style.img} key={i}>
                    <img src={v} alt={i} />
                </div>)
            })}
        </div>

        <ReadyWork isFullS={true} />
        <Footer isFullS={true} />
    </div>)
}

export default WorkInfoPage