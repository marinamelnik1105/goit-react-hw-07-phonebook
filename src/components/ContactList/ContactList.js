import { useDispatch, useSelector } from 'react-redux';
import { ContactData, Item, List } from './ContactList.styled';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    if (filterValue) {
      const normalizedFilter = filterValue.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };
  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactData>
            {name}: {number}
          </ContactData>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
