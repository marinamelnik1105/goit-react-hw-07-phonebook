import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle.styled';
import { Layout } from './Layout.styled';
export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts !== null) {
  //     const parsedContacts = JSON.parse(savedContacts);
  //     return parsedContacts;
  //   }
  //   return initalContacts;
  // });

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  // const addContacts = newContacts => {
  //   const repeatCheck = () => {
  //     return contacts.some(value => {
  //       return value.name.toLowerCase() === newContacts.name.toLowerCase();
  //     });
  //   };
  //   if (repeatCheck()) {
  //     return alert(`${newContacts.name} is already in contacts.`);
  //   } else {
  //     setContacts(prevState => [...prevState, newContacts]);
  //   }
  // };
  // const deleteContacts = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };
  // const changeFilter = e => {
  //   setFilter(e.target.value);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );

  // const visibleContacts = getVisibleContacts();
  return (
    <Layout>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Layout>
  );
};
