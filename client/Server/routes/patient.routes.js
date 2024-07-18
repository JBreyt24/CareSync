const patientController = require('../controllers/patient.controller')

module.exports = (app) => {
    app.get('/api/findAllPatients', patientController.findAllPatients)
    app.get('/api/findOnePatient/:id', patientController.findOnePatient)
    app.post('/api/admitPatient', patientController.admitPatient)
    app.put('/api/updatePatient/:id', patientController.updatePatient)
    app.delete('/api/dischargePatient/:id', patientController.dischargePatient)
}