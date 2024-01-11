import axios from "./axios";

export const getTasksRequest = async () => axios.get("/tasks");

export const createTaskRequest = async (task) => axios.post("/tasks", task);

export const updateTaskRequest = async (id, task) => axios.put(`/tasks/${id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`/tasks/${id}`);

export const getTaskRequest = async (id) => axios.get(`/tasks/${id}`);


export const changeStateRequest = async (id) => {
    try {
      const response = await axios.put(`/tasks/${id}/state`);
      return response.data; // O cualquier otro dato útil que necesites de la respuesta
    } catch (error) {
      throw error; // Lanzar el error para manejarlo en el lugar donde llamas a esta función
    }
  };