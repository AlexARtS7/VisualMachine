import { useSelector, useDispatch } from 'react-redux'

// let arr = []

const AppChannelItem = () => {
 
    const rate = useSelector(state => state.rate)
    
    const elements = () => {
        const arr = []
        for (let i = 0; i <= rate ; i ++){
            arr.push(<option key={i} value={i}>{i}</option>)  
        }
            return (
                arr
            )        
    }
       
    
    return (
        <div className="appchannellist">
            <span className="appchannellist__title">Channel </span>
            <div className="appchannellist__line"></div>
                <div className="flex">
                    <div className="appchannellist__center">
                        <div className="appchannellist__navtext">Start</div>
                        <select className="appchannellist__select" size={4}>
                            {elements()}
                        </select>
                    </div>
                    <div className="appchannellist__center">
                        <div className="appchannellist__navtext">End</div>
                        <select className="appchannellist__select" size={4}>
                            {elements()}
                        </select>
                    </div>
                </div>
            
        </div>
    )
}

export default AppChannelItem;