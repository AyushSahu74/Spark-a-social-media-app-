import express from "express";
import { Bookmark, follow, getMyProfile, getOtherUsers, Register, unfollow } from "../controllers/userConstroller.js";
import { Login } from "../controllers/userConstroller.js";
import { Logout } from "../controllers/userConstroller.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAuthenticated,Bookmark);
router.route("/profile/:id").get(isAuthenticated,getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated,getOtherUsers);
router.route("/follow/:id").post(isAuthenticated,follow);
router.route("/unfollow/:id").post(isAuthenticated,unfollow);

export default router;
