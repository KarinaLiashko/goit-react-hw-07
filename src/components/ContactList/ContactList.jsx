import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(item => (
        <li className={css.item} key={item.id}>
          <Contact contact={item} className={css.contact} />
        </li>
      ))}
    </ul>
  );
}
