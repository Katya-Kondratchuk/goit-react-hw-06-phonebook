import { ButtonStyled } from 'components/App.styled';
import PropTypes from 'prop-types';
import {
  ContactListStyled,
  ContactsItem,
  ErrorMessage,
} from './ContactForm.styled';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ContactListStyled>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <ButtonStyled type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </ButtonStyled>
          </ContactsItem>
        ))
      ) : (
        <ErrorMessage>'We couldn`t find such a contact'</ErrorMessage>
      )}
    </ContactListStyled>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};