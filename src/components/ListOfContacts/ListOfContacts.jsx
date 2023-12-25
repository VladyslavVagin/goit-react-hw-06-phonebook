import css from './ListOfContacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/contactsSlice';
import trashIcon from '../../icons/trash.png';

const ListOfContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.query));

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map(({name, number, id}) => {
          return (
            <li className={css.user} key={id}>
              <h3>{name}</h3>
              <p>{number}</p>
              <button
                type="button"
                className={css.deleteBtn}
                id={id}
                onClick={() => dispatch(deleteUser(contacts))}
              >
                <img src={trashIcon} alt='trash icon' width={20}/>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfContacts;
