import React, { useEffect } from "react";
import { useAlertHandlerContext } from "path/to/contexts/alert_handler";
import Alert from "../../Atoms/Alert";

export const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  useEffect(() => {
    if (AlertHandlerContext.visible === true) {
      setTimeout(() => {
        AlertHandlerContext.closeAlert();
      }, 5000);
    }
  }, [AlertHandlerContext]);

  return (
    <Alert
      visible={AlertHandlerContext.visible}
      errorText={AlertHandlerContext.errorText}
    />
  );
};
export default AlertManager;
