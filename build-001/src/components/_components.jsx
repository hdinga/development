
import { useEffect } from "react";
//
import icons from "../components/_icons";
import { ScrollToTop } from "../components/_interactions";

//-- [COMPONENT] NEW --
export const BtnScrollUp = () => {

  useEffect(() => {
    ScrollToTop(); // click arrowup func
  })

  return (
    <button className="btn tc-icon icn-arrowup" title="Scroll up">
      { icons.icn_arrowup }
    </button>
  )
}

//-- [COMPONENT] NEW --
export const NewComponent = () => {
  console.log("hello world!");
}