import React, { useState } from 'react';
import './Ticket.css'; 

const Ticket = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTickets = [...tickets];
      updatedTickets[editIndex] = { title, description, file };
      setTickets(updatedTickets);
      setEditIndex(null);
    } else {
      setTickets([...tickets, { title, description, file }]);
    }
    setTitle('');
    setDescription('');
    setFile(null);
  };

  const handleEdit = (index) => {
    const ticketToEdit = tickets[index];
    setTitle(ticketToEdit.title);
    setDescription(ticketToEdit.description);
    setFile(ticketToEdit.file);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTickets = [...tickets];
    updatedTickets.splice(index, 1);
    setTickets(updatedTickets);
  };

  return (
    <div className="ticket-container">
      <h2>Tickets</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={handleDescriptionChange}></textarea>
        </div>
        <div>
          <label>Choose File:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit" className="ticket-button">{editIndex !== null ? 'Update' : 'Add'} Ticket</button>
      </form>
      <ul className="ticket-list">
        {tickets.map((ticket, index) => (
          <li key={index}>
            <div>Title: {ticket.title}</div>
            <div>Description: {ticket.description}</div>
            {ticket.file && <div>File: {ticket.file.name}</div>}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ticket;
