import { Input } from "./index";

export default { component: Input };

export const Default = {
  args: {
    onEditComplete: () => <input type="text" />,
    defaultValue: () => <input default="" />,
  },
};
