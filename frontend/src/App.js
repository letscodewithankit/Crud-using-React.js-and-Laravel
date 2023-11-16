import React, { createContext } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Table from './Components/Table';

export const UserData=createContext();

function App() {
 
  

  
  
    
  
  return (
  <>
  <Header/>
  <UserData.Provider >
  <Table />
  </UserData.Provider>
  <Footer/>
 
  </>
  );
}

export default App;
