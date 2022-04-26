import { AiOutlinePlus } from 'react-icons/ai'
import './css/notifycard.css'

const NotifyCard = ({
    imgIcon,
    metric,
    metricName
}) => {
    return (
        <div className='notify-card'>
            <div className="icon">
                { imgIcon }
            </div>
            <div className="details">
                <h1>{ metric }</h1>
                <p>{ metricName }</p>
            </div>
            <button>
                <AiOutlinePlus />
            </button>
        </div>
    )
}

export default NotifyCard
