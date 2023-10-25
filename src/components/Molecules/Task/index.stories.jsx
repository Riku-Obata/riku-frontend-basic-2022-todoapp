import { Task } from "./index";

export default { component: Task };

export const Default = {
  args: {
    onTaskNameChange: (valued) => {
      console.log("taskname changed:" + valued);
    },
    onTaskComplete: () => {
      console.log("task completed");
    },
    taskName: "",
    defaultIsEditing: false,
  },
};
