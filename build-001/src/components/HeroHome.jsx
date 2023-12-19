import icons from "./_icons"
import TypewriterFX from "./TypewriterFX"

export default function HeroHome ({onClick}) {



  return (
    <>
    <div className="tc-masthead">
      <div className="masthead-content">
        <h3 className="masthead-title">
          I am 
          <TypewriterFX />
        </h3>
        <p>I am a Senior UX UI Product Engineer and architect of amazing user experiences!</p>
      </div>
      <div className="icn-mouse" title="Scroll down" onClick={onClick}>{icons.icn_mouse}</div>
    </div>
    </>
  )
}