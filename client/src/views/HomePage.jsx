import React, { useState, useEffect } from 'react';
import DisplayAllPatients from '../components/DisplayAllPatients';
import AdmitPatient from '../components/AdmitPatient';



const HomePage = () => {
    const [patientList, setPatientList] = useState([]);

    return (
        <>
            <DisplayAllPatients patientList = {patientList} setPatientList = {setPatientList}/>
        </>
)}

export default HomePage;