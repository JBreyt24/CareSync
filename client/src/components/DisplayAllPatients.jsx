import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';


const DisplayAllPatients = (props) => {
    const {patientList, setPatientList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/findAllPatients")
        .then ((res) => {
            console.log(res)
            console.log(res.data)
            setPatientList(res.data)
        })
        .catch ((err) => {
            console.log(err);
        })
}, [])

    return(

        <div>
            <Link to={"/admitPatient"}><button className='admit-btn'>Admit Patient</button></Link>
            <Link to={"/"}><button className='logout-btn'>Logout</button></Link>
            <h2>
                All Patients:
            </h2>
            {
                patientList.map((patient, index) => (
                    // Getting patient by _id
                    <div className='display-all-bx' key={patient._id}>
                        <Link to={`/patient/${patient._id}`}>{patient.name}</Link>
                        <p>Age: {patient.age}</p>
                        <p>Symptoms: {patient.symptoms}</p>
                        <Link to={`/patient/updatePatient/${patient._id}`} ><button className='edit-btn'>Edit</button></Link>
                    </div>
                ))

            }
        </div>
    )
}

export default DisplayAllPatients;