import { useState } from "react";
import gsap from "gsap";
import vars from "./_globalvars";
import icons from "./_icons";

export default function NavigationBar() {

  // nav menu state
  const [isActive, setIsActive] = useState(false);

  // nav items
  const arrNavItems = [
    {id: 1, name: "Home", url: "/home", class: "nav-active", target: "self"},
    {id: 2, name: "Resumé", url: "./src/assets/hd-resume.pdf", class: "", target: "_blank"},
    {id: 3, name: "About", url: "/about", class: "", target: "self"},
    {id: 4, name: "Shop", url: "#", class: "disabled", target: "self"},
  ];

  // social links
  const arrSocialLinks = [
    {id: 1, name: "LinkedIn", icon: (icons.icn_linkedin), url: "https://linkedin.com/in/hdinga"},
    {id: 2, name: "Behance", icon: (icons.icn_behance), url: "https://www.behance.net/triggercell"},
    {id: 3, name: "Instagram", icon: (icons.icn_instagram), url: "https://www.instagram.com/triggercell/"},
  ];

  const listNavItems = arrNavItems.map((navitem) =>
    <li key={navitem.id} className="nav-item">
      <a className={navitem.class} href={navitem.url} target={navitem.target}>{navitem.name}</a>
    </li>
  )

  const listSocialLinks = arrSocialLinks.map((sociallink) =>
    <a key={sociallink.id} href={sociallink.url} title={sociallink.name} className="icn-social" target="_blank">
      {sociallink.icon}
    </a>
  )

  //
  function fnMenuState() {
    setIsActive(!isActive);
    if (isActive) {
      gsap.to('.nav-menu-container', {top:"-100%", duration:.2, delay: 0.2, ease: 'circ.Out'});
    } else {
      gsap.to('.nav-menu-container', {top:"0%", duration:.2, delay: 0.2, ease: 'circ.Out'});
    }
  }

  return (
    <>
    <header>
      <nav>
        <div className="nav-header">
          <a href="/home.html" className="nav-header-logo" alt="Triggercell Portfolio">{icons.icn_logobrand}</a>
          <button type="button" className="btn ml-auto" onClick={fnMenuState}>
            {icons.icn_menu}
          </button>
        </div>
        <div className={'nav-menu-container'+(isActive ? ' active' : '')}>
          <div className="nav-menu">
            <div className="section-label">Menu</div>
            <ul role="navigation">
              { listNavItems }
            </ul>
            <div className="nav-contact">
              <span className="section-label">Get in touch</span>
              <div>
                <a href={'mailto:'+vars.email} className="email-link">{vars.email}</a>
              </div>
              <div className="mt-2">{ listSocialLinks }</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}