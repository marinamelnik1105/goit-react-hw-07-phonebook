import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, getFilter } from 'redux/filterSlice';
import { Input } from './Filter.styled';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onChange} />
    </label>
  );
};
