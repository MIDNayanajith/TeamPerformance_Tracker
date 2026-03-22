import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Member name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      trim: true,
      maxLength: 50,
    },
    score: {
      type: Number,
      required: [true, "Score is required"],
      default: 0,
      min: [0, "Score cannot be negative"],
      max: [100, "Score cannot exceed 100"],
    },
  },
  { timestamps: true },
);

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);

export default TeamMember;
