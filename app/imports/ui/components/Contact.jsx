import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image, ListGroup } from 'react-bootstrap';
import Note from './Note';
import AddNote from './AddNote';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const StuffItem = ({ contact, notes }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
    </Card.Header>
    <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
    <Card.Subtitle>{contact.address}</Card.Subtitle>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <Link to={`/edit/${contact._id}`}>Edit</Link>
      <ListGroup variant="flush">
        {notes.map((note) => <Note key={note._id} note={note} />)}
      </ListGroup>
      <AddNote owner={contact.owner} contactId={contact._id} />
      <Link to={`/edit/${contact._id}`}>Edit</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
StuffItem.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape({
    note: PropTypes.string,
    contactId: PropTypes.string,
    owner: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    _id: PropTypes.string,
  })).isRequired,
};

export default StuffItem;
