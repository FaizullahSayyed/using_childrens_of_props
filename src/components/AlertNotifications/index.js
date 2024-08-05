import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotification = () => {
  const notificationList = [
    {
      icon: <AiFillCheckCircle />,
      heading: 'Success',
      description: 'You can access all the files in the folder',
      class: 'success',
    },
    {
      icon: <RiErrorWarningFill />,
      heading: 'Error',
      description:
        'Sorry, you are not authorized to have access to delete the file',
      class: 'error',
    },
    {
      icon: <MdWarning />,
      heading: 'Warning',
      description: 'Viewers of this file can see comments and suggestions',
      class: 'warning',
    },
    {
      icon: <MdInfo />,
      heading: 'Info',
      description: 'Anyone on the internet can view these files',
      class: 'info',
    },
  ]

  return (
    <div className="bg-container">
      <div className="inner-container">
        <h1 className="main-heading">Alert Notifications</h1>
        {notificationList.map(eachNotification => (
          <Notification>
            <div className={`icon-container ${eachNotification.class}`}>
              {eachNotification.icon}
            </div>
            <div className="description-container">
              <h1 className="heading">{eachNotification.heading}</h1>
              <p className="description">{eachNotification.description}</p>
            </div>
          </Notification>
        ))}
      </div>
    </div>
  )
}

export default AlertNotification
