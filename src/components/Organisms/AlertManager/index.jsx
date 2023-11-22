import React, { useState, useEffect } from "react";
import { useAlertHandlerContext } from "path/to/contexts/alert_handler";
import Alert from "../../Atoms/Alert";

export const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  //AlertHandlerContextから直接値が取り出せる
  console.log(AlertHandlerContext.visible);
  AlertHandlerContext.setAlert("message"); //Alertの表示
  return <Alert />;
};
export default AlertManager;
