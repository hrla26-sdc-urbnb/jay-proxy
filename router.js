const router = require('express').Router();
const axios = require('axios');
const redis = require('redis');
const client = redis.createClient(6379, '18.221.20.44');


client.on('connect', ()=>{
    console.log('connected to redis')
});
 
client.on('error', function (err) {
    console.log("Error " + err);
});

router.route('/reviews/:id')
.get((req, res) => {
    const productid = req.params.id;
    client.get(productid, (err, result)=>{
        if(err){console.log(err)}
        else{ 
            // console.log('result is here', result)
            if(JSON.parse(result) === null){
                axios.get(`http://18.188.15.227:80/api/reviews/${productid}`)
                // axios.get(`http://localhost:2019/api/reviews/${productid}`)
                    .then(({ data }) => {
                        // console.log(data, 'erferklfjelkrf')
                        client.set(productid, JSON.stringify(data))
                        res.send(data);
                    })
                    .catch((err) => {
                        res.send(err)
                    });
            } else {
                // console.log('result is ', JSON.parse(result))
                res.send(JSON.parse(result));
            }
        }
    })
});
router.route('/reviews')
.post((req, res) => {
    axios.post('http://18.188.15.227:80/api/reviews', req.body)
    // axios.post('http://localhost:2019/api/reviews', req.body)
        .then(({ data }) => {
            // console.log(data, 'datas')
            res.send(data);
        })
        .catch((err) => {
            // console.log(err, 'error')
            res.send(err);
        });
});







module.exports = router;


