import { Contact } from "../../Models/Contact.class";
import StatusComponent from "../Pure/StatusComponent";

const ContactListComponent=()=>{
    
    const defaultContact=new Contact('Jake','Olkkonen','jolkkonen@gmail.com',false);

    return(
        <div>
            <StatusComponent contact={defaultContact}></StatusComponent>
        </div>
    )

}

export default ContactListComponent;