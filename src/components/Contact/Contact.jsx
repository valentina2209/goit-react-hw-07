import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
   <li className={css.item}>
  <div className={css.contactDetails}>
    <p className={css.name}>
      <FaUser className={css.icon} />
      {contact.name}
    </p>
    <p className={css.phone}>
      <FaPhone className={css.icon} />
      {contact.number}
    </p>
  </div>
  <button className={css.btn} onClick={handleDelete}>
    Delete
  </button>
</li>
  );
};

export default Contact;




