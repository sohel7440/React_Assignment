import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './components/TableComponent';
import { User } from './interfaces/User';


function App() {

  const users:User[]=[
    {
      id:1,
      name:"Sohel Khan",
      email:"sohel@gmail.com",
      phone:"87767665768"
    },
    {
      id:2,
      name:"Suryakanta",
      email:"suryakanta@gmail.com",
      phone:"85463254155"
    },
    {
      id:3,
      name:"Sankar",
      email:"sankar@gmail.com",
      phone:"87767666368"
    },
    {
      id:4,
      name:"Soumya",
      email:"soumya@gmail.com",
      phone:"877676636555"
    },
  ]
  return (
    <div className="App">
      <h1 style={{ marginBottom: '20px' }}><u>User List</u></h1>
      <TableComponent users={users}/>
    </div>
  );
}

export default App;
