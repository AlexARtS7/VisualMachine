import AppChannelItem from './AppChannelItem';
import { useSelector } from 'react-redux';
import './appChannelList.scss'

const AppChannelList = () => {
    const {channels} = useSelector(state => state);
    const items = channels.map((item, i) => {       
        return <AppChannelItem 
                min={item.min}
                max={item.max}
                mark={item.mark}
                key={i}
                id={i}
                assemble={item.assemble}
                rear={item.rear}
                front={item.front}
                reaction={item.reaction}/>
    })

    return (
       <>
            {items}
       </>
    )
}

export default AppChannelList;