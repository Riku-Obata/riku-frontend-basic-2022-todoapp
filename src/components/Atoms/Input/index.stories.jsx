import { Input } from "./index";
import { onEditComplete } from "./index";
import { defaultValue } from "./index";

export default { component: Input };

export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};
