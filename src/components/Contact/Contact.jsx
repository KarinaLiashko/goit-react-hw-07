export default function Contact({ contact, onDelete }) {
  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}
