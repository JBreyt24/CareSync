import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const DisplayOnePatient = (props) => {
    const {id} = useParams();
    const [onePatient, setOnePatient] = useState({});
    const navigate = useNavigate();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/findOnePatient/${id}`)
        .then((res) => {
            console.log(res)
            console.log(res.data)
            // Clear state with the next line
            setOnePatient(res.data);
        })
        .catch ((err) => {
            console.log(err.response.data);
        })

    }, [id])


    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/dischargePatient/${id}`)
        .then((res) => {
            console.log(res.data)
            navigate('/displayAllPatients')
        })
        .catch ((err) => {
            console.log(err.response.data);
        })
    }

    return(
        <div className='displayOne-page'>
            <Link to={"/displayAllPatients"}><button className='home-btn'>Home</button></Link>
            <Link to={`/patient/updatePatient/${id}`}><button className='update-rec-btn'>Update</button></Link>
            <h2 className='displayOne-header'>{onePatient.name}</h2>
            <p>Age: {onePatient.age}</p>
            <p>Symptoms: {onePatient.symptoms}</p>
            <button className='delete-btn' onClick={deleteHandler}>Discharge Patient</button>
        </div>
    )
}

export default DisplayOnePatient;