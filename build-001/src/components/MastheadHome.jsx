import { useEffect } from "react";
//
import icons from "./_icons";
import { HeaderMouseFX } from "./_interactions";
import { Typewriter } from "./_behaviors";
import { PageClickScroll } from "../components/_interactions";
//

export default function MastheadHome () {

  useEffect(() => {
    PageClickScroll();
    Typewriter();
    HeaderMouseFX();
  });

  return (
    <>
    <section className="section-masthead">
      <div className="icn-mouse" title="Scroll down">{icons.icn_mouse}</div>
      <div className="masthead-content">
        <h3 className="masthead-header">
          I am <span className="masthead-title"></span>
        </h3>
        <p>I am a Senior UX UI Product Engineer and architect of amazing user experiences!</p>
      </div>
      <div className="masthead-wrapper">
        <div className="mh bg-home0"></div>
      </div>
    </section>
    </>
  )
}