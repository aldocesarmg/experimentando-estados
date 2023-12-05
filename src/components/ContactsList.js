import '../stylesheets/main-styles.css'
import Contact from './Contact';

export default function ContactsList(props) {
    const myContactsList = [{name:'Aldo', phone:'9934031246', relationship:'Myself'}, {name:'Cesar', phone:'9932323714', relationship:'Brother'}];
    const listContacts = myContactsList.map(contact =>
            <Contact name={contact.name} phone={contact.phone} relationship={contact.relationship}/>
            );
    
    return(
        <div>
            {listContacts}
        </div>
    );
}