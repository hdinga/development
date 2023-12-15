import icons from "./_icons"

export default function HeroHome ({onClick}) {

  return (
    <>
    <div className="tc-masthead">
      <div className="icn-mouse" title="Scroll down" onClick={onClick}>{icons.icn_mouse}</div>
    </div>
    </>
  )
}