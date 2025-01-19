import style from "./Price.module.css"
import PriceCard from "./PriceCard"

function Price() {
    return (<div className={style.main}>
        <PriceCard
            name="Basic"
            describe="Need just Landing page"
            cost={9}
            list={[true, false, false, false]}
        />

        <PriceCard
            name="Standart"
            describe="Have design ready to build?"
            cost={20}
            list={[true, true, false, false]}
        />

        <PriceCard
            name="Enterprise"
            describe="Have design ready and want some iteractive elements"
            cost={31}
            list={[true, true, true, true]}
        />
    </div>)
}

export default Price