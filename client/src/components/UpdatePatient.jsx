import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const UpdatePatient = (props) => {
    // Calling id from app.jsx from the routes
    const {id} = useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOnePatient/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setName(res.data.name)
            setAge(res.data.age)
            setSymptoms(res.data.symptoms)
        })
        .catch ((err) => {
            console.log(err);
        })

    }, [id])


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updatePatient/${id}`, {
            name,
            age,
            symptoms
        })
        .then((res) => {
            console.log(res);
            console.log(res.data)
            navigate(`/patient/${id}`)
        })
        .catch ((err) => {
            console.log(err);
            setErrors(err.response.data.errors)
        })
    }

    return (

        // UPDATE FORM

        <div className='update-form'>
            <Link to={"/displayAllPatients"}><button className='home-btn'>Home</button></Link>
            <Link to={`/patient/${id}`}><button className='details-btn'>Patient Details</button></Link>
            <h2>Update Patient</h2>
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

                <button className='submit-btn'>Update</button>

            </form>

        </div>
    )
}

export default UpdatePatient;