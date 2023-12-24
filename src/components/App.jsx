import AddContactForm from './AddContactForm/AddContactForm';
import ListOfContacts from './ListOfContacts/ListOfContacts';
import Filter from './Filter/Filter';

export const App = () => {

    return (
        <div className="container">
          <h1>Phonebook</h1>
          <AddContactForm />
          <h2>Contacts</h2>
          <Filter/>
          <ListOfContacts />
        </div>
    );
  
}
