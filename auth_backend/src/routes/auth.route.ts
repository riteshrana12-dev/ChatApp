import { Router } from "express";
import {
  signUp,
  signIn,
  refresh,
  logOut,
} from "../controllers/auth.controller";
const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/refreshtoken", refresh);
authRouter.get("/refreshtoken", refresh);
authRouter.post("/logout", logOut);

export default authRouter;
