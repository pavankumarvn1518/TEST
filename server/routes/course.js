import express from "express";
import { getAllCourses,
     getSingleCoure,
     fetchLectures,
     fetchLecture,
     getMyCourses,
     checkout,
    paymentVerification,
     } from "../controllers/course.js";
import {isAuth} from '../middleware/isAuth.js';
const router =express.Router();

router.get("/course/all",getAllCourses);
router.get("/course/:id",getSingleCoure);
router.get("/lectures/:id",isAuth, fetchLectures);
router.get("/lecture/:id",isAuth, fetchLecture);
router.get("/mycourse",isAuth,getMyCourses);

router.post("/course/checkout/:id",isAuth,checkout);
router.post("/verfication/:id",isAuth,paymentVerification)


//router.get("/lecture/:id",isAuth, fetchLecture,);

export default router;