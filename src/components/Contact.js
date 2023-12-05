import '../stylesheets/main-styles.css'
import PersonalizedButton from './Buttons';

export default function Contact(props) {
    return(
        <div className="contact-container">
            <h2 className='name-title'>{props.name}</h2>
            <h4 className='phone-desc'>{props.phone}</h4>
            <p className='relationship-desc'>{props.relationship}</p>
            <div className='contact-options'>
                <PersonalizedButton myAction='editContact' myActionText='Edit'/>
                <PersonalizedButton myAction='remove' myActionText='Remove'/>
                <PersonalizedButton myAction='moveUp' myActionText='Up'/>
                <PersonalizedButton myAction='moveDown' myActionText='Down'/>
            </div>
        </div>
    );
}