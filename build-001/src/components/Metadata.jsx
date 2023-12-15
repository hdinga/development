import * as React from "react";
import * as ReactDOM from "react-dom";
import globalvars from "./_globalvars";

export default function Metadata() {
  const headPortal = document.head; // enables adding elements to head

  return ReactDOM.createPortal (
    <>
    {globalvars.metadata}
    </>,
    headPortal
  );
}