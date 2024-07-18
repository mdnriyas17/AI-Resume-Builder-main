import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL+"/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const CreateNewResume = (data) => axiosClient.post("/ai-resumes", data);

const GetUserResumes = (userEmail) =>
  axiosClient.get("/ai-resumes?userEmail=" + userEmail);

const UpdateResumeDetail = (id, data) =>
  axiosClient.put("/ai-resumes/" + id, data);

const GetResumeById = (id) =>
  axiosClient.get("/ai-resumes/" + id );

const DeleteResumeById = (id) => axiosClient.delete("/ai-resumes/" + id);

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};
