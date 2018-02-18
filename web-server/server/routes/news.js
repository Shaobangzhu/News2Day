var express = require('express');
var router = express.Router();

/* GET news listing. */
router.get('/', function(req, res, next) {
  news = [
    {'url':'https://www.cnn.com/2018/02/16/politics/mueller-indictments-special-counsel/index.html',
     'title':"Inside Andrew Puzder's failed nomination",
     'description':"In the end, Andrew Puzder had too much baggage -- both personal and professional",
     'source':'cnn',
     'urlToImage':'https://cdn.theatlantic.com/assets/media/img/mt/2017/10/RTX3HW14/facebook.jpg',
     'digest':"3RjuEmojo2601syZbU70HA==\n",
     'reason':"Recommend"
    },
    {'url':'https://www.cnn.com/2018/02/16/sport/olympics-2018-live-results/index.html',
     'title':"Inside Andrew Puzder's failed nomination",
     'description':"In the end, Andrew Puzder had too much baggage -- both personal and professional",
     'source':'cnn',
     'urlToImage':'https://fortunedotcom.files.wordpress.com/2017/03/470381149.jpg',
     'digest':"3RjuEmojo2601syZbU70HA==\n",
     'time':"Today",
     'reason':"Hot"
    }
  ]
  res.json(news);
});

module.exports = router;
