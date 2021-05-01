const response = {
    success: (req, res, data, status, message = '') => {
        if (message) console.log(message);
        res.status(status || 200).send({ error: '', body: data });
    },
    error: (req, res, error, status, message) => {
        console.error(message);
        res.status(status || 500).send({ error: error, body: '' });
    }
};

module.exports = response;