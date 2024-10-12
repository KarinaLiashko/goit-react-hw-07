import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactOps";
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa"; // Updated import

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  function onDelete(id) {
    dispatch(deleteContact(id));
  }
  return (
    <>
      <div>
        <h2 className={css.title}>
          <FaUser className={css.icon} size="14" /> {contact.name}
        </h2>
        <p className={css.phone}>
          <FaPhone className={css.icon} size="14" />
          {contact.number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </>
  );
}
