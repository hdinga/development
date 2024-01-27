
import { useEffect } from "react";
//
import icons from "../components/_icons";
import vars from "./_globalvars";
import NavigationBar from "../components/NavigationBar";
import Masthead from "../components/Masthead";
import Footer from "../components/Footer";
import { ScrollToTop } from "../components/_interactions";
//

//-- [COMPONENT] NEW --
export const BtnScrollUp = () => { // TODO: COMBINE COMPONENT & FUNCNALITY TOGETHER ^

  useEffect(() => {
    ScrollToTop(); // click arrowup func
  })

  return (
    <button className="btn tc-icon icn-arrowup" title="Scroll up">
      { icons.icn_arrowup }
    </button>
  )
}

//-- [COMPONENT] EMAIL --
export const EmailContact = () => {
  const hiddenemail = atob(vars.brandEmail); // decoded email

  return (
    <a href={"mailto:"+hiddenemail+"?subject=General questions"} className="email-link">
      { hiddenemail }
    </a>
  )
}

//-- [COMPONENT] SOCIAL LINKS --
export const SocialLinks = () => {
  // social links
  const arrSocialLinks = [
    {id: 1, name: "LinkedIn", icon: (icons.icn_linkedin), url: "https://linkedin.com/in/hdinga"},
    {id: 2, name: "Github", icon: (icons.icn_github), url: "https://github.com/hdinga"},
    {id: 3, name: "Instagram", icon: (icons.icn_instagram), url: "https://www.instagram.com/triggercell"},
  ];

  const listSocialLinks = arrSocialLinks.map((sociallink) =>
    <a key={ sociallink.id } href={ sociallink.url } title={ sociallink.name } className="icn-social" target="_blank">
      { sociallink.icon }
    </a>
  )

  return (
    <>{ listSocialLinks }</>
  )
}

//-- [COMPONENT] BASELAYOUT --
export const BaseLayout = ({ bground, content }) => {

  return (
    <>
      <NavigationBar />

      <Masthead bground={ bground }/>

      { content }

      <BtnScrollUp />

      <Footer />
    </>
  )
}

//-- [COMPONENT] NEW --
export const NewComponent = () => {
  console.log("hello world!");
}


