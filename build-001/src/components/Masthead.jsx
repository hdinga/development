import icons from "./_icons";
import { HeaderMouseFX } from "./_interactions";
import { Typewriter } from "./_behaviors";

import { useEffect } from "react";

export default function HeroHome ({onClick}) {

  useEffect(() => {
    Typewriter();
    HeaderMouseFX();
  });

  return (
    <>
    <section className="section-masthead">
      <div className="masthead-content">
        <h3 className="masthead-header">
          I am <span className="masthead-title"></span>
        </h3>
        <p>I am a Senior UX UI Product Engineer and architect of amazing user experiences!</p>
      </div>
      <div className="icn-mouse" title="Scroll down" onClick={onClick}>{icons.icn_mouse}</div>
    </section>
    </>
  )
}