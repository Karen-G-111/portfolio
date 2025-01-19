import { useOutletContext } from "react-router-dom"
import Block from "../Block"
import Title from "../Title"
import Price from "./price/Price"
import ReadyWork from "./ReadyWork"
import MostRecent from "./works/MostRecent"
import { useEffect } from "react"


function Services({ activePage }) {

    const { load } = useOutletContext();
    useEffect(() => {
        load(2);
    }, [])

    return (<div>
        <Title title="Services" tag={<div></div>} />
        <Block title="Most Recent Work" tag={<MostRecent />} />
        <Block title="Flexible Pricing Plan" tag={<Price />} />
        <ReadyWork />
    </div>)
}

export default Services