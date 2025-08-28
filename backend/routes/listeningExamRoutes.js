const express=  require("express");
const router= express.Router();
const {getAllAudio,getAllListeningTest,
  getDetailListeningTest} = require("../controllers/ListeningExamController")


const {submitListeningTest,
  getAllSubmittedListeningTest,getDetailSubmittedListeningTest} = require("../controllers/SubmitExamController")
const {AuthMiddleware} = require("../middlewares/authMiddlewares");


router.route("/get-all-audio").get(getAllAudio);
router.route("/get-all-test").get(getAllListeningTest);

router.route("/submit/submit-test/:id").post(AuthMiddleware,submitListeningTest);

router.route("/submit/get-all-submit-test").get(AuthMiddleware,getAllSubmittedListeningTest);
router.route("/submit/get-detail-submit-test/:id").get(AuthMiddleware,getDetailSubmittedListeningTest);


router.route("/get-detail-test/:id").get(AuthMiddleware,getDetailListeningTest);

module.exports = router;