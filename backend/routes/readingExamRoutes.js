const express=  require("express");
const router= express.Router();
const {getAllReadingTest,getAllPassage} = require("../controllers/ReadingExamController")
const {submitReadingTest} = require("../controllers/SubmitReadingExamController")

router.route("/get-all-passage").get(getAllPassage);
router.route("/get-all-test").get(getAllReadingTest);
router.route("/submit-test/:id").post(submitReadingTest);
module.exports = router;