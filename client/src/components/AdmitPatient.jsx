import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdmitPatient = (props) => {
    const{patientList, setPatientList} = props;

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()
        const newPatient = {name, age, symptoms}
        axios.post("http://localhost:8000/api/admitPatient", newPatient)
            .then((res) => {
                console.log(res)
                console.log(res.data);
                // These next 3 lines will reset the form to empty on refresh or submit
                setName("");
                setAge("");
                setSymptoms("");
                setErrors({})
                // Using the spread operator(...) to make a copy of everything inside state
                setPatientList([...patientList, res.data])
                navigate('/displayAllPatients')
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }

    return (

        // FORM

        <div className='admit-form'>
            <Link to={"/displayAllPatients"}><button className='home-btn'>Home</button></Link>
            <h2>Admit Patient</h2>
            <form onSubmit={submitHandler}>

                <div className='form-fields'>
                    <label>Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                    {
                    errors.name?
                    <p className='errors'>{errors.name.message}</p>:
                    null
                }
                </div>

                <br/>

                <div className='form-fields'>
                    <label>Age: </label>
                    <input type="number" onChange={(e) => setAge(e.target.value)} value={age}/>
                    {
                    errors.age?
                    <p className='errors'>{errors.age.message}</p>:
                    null
                }
                </div>

                <br/>

                <div className='form-fields'>
                <label>Symptoms: </label>
                    <textarea rows="4" cols="50" onChange={(e) => setSymptoms(e.target.value)} value={symptoms}/>
                    {
                    errors.symptoms?
                    <p className='errors'>{errors.symptoms.message}</p>:
                    null
                }
                </div>

                <br/>

                <button className='submit-btn'>Admit Patient</button>

            </form>
        </div>
)}

export default AdmitPatient;