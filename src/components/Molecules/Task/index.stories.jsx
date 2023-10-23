import { Task } from "./index";

export default { component: Task };

export const Default = {
  args: {
    onTaskNameChange: (value) => {
      console.log("edit complete:" + value);
    },
    onTaskComplete: "",
    taskName: "",
    defaultIsEditing: "",
  },
};
