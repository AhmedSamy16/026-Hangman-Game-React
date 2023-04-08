import { useEffect } from "react"

const Notification = ({ showNotification, setShowNotification }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNotification(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [showNotification])
    return (
        <div class={`notification-container ${showNotification && 'show'}`}>
            <p>You have already entered this letter</p>
        </div>
    )
}

export default Notification