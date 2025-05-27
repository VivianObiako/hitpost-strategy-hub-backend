const axios = require('axios');

class FormController {
    async submitForm(req, res) {
        const data = req.body;

        console.log('Received form data:', data);

        try {
            const response = await axios.post(data.webhookUrl || 'https://hooks.zapier.com/hooks/catch/14172690/2nafne5', data.formData);
            res.status(response.status).json({ message: 'Form submitted successfully', data: response.data });
        } catch (error) {
            res.status(error.response ? error.response.status : 500).json({ message: 'Error submitting form', error: error.message });
        }
    }
}

module.exports = new FormController();