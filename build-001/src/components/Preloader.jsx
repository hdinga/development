import React, { useEffect } from "react";
import icons from "./_icons";
import { AnimPreloader } from "./_animations";

export default function Preloader () {

  useEffect(() => {
    AnimPreloader();
  }, []);

  return (
    <>
    <div className="preloader">
      <div className="loader">{icons.icn_loader}</div>
    </div>
    </>
  )
}