import ChannelItem from './ChannelItem';
import { useSelector } from 'react-redux';
import './channelList.scss'

const ChannelList = () => {
    const {channels} = useSelector(state => state);

    const items = channels.map((item, i) => {
            return <ChannelItem key={i} id={i}/>       
    })

    return (
       <>
            {items}
       </>
    )
}

export default ChannelList;