import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import { fetchContacts } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contact Book</h1>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
