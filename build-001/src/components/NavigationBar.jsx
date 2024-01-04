import { useState } from "react";
//
import gsap from "gsap";
import icons from "./_icons";
import { EmailContact } from "./_components";
import { SocialLinks } from "./_components";
//

export default function NavigationBar() {

  let currPathname = window.location.pathname; // get current url pathname
  const colorcode = getComputedStyle(document.body); // get color value from document
  const [isActive, setIsActive] = useState(false); // nav menu state

  // nav items
  const arrNavItems = [
    {id: 1, name: "Home", url: "/home", class: '', target: "_self"},
    {id: 2, name: "Resumé", url: "./src/assets/hd-resume.pdf", class: "", target: "_blank"},
    {id: 3, name: "About", url: "/about", class: '', target: "_self"},
    {id: 4, name: "Shop", url: "#", class: 'disabled', target: "_self"},
  ];

  const listNavItems = arrNavItems.map((navitem) =>
    <li key={navitem.id} className={'nav-item'+(navitem.class ? ' '+navitem.class:'')+(navitem.url === currPathname ? ' '+'active':'')}>
      <a href={navitem.url} target={ navitem.target }>{ navitem.name }</a>
    </li>
  )

  // MENU OPEN/CLOSE FUNCTION
  function fnMenuState() {
    setIsActive(!isActive);
    if (isActive) {
      gsap.to('.nav-menu-container', {top:"-100%", duration:.2, ease: 'power1.in'});
      gsap.to('#icn_menu .icn-bground', {fill:(colorcode.getPropertyValue('--tc-color-grey-lt')), ease: 'circ.Out'}); // get color var from document
      gsap.to('#icn_menu .icn-fground1', {rotation: 0, transformOrigin:"80% 100%", ease: 'circ.Out'});
      gsap.to('#icn_menu .icn-fground2', {rotation: 0, transformOrigin:"80% 0%",  ease: 'circ.Out'});
    } else {
      gsap.to('.nav-menu-container', {top:"0%", duration:.2, ease: 'power1.in'});
      gsap.to('#icn_menu .icn-bground', {fill:(colorcode.getPropertyValue('--tc-color-red-md')), ease: 'circ.Out'});
      gsap.to('#icn_menu .icn-fground1', { rotation: -45, transformOrigin:"80% 100%", ease: 'circ.Out'});
      gsap.to('#icn_menu .icn-fground2', { rotation: 45, transformOrigin:"80% 0%",  ease: 'circ.Out'});
    }
  } 

  return (
    <>
    <header>
      <nav>
        <div className="nav-header">
          <a href="/home" className="nav-header-logo" alt="Triggercell Portfolio">{icons.icn_logobrand}</a>
          <button type="button" className="btn ml-auto" title="Menu" onClick={fnMenuState}>
            {icons.icn_menu}
          </button>
        </div>
        <div className={'nav-menu-container'+(isActive ? ' active' : '')}>
          <div className="nav-menu">
            <div className="mt-5">
              <div className="section-label">Menu</div>
              <ul role="navigation">{ listNavItems }</ul>
            </div>
            <div className="nav-contact">
              <span className="section-label">Contact</span>
              <EmailContact />
              <div className="mt-3"><SocialLinks/></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}