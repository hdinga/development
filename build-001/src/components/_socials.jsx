import icons from "./_icons";

export default function Socials() {

    // social links
    const arrSocialLinks = [
      {id: 1, name: "LinkedIn", icon: (icons.icn_linkedin), url: "https://linkedin.com/in/hdinga"},
      {id: 2, name: "Behance", icon: (icons.icn_behance), url: "https://www.behance.net/triggercell"},
      {id: 3, name: "Instagram", icon: (icons.icn_instagram), url: "https://www.instagram.com/triggercell/"},
    ];
  
    const listSocialLinks = arrSocialLinks.map((sociallink) =>
      <a key={sociallink.id} href={sociallink.url} title={sociallink.name} className="icn-social" target="_blank">
        {sociallink.icon}
      </a>
    )

    return (
      <>{ listSocialLinks}</>
    )
}
