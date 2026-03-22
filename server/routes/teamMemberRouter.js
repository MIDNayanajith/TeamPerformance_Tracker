import express from "express";
import {
  getTeamMembers,
  addTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../controller/teamMemberController.js";
const teamMemberRouter = express.Router();

teamMemberRouter.get("/getTeamMembers", getTeamMembers);
teamMemberRouter.post("/addTeamMember", addTeamMember);
teamMemberRouter.put("/update/:memberId", updateTeamMember);
teamMemberRouter.delete("/delete/:memberId", deleteTeamMember);
export default teamMemberRouter;
