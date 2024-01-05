import { useEffect } from "react";
//
import icons from "./_icons";
import { PageClickScroll } from "../components/_interactions";
//

export default function Masthead ({ bground}) {

  useEffect(() => {
    PageClickScroll();
  });

  return (
    <>
    <section className="section-masthead">
      <div className="icn-mouse" title="Scroll down">{icons.icn_mouse}</div>
      <div className="masthead-content"></div>
      <div className="masthead-bground">
        <img src={ './src/assets/bground/'+bground+'.jpg'} className="" alt="" />
      </div>
    </section>
    </>
  )
}