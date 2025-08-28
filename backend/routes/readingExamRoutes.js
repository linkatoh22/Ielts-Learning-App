const express=  require("express");
const router= express.Router();
const {getAllReadingTest,getAllPassage
    ,getDetailReadingTest} = require("../controllers/ReadingExamController")

const {submitReadingTest,getAllSubmittedReadingTest,getDetailSubmittedReadingTest} = require("../controllers/SubmitExamController")

const {AuthMiddleware} = require("../middlewares/authMiddlewares");
router.route("/get-all-passage").get(getAllPassage);
router.route("/get-all-test").get(getAllReadingTest);

router.route("/submit-test/:id").post(AuthMiddleware,submitReadingTest);

router.route("/submit/get-all-submit-test").get(AuthMiddleware,getAllSubmittedReadingTest);
router.route("/submit/get-detail-submit-test/:id").get(AuthMiddleware,getDetailSubmittedReadingTest);

router.route("/get-detail-test/:id").get(AuthMiddleware,getDetailReadingTest);
module.exports = router;