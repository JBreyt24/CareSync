import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const DisplayAllPatients = (props) => {
    const { patientList, setPatientList } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/findAllPatients")
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setPatientList(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (

        <div>
            <div className="header-inline">
                <h2 className="registered-patient">Registered Patients</h2>
                <div className="header-buttons">
                    <Link to={"/admitPatient"}>
                        <button className="admit-btn">Admit Patient</button>
                    </Link>
                    <Link to={"/"}>
                        <button className="logout-btn">Logout</button>
                    </Link>
                </div>
            </div>
            {
                patientList.map((patient, index) => (
                    <div className='display-all-bx' key={patient._id}>
                        <Link to={`/patient/${patient._id}`}>{patient.name}</Link>
                        <p>Age: {patient.age}</p>
                        <p>Symptoms: {patient.symptoms}</p>
                        <Link to={`/patient/updatePatient/${patient._id}`}>
                            <button className='edit-btn'>Edit</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAllPatients;