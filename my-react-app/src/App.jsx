import React from 'react';
import SalesCard from "./components/salescard.jsx";
import Input from "./components/input.jsx";
import DropdDown from './components/dropdown-menu.jsx';
import PrimaryButton from './components/primary-button.jsx';
import TextArea from './components/TextArea.jsx';


const Admin = () => {
  return (
    <div >

      <h3 >Admin</h3>

      <SalesCard/>
      <Input/>
      <DropdDown/>
      <TextArea/>
      <PrimaryButton/>


    </div>
  );
};

export default Admin;
