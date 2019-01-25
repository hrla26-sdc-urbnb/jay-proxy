const router = require('express').Router();
const axios = require('axios');

router.route('/reviews/:id')
    .get((req, res) => {
        const productid = req.params.id;
        axios.get(`http://18.188.15.227:80/api/reviews/${productid}`)
        // axios.get(`http://localhost:2019/api/reviews/${productid}`)
            .then(({ data }) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err)
            });
    });
router.route('/reviews')
.post((req, res) => {
    axios.post('http://18.188.15.227:80/api/reviews', req.body)
    // axios.post('http://localhost:2019/api/reviews', req.body)
        .then(({ data }) => {
            console.log(data, 'datas')
            res.send(data);
        })
        .catch((err) => {
            console.log(err, 'error')
            res.send(err);
        });
});







module.exports = router;


