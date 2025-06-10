import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { toast } from "react-hot-toast";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn); 

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (error) toast.error("Failed to load contacts");
  }, [error]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      <SearchBox />
      <ContactList />
    </>
  );
}



