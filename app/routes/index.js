import childRouter from "./child-route.js";
import parentRouter from "./parent-route.js";
import userRouter from "./auth.js";
import matchRouter from "./match-route.js";
import surveyRouter from "./surveyRouter.js";
import router from "./fosterchild-route.js";

export default (app) => {
  app.use("/child", childRouter);
  app.use("/parent", parentRouter);
  app.use("/matches", matchRouter);
  app.use("/api/auth", userRouter);
  app.use("/api/survey", surveyRouter);
  app.use("/api/fosterchild", router);
};
