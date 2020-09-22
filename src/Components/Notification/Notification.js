import './Notification.css';

const Notification = (props) => {
    return (
        <div class='notification-wrapper'>
            {
                props.notificationData.isActive && (
                    <div class='notification'>
                        <div>{props.notificationData.message}</div>
                    </div>
                )
            }
        </div>
    )
};

export default Notification;