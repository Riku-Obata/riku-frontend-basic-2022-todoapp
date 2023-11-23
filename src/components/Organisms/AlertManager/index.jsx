import React, { useEffect } from "react";
import { useAlertHandlerContext } from "path/to/contexts/alert_handler";
import Alert from "../../Atoms/Alert";

export const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  useEffect(() => {
    if (AlertHandlerContext.visible === true) {
      AlertHandlerContext.setAlert("message");
    }

    setTimeout(() => {
      AlertHandlerContext.closeAlert("message");
    }, 5000);
  }, []);

  return (
    <Alert
      visible={AlertHandlerContext.visible}
      errorText={AlertHandlerContext.errorText}
    />
  );
};
export default AlertManager;
