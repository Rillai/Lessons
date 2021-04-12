import axios from "axios";
const instance = axios.create({
    baseURL: "http://127.0.0.1:3000/",
    withCredentials: true,
    responseType: "json"
})
export const tasksApi = {
    getTasks() {
        return instance.get(`tasks`)
    },
    addTask(text, taskId) {
        return instance.post(`tasks/`, { id: taskId, task: text, isDone: false },)
    },
    isDone(taskId, isDone) {
        return instance.patch(`tasks/${taskId}`, { isDone: isDone })
    },
};
