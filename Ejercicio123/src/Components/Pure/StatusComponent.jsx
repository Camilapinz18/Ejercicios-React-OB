import PropTypes from 'prop-types'
import { Contact } from '../../Models/Contact.class'

const StatusComponent = ({ contact }) => {
    return (
        <div>
            <h2>Name: {contact.name}</h2>
            <h2>Surname: {contact.surname}</h2>
            <h3>Email: {contact.email}</h3>
            <h4>Status: {contact.connected? 'On-line':'Off-line'} </h4>

        </div>
    )
}

StatusComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default StatusComponent;

