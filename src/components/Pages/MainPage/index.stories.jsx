import { MainPage } from "./index";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import AlertManager from "../../Organisms/AlertManager";
import { Template } from "webpack";
export default { component: MainPage };

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  (Story) => (
    <div>
      <AlertHandlerProvider>
        <AlertManager />
        <Story />
      </AlertHandlerProvider>
    </div>
  ),
];
