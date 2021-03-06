const myRepository = require('../DB/myRepository');
const express = require('express');
const router = express.Router();

router.get("/all", (req, res) => {
    res.send(myRepository.getall(req.params.all));
});

router.get("/:name", async (req, res) => {
    console.log(req.params.name);
    res.send(await myRepository.findUserByname(req.params.name))
});


router.post("/", async (req, res) => {
    let isAllOK = await myRepository.addUser(req.body);
    if (isAllOK === true) {
        res.send("added new user");
    }
    else {
        res.send("unsuccessful adding new user");
    }
});

router.put("/updateAmount/:name", async (req, res) => {
    let isAllOK = await myRepository.updateAmount(req.body.couponValue, req.params.name);
    if (isAllOK === true) {
        res.send("amount update");
    }
    else {
        res.send("unsuccessful updating");
    }
});

module.exports = router;
