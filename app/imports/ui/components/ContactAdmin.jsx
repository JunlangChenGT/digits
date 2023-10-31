import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
import Footer from './Footer';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const ContactAdmin = ({ contact }) => (
  <Card>
    <Card.Header>
      <Image src={contact.image} width={75} />
    </Card.Header>
    <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
    <Card.Subtitle>{contact.address}</Card.Subtitle>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <Footer classname="blockquote-footer">{contact.owner}</Footer>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
ContactAdmin.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default ContactAdmin;
