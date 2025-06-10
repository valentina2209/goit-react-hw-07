import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  
  return (
    <ul>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;

