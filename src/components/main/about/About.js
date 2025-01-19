import Block from '../Block';
import Brands from './brands/Brands';
import Interest from './interest/Interest';
import Title from '../Title';
import TitleContent from './title/TitleContent';
import RecentWorks from './works/RecentWorks';
import Clients from './clients/Clients';
import Scroll from '../Scroll';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';

function About() {
    const { load } = useOutletContext();
    useEffect(() => {
        load(1);
    }, [])
    return (<div>
        <Title title="About Me" tag={<TitleContent />} />
        <Block title="Most Recent Work" tag={<RecentWorks />} />
        <Block title="Trusted By 10+ Clients" tag={<Scroll tag={<Clients />} />} />
        <Block title="Interest" tag={<Interest />} />
        <Block title='Working With 65+ Brands' tag={<Scroll tag={<Brands />} />} />
    </div>)
}

export default About;