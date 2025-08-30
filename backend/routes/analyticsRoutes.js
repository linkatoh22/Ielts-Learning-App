const {getLeadsStats,getTrafficStats} = require("../controllers/AnalyticsControllers")
const express=  require("express");
const router= express.Router();
const {AdminMiddleware} = require("../middlewares/adminMiddleware")
router.get("/traffic", AdminMiddleware,async (req, res,next) => {
  try {
    const stats = await getTrafficStats();
    return res.status(200).json({
        code:200,
        status:"SUCCESS",    
        stats
    
    });
  } catch (err) {
    next(err)
  }
});

router.get("/leads", AdminMiddleware,async (req, res,next) => {
    try {
        const stats = await getLeadsStats();
        return res.status(200).json({
            code:200,
            status:"SUCCESS",    
            stats
        });
    } catch (err) {
        next(err)
    }
});

module.exports = router; 