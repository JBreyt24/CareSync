const Patient = require('../models/patient.model')

module.exports = {
    // Read All
    findAllPatients: (req, res) => {
        Patient.find()
            .then((allPatients) => {
                res.status(200).json(allPatients)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Read One (Finding by _id)
    findOnePatient: (req, res) => {
        console.log(req.params);
        Patient.findOne({_id: req.params.id})
            .then((onePatient) => {
                res.status(200).json(onePatient)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Create
    admitPatient: (req, res) => {
        console.log(req.body);
        Patient.create(req.body)
            .then((newPatient) => {
                res.status(201).json(newPatient)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Update (Finding by _id)
    updatePatient: (req, res) => {
        Patient.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedPatient) => {
                res.json(updatedPatient)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Delete (Finding by _id)
    dischargePatient: (req, res) => {
        Patient.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}