import { useState } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './PhonebookForm.styled';
import { addContact } from 'redux/ContactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
const PhonebookForm = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    setInputs(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!inputs.name.trim() || !inputs.number.trim()) {
      alert('Please fill in all the fields');
      return;
    }

    const newContact = {
      ...inputs,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setInputs({});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          value={inputs.name || ''}
          onChange={handleChange}
          type="text"
          name="name"
          required
        />
      </FormLabel>

      <FormLabel>
        Number
        <FormInput
          value={inputs.number || ''}
          onChange={handleChange}
          type="tel"
          name="number"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};

export default PhonebookForm;
