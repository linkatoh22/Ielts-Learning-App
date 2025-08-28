const express=  require("express");
const router= express.Router();
const {getAllAudio,getAllListeningTest} = require("../controllers/ListeningExamController")


router.route("/get-all-audio").get(getAllAudio);
router.route("/get-all-test").get(getAllListeningTest);
// router.route("/submit-test/:id").post(submitReadingTest);
module.exports = router;