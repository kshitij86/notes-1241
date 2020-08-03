import api from "./api";

const fetchAllNotes = () => api.get("/fetch/all");
const dropOneNote = (drop_id) =>
  api.post("/drop/one", { note_id: drop_id.toString() });

export default {
  fetchAllNotes,
  dropOneNote,
};
