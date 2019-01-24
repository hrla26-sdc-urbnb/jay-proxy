const router = require('express').Router();
const axios = require('axios');

router.route('/reviews/:id')
    .get((req, res) => {
        const {id} = req.params;
        axios.get(`http://ec2-18-188-207-136.us-east-2.compute.amazonaws.com:2019/api/reviews/${id}`)
            .then((data) => {
                res.send(data.data);
            })
            .catch((err) => {
                res.send(err)
            });
    });
router.route('/reviews')
.post((req, res) => {
    axios.post('http://ec2-18-188-207-136.us-east-2.compute.amazonaws.com:2019/api/reviews', req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log('second catch');
            res.send(err);
        });
});







module.exports = router;


