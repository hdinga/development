import React, { useEffect } from "react";

import icons from "./_icons";
import vars from "./_globalvars";
import { AnimPreloader } from "./_behaviors";

export default function Preloader () {

  useEffect(() => {
    AnimPreloader();
  }, []);

  return (
    <>
    <div className="preloader">
      <div className="loader">{ icons.icn_loader }</div>
      <div className="loader-caption">{ vars.brandCaption }</div>
    </div>
    </>
  )
}