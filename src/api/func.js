import api from "./api";

// endpoints = {
//   createNote: "/create/",
//   fetchAll: "/fetch/all",
//   fetchOne: "/fetch/one",
// };

const fetchAllNotes = () => api.get("/fetch/all");

export default {
  fetchAllNotes,
};
