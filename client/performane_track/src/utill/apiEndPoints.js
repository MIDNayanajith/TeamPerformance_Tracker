export const BASE_URL = "http://localhost:5500/api";

export const API_ENDPOINTS = {
  GET_ALL_TEAM_MEMBERS: "/team/getTeamMembers",
  ADD_TEAM_MEMBER: "/team/addTeamMember",
  GET_TEAM_MEMBER_BY_ID: (memberId) => `/team/find/${memberId}`,
  UPDATE_TEAM_MEMBER: (memberId) => `/team/update/${memberId}`,
  DELETE_TEAM_MEMBER: (memberId) => `/team/delete/${memberId}`,
};
