const router = require('express').Router();
const axios = require('axios');

router.route('/reviews/:id')
    .get((req, res) => {
        const id = parseInt(req.params.id);
        console.log(id, 'here')
        axios.get(`http://ec2-18-188-207-136.us-east-2.compute.amazonaws.com:2019/reviews/${id}`)
            .then((data) => {
                console.log(data, 'data')
                res.send(data);
            })
            .catch(err => res.send(err));
    });
router.route('/reviews')
.post((req, res) => {
    axios.post('http://ec2-18-188-207-136.us-east-2.compute.amazonaws.com:2019/reviews', req.body)
        .then((data) => {
            res.send(data);
        })
        .catch(err => res.send(err));
});







module.exports = router;


