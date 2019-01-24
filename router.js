const router = require('express').Router();
const axios = require('axios');

router.route('/reviews/:id')
    .get((req, res) => {
        const {id} = req.params;
        axios.get(`http://18.188.207.136:2019/reviews/${id}`)
            .then((data) => {
                res.send(data);
            })
            .catch(err => res.send(err));
    });







module.exports = router;


