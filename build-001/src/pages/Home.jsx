import { useEffect } from "react";
//
import NavigationBar from "../components/NavigationBar";
import MastheadHome from "../components/MastheadHome";
import Footer from "../components/Footer";
import vars from "../components/_globalvars";
import { ContentLoadFX } from "../components/_behaviors";
import { BtnScrollUp } from "../components/_components";

//
export default function Home() {
  const componentName = "Home";

  // ARRAY: CLIENTS
  const clients = [
    { id: 1, title: "Triggercell Designs" },
    { id: 2, title: "Mimoco" },
    { id: 3, title: "MullenLowe" },
    { id: 4, title: "Quickhit Football" },
    { id: 5, title: "Arnold Worldwide" },
    { id: 6, title: "SapientNitro" },
    { id: 7, title: "DigitasLBi" },
    { id: 8, title: "Jack Morton Worldwide" },
    { id: 9, title: "EF Go Ahead Tours" },
    { id: 10, title: "Belfinesse Concierge" },
    { id: 11, title: "Blues Wireless" },
  ];

  // ARRAY: SKILLS
  const skills = [
    { id: 1, title: "User Experience (UX)*", rank: "87%", years: "7 years", color: "bg-blue-md", },
    { id: 2, title: "UI Interaction Design (IxD)*", rank: "95%", years: "15 years", color: "bg-blue-md", },
    { id: 3, title: "Prototyping*", rank: "82%", years: "9 years", color: "bg-blue-md", },
    { id: 4, title: "Usability Testing*", rank: "66%", years: "5 years", color: "bg-blue-md", },
    { id: 5, title: "Storyboarding", rank: "68%", years: "5 years", color: "bg-blue-md", },
    { id: 6, title: "HTML5/CSS3*", rank: "96%", years: "15 years", color: "bg-blue-md", },
    { id: 7, title: "Javascript/JQuery", rank: "41%", years: "3 years", color: "bg-blue-md", },
    { id: 8, title: "ReactJS", rank: "39%", years: "1 years", color: "bg-blue-md", },
    { id: 9, title: "Interactive/Animation", rank: "88%", years: "10 years", color: "bg-blue-md", },
    { id: 10, title: "Motion Graphics SFX", rank: "34%", years: "4 years", color: "bg-blue-md", },
    { id: 11, title: "Machine Learning AI", rank: "7%", years: "0.5 years", color: "bg-blue-md", },
  ];

  // ARRAY: PROJECTS
  const projects = [

    { id: 10, title: "Notehub Alerts & Notifications", caption: "Design alert system for account updates", url: "/notehub-alerts", },
    { id: 9, title: "Blues Brand Design", caption: "Design official company brand identity", url: "/notehub-brand", },
    { id: 8, title: "Notehub Suggestive Search UX", caption: "Design smart suggestive search and filter UI", url: "/notehub-search", },
    { id: 7, title: "Nordic Visitor APP", caption: "", url: "/nordic-visitor-app", },
    { id: 6, title: "Subway Menu APP", caption: "", url: "/subway-app", },
    { id: 5, title: "Staples Home Office APP", caption: "", url: "/staples-app", },
    { id: 4, title: "Quickhit APP", caption: "", url: "/quickhit-app", },
    { id: 3, title: "EF - Must-see Campaign", caption: "", url: "/ef-must-see", },
    { id: 2, title: "EF - Airfare Sale Campaign", caption: "", url: "/ef-airfare-sale", },
    { id: 1, title: "EF - Summer Sale Campaign", caption: "", url: "/ef-summer-sale", },
  ];

  // COMPONENT: SKILL
  const listSkills = skills.map((skill) => (
    <div key={skill.id} className="col-lg-4 col-md-6 col-sm-12 skill-tile">
      <div className="card ml-1">
        <div className="card-body">
          {skill.title}
          <span className="badge badge-light ml-2">{skill.years}</span>
          <div className="progress">
            <div
              className={"progress-bar" + " " + skill.color}
              role="progressbar"
              style={{ width: skill.rank }}
              aria-valuenow={skill.rank}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {skill.rank}
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  // COMPONENT: CLIENT
  const listClients = clients.map((client) => (
    <div key={client.id} className="col-md-3 col-sm-6 col-xs-6 client-tile">
      <img
        className="img-fluid"
        src={"./src/assets/clients/client"+client.id+".png"}
        title={client.title}
        alt={client.title}
      />
    </div>
  ));

  // COMPONENT: PROJECTS
  const listProjects = projects.map((project) => (
    <figure key={ project.id } className="order-0 col-md-4 col-sm-6 col-xs-12 gallery-tile">
      <a href={ project.url }>
        <img className="img-fluid" src={ "./src/assets/prj"+project.id+"/prj-hero.jpg" } alt={ project.title } />
        <div className="gallery-caption">
          <h6>{ project.title }</h6>
          <span>{ project.caption }</span>
        </div>
      </a>
    </figure>
  ));

  useEffect(() => {
    ContentLoadFX('.gallery-tile', '.section-projects'); // page content load animation (project)
    ContentLoadFX('.skill-tile', '.section-expertise'); // page content load animation (skill)
    ContentLoadFX('.client-tile', '.section-clients'); // page content load animation (clients)
  })

  document.title = componentName+vars.brandRoot; // DOCUMENT TITLE

  return (
    <>
      <NavigationBar />

      <BtnScrollUp />

      <MastheadHome />

      <section className="section-projects">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-label">Case studies</h2>
            </div>
          </div>
          <div className="row">
            { listProjects }
          </div>
        </div>
      </section>

      <section className="section-expertise">
        <div className="container">
          <div className="row pb-5">
            <div className="col-12">
              <h2 className="section-label">Expertise</h2>
            </div>
          </div>
          <div className="row mx-5 no-gutter">{ listSkills }</div>
        </div>
      </section>

      <section className="section-clients">
        <div className="container">
          <div className="row pb-5">
            <div className="col-12">
              <h2 className="section-label">Client network</h2>
            </div>
          </div>
          <div className="row mx-5 justify-content-center">{ listClients }</div>
        </div>
      </section>

      <Footer />
    </>
  );
}
