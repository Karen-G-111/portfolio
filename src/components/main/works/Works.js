import ReadyWork from '../services/ReadyWork'
import WorkList from './worklist/WorkList';
import Title from '../Title'
import style from './Works.module.css'
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';

function Works() {
    const { load } = useOutletContext();
    useEffect(() => {
        load(4);
    }, [])
    return (<div>
        <Title title="Works" />
        <WorkList />
        <ReadyWork />
    </div>)
}

export default Works