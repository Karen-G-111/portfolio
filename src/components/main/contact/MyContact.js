import { useOutletContext } from 'react-router-dom';
import Block from '../Block'
import Title from '../Title'
import Form from './Form'
import style from './MyContact.module.css'
import { useEffect } from 'react';

function MyContact() {
    const { load } = useOutletContext();
    useEffect(() => {
        load(5);
    }, [])
    return (<div>
        <Title title="Contact" />
        <div className={style.dark}>
            <Block title="Let's Get In Touch" tag={<Form />} />
        </div>
        <div className={style.map}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.970106670385!2d44.4703994!3d40.20972790000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a97deea898529%3A0xc19f2709daa7f31c!2zMTk4INSy1aHVt9Wr1bbVu9Wh1bLVtdWh1bbVqyDWg9W41bLVuNaBLCDUtdaA1ofVodW2IDAwNzg!5e0!3m2!1shy!2sam!4v1731372483641!5m2!1shy!2sam" width="800" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
    </div>)
}

export default MyContact