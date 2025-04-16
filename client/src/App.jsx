import { useState, useEffect } from 'react'
import './App.css'
import AdmitPatient from './components/AdmitPatient';
import DisplayAllPatients from './components/DisplayAllPatients';
import DisplayOnePatient from './components/DisplayOnePatient';
import HomePage from './views/HomePage';
import UpdatePatient from './components/UpdatePatient';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Can't display two components at the same path so import 
// a VIEW component that contains the two components to display together

function App() {
  const [patientList, setPatientList] = useState([]);
  
  return (
    <>
    <h1>CareSync Patient Care App</h1>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/admitPatient" element={<AdmitPatient patientList={patientList} setPatientList={setPatientList} />}/>
          <Route path="/patient/:id" element={<DisplayOnePatient/>}/>
          <Route path="/patient/updatePatient/:id" element={<UpdatePatient/>}/>
          <Route path='/displayAllPatients' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
