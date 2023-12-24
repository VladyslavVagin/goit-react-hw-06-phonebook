import css from './ListOfContacts.module.css';
import { useSelector } from 'react-redux';

const ListOfContacts = () => {
  const contacts = useSelector(state => state.contacts)
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map(contact => {
          return <li className={css.user} key={contact.id}>
          <h3>{contact.name}</h3>
          <p>{contact.number}</p>
          <button type="button" className={css.deleteBtn} >
            Delete
          </button>
        </li>
        })}
      </ul>
    </div>
  );
};


export default ListOfContacts;
