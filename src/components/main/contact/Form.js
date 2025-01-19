import style from './Form.module.css'

function Form() {

    return (<form className={style.form}>
        <div className={style.a}>
            <input type='text' className={`${style.name} ${style.input}`} placeholder='Name*' required />
            <input type='email' className={`${style.email} ${style.input}`} placeholder='Email*' required />
            <input className={`${style.subject} ${style.input}`} placeholder='Subject*' required />
            <textarea className={`${style.text} ${style.input}`} placeholder='Tell us more about your needs......' />
        </div>
        <button className={style.button} type='submit'>Send Message</button>
    </form>)
}

export default Form;