var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req)
    if(req.body.username ==='root' && req.body.pwd==='1234'){
        res.json({
            code:0,
            message:'登陆成功'
        })
    }else{
        res.json({
            code:1,
            message:'账号或密码错误'
        })
    }
    
});

module.exports = router;
