import './css/notifybanner.css'

const NotifyBanner = ({ username, msg, btnLabel }) => {
    return (
        <div className='notify-banner'>
            <div className="details">
                <h3>Hi, { username }</h3>
                <p>{ msg } <span>Pro</span></p>
            </div>
            <button>{ btnLabel }</button>
        </div>
    )
}

export default NotifyBanner
