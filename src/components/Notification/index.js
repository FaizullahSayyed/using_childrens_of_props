import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)

  return (
    <div className="card">
      {children}
      <div className="form-close-icon-container">
        <GrFormClose />
      </div>
    </div>
  )
}

export default Notification
