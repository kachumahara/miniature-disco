import axios from "axios";

export default {
  getProjects: function () {
    return axios.get("/api/projects");
  },
  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },
  deleteProject: function (id) {
    return axios.delete("/api/projects/" + id);
  },
  createProject: function (projectData) {
    return axios.post("/api/projects/", projectData);
  },

  getTasks: function () {
    return axios.get("/api/task");
  },

  getTask: function (id) {
    return axios.get("/api/task/" + id);
  },

  deleteTasks: function (id) {
    return axios.delete("/api/task/" + id);
  },

  createTask: function (taskData) {
    return axios.post("/api/task" + taskData);
  },

  getDeadlines: function () {
    return axios.get("/api/deadline");
  },

  updateDeadlines: function (id) {
    return axios.put("/api/deadline/" + id);
  },

  deleteDeadline: function (id) {
    return axios.delete("/api/deadline/" + id);
  },
};
