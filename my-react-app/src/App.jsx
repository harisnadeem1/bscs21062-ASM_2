import React from 'react';
import SalesCard from "./components/salescard.jsx";
import Input from "./components/input.jsx";
import DropdDown from './components/dropdown-menu.jsx';



const Dashboard = () => {
  return (
    <div >
      <SalesCard/>
      <Input/>
      <DropdDown/>
    </div>
  );
};

export default Dashboard;
