import TeamMember from "../model/teamMember.js";

//get all members
export const getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find({});
    res.status(200).json({
      success: true,
      data: teamMembers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching team members",
    });
  }
};

//create new team member
export const addTeamMember = async (req, res) => {
  try {
    const createNewMember = await TeamMember.create(req.body);
    res.status(201).json({
      success: true,
      message: "Team member created successfully",
      data: createNewMember,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating team member",
    });
  }
};

//update team member
export const updateTeamMember = async (req, res) => {
  try {
    const memberId = req.params.memberId;

    const memberExist = await TeamMember.findById(memberId);
    if (!memberExist) {
      return res.status(404).json({ message: "Team member not found." });
    }

    const updatedMember = await TeamMember.findByIdAndUpdate(
      memberId,
      req.body,
      { new: true, runValidators: true },
    );

    res.status(200).json({
      success: true,
      data: updatedMember,
      message: "Team member updated successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//delete team member
export const deleteTeamMember = async (req, res) => {
  try {
    const memberId = req.params.memberId;

    const memberExist = await TeamMember.findById(memberId);
    if (!memberExist) {
      return res
        .status(404)
        .json({ success: false, message: "Team member not found." });
    }

    await TeamMember.findByIdAndDelete(memberId);

    res.status(200).json({
      success: true,
      data: null,
      message: "Team member deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
