import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import { ArrowUpDown, Plus, Minus, Trash2 } from "lucide-react";
import { BASE_URL, API_ENDPOINTS } from "../utill/apiEndPoints";

const Home = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isSortedByTop, setIsSortedByTop] = useState(false);
  const [loading, setLoading] = useState(false);

  //Get all member api call
  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}${API_ENDPOINTS.GET_ALL_TEAM_MEMBERS}`,
      );
      const result = await res.json();
      if (result.success) {
        setTeamMembers(result.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch team members:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const toggleSort = () => {
    setIsSortedByTop(!isSortedByTop);
  };

  // Update score api call
  const updateScore = async (memberId, newScore) => {
    try {
      const res = await fetch(
        `${BASE_URL}${API_ENDPOINTS.UPDATE_TEAM_MEMBER(memberId)}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ score: newScore }),
        },
      );
      const result = await res.json();
      if (result.success) {
        fetchTeamMembers();
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  // Delete member api call
  const deleteMember = async (memberId) => {
    if (!window.confirm("Delete this team member?")) return;
    try {
      const res = await fetch(
        `${BASE_URL}${API_ENDPOINTS.DELETE_TEAM_MEMBER(memberId)}`,
        { method: "DELETE" },
      );
      const result = await res.json();
      if (result.success) {
        fetchTeamMembers();
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const displayedMembers = isSortedByTop
    ? [...teamMembers].sort((a, b) => b.score - a.score)
    : teamMembers;

  const CardStyle = (score) => {
    if (score < 40) return "border-red-500 bg-red-50";
    if (score > 80) return "border-green-500 bg-green-50";
    return "border-gray-200 bg-white";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Dashboard activeMenu="Dashboard">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                Team Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Manage team performance scores
              </p>
            </div>
            <button
              onClick={toggleSort}
              className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all shadow-sm"
            >
              <ArrowUpDown className="w-5 h-5" />
              {isSortedByTop ? "Reset Sort" : "Sort by Top Performers"}
            </button>
          </div>

          {loading ? (
            <div className="text-center py-16 text-xl text-gray-500">
              Loading team members...
            </div>
          ) : displayedMembers.length === 0 ? (
            <div className="text-center py-20 text-gray-600 text-xl bg-white rounded-2xl shadow-sm">
              No team members.
              <br />
              <span className="text-indigo-600 font-medium">
                Go to "Add Team Member" to create your first entry.
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedMembers.map((member) => (
                <div
                  key={member._id}
                  className={`rounded-3xl border-4 shadow-lg p-8 transition-all hover:shadow-xl ${CardStyle(
                    member.score,
                  )}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-xl mt-1">
                        {member.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-6xl font-extrabold ${
                          member.score < 40
                            ? "text-red-600"
                            : member.score > 80
                              ? "text-green-600"
                              : "text-gray-900"
                        }`}
                      >
                        {member.score}
                      </div>
                      <p className="text-sm text-gray-500 font-medium mt-1">
                        PERFORMANCE
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-3 gap-4">
                    <button
                      onClick={() =>
                        updateScore(member._id, Math.min(100, member.score + 5))
                      }
                      className="flex items-center justify-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 font-semibold py-4 rounded-2xl transition"
                    >
                      <Plus className="w-5 h-5" /> +5
                    </button>

                    <button
                      onClick={() =>
                        updateScore(member._id, Math.max(0, member.score - 5))
                      }
                      className="flex items-center justify-center gap-2 bg-orange-100 hover:bg-orange-200 text-orange-700 font-semibold py-4 rounded-2xl transition"
                    >
                      <Minus className="w-5 h-5" /> -5
                    </button>

                    <button
                      onClick={() => deleteMember(member._id)}
                      className="flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-4 rounded-2xl transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Dashboard>
    </div>
  );
};

export default Home;
