import css from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "./redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactOps";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <p>Loading contacts...</p>}
      {error && <p>Error! Try again later</p>}
      <ContactList />
    </div>
  );
}
