import { Input } from "./index";

export default { component: Input };

export const onEditComplete = {
  args: {
    onEditComplete: () => <input type="text" />,
  },
};

export const defaultValue = {
  args: {
    defaultValue: () => <input type="text" />,
  },
};
