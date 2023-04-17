import { useDispatch, useSelector } from 'react-redux';
import { ContactData, Item, List, NameContact } from './ContactList.styled';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { deleteContacts } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    if (contacts) {
      const normalizedFilter = filterValue.toLowerCase();
      const nameFilter = contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
      return nameFilter;
    } else {
      return;
    }
  };
  const visibleContacts = getVisibleContacts();
  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <Item key={id}>
          <ContactData>
            <NameContact>{name}</NameContact>
            <p>{phone}</p>
          </ContactData>
          <button type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
