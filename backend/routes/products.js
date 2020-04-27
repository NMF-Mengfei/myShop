var express = require('express');
var router = express.Router();

const data =[
    {
        "floorImg":"/static/imgs/floor1-banner.jpg",
        "itemImg":[
            {'src':'/static/imgs/floor1-1.jpg'},
            {'src':'/static/imgs/floor1-2.png'},
            {'src':'/static/imgs/floor1-3.jpg'},
            {'src':'/static/imgs/floor1-1.jpg'},
            {'src':'/static/imgs/floor1-1.jpg'},
            {'src':'/static/imgs/floor1-1.jpg'},
        ],
    },
    {
        "floorImg":"/static/imgs/floor2_banner.webp",
        "itemImg":[
            {'src':'/static/imgs/floor1-1.jpg'},
            {'src':'/static/imgs/floor1-2.png'},
            {'src':'/static/imgs/floor1-3.jpg'},
            {'src':'/static/imgs/floor1-1.jpg'},
            {'src':'/static/imgs/floor1-1.jpg'},
            {'src':'/static/imgs/floor1-1.jpg'},
        ],
    },
    {
        "floorImg":"/static/imgs/floor1-banner.jpg",
        "itemImg":[
            {'src':'/static/imgs/floor1-1.jpg'},
            {'src':'/static/imgs/floor1-2.png'},
            {'src':'/static/imgs/floor1-3.jpg'},
            {'src':'/static/imgs/floor1-1.jpg'},
            {'src':'/static/imgs/floor1-1.jpg'},
            {'src':'/static/imgs/floor1-1.jpg'},
        ],
    },
]
router.get('/', function(req, res, next) {
    res.json({
        code:0,
        data
    })
});

module.exports = router;
