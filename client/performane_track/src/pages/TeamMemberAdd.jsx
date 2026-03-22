import React, { useState } from "react";
import { Plus } from "lucide-react";
import { BASE_URL, API_ENDPOINTS } from "../utill/apiEndPoints";
import Dashboard from "../components/Dashboard";
import { useNavigate } from "react-router-dom";

const TeamMemberAdd = () => {
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    score: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewMember((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    if (!newMember.name.trim() || !newMember.role.trim() || !newMember.score) {
      alert("Please fill all fields");
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}${API_ENDPOINTS.ADD_TEAM_MEMBER}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newMember.name.trim(),
          role: newMember.role.trim(),
          score: parseInt(newMember.score, 10),
        }),
      });
      const result = await res.json();
      if (result.success) {
        setNewMember({ name: "", role: "", score: "" });
        setSuccessMessage("Team member added successfully!");
        setTimeout(() => {
          setSuccessMessage("");
          navigate("/dashboard");
        }, 3000);
      } else {
        alert(result.message || "Failed to add member");
      }
    } catch (error) {
      console.error("Add failed:", error);
      alert("Error adding member. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Dashboard activeMenu="Add Team Member">
        <div className="max-w-2xl mx-auto p-6">
          <div className="bg-white rounded-3xl shadow-lg p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Add New Team Member
            </h2>
            {successMessage && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-2xl text-center font-medium">
                {successMessage}
              </div>
            )}
            <form onSubmit={handleAddMember} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name..."
                  name="name"
                  value={newMember.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  placeholder="Enter role..."
                  name="role"
                  value={newMember.role}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Initial Score (0-100)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Enter score..."
                  name="score"
                  value={newMember.score}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-5 rounded-2xl text-lg transition-all flex items-center justify-center gap-3 shadow-sm"
              >
                <Plus className="w-6 h-6" />
                Add Team Member
              </button>
            </form>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default TeamMemberAdd;
