import NavigationBar from "../components/NavigationBar";
import HeroHome from "../components/HeroHome";
import Footer from "../components/Footer";
import globalvars from "../components/_globalvars";

export default function Home() {
  const componentName = "Home";

  // ARRAY: CLIENTS
  const clients = [
    {
      id: 1,
      title: "Triggercell Designs",
      src: "./src/assets/clients/client1.png",
    },
    { id: 2, title: "Mimoco", src: "./src/assets/clients/client2.png" },
    { id: 3, title: "MullenLowe", src: "./src/assets/clients/client3.png" },
    {
      id: 4,
      title: "Quickhit Football",
      src: "./src/assets/clients/client4.png",
    },
    {
      id: 5,
      title: "Arnold Worldwide",
      src: "./src/assets/clients/client5.png",
    },
    { id: 6, title: "SapientNitro", src: "./src/assets/clients/client6.png" },
    { id: 7, title: "DigitasLBi", src: "./src/assets/clients/client7.png" },
    {
      id: 8,
      title: "Jack Morton Worldwide",
      src: "./src/assets/clients/client8.png",
    },
    {
      id: 9,
      title: "EF Go Ahead Tours",
      src: "./src/assets/clients/client9.png",
    },
    {
      id: 10,
      title: "Belfinesse Concierge",
      src: "./src/assets/clients/client10.png",
    },
    {
      id: 11,
      title: "Blues Wireless",
      src: "./src/assets/clients/client11.png",
    },
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
    <div key={skill.id} className="col-lg-4 col-md-6 col-sm-12">
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
    <div key={client.id} className="clients-tile col-md-3 col-sm-6 col-xs-6">
      <img
        className="img-fluid"
        src={client.src}
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



  // SCROLL CLICK
  function handleScrollClick(e) {
    e.target.scrollIntoView({ behavior: "smooth" });
    console.log(e.target);
  }


  document.title = componentName+globalvars.siteRoot;

  return (
    <>
      <NavigationBar />
      <HeroHome onClick={handleScrollClick} />

      <section className="section-projects">
        <div className="container-fluid">
          <div className="row pb-5"><div className="col-12"><h2 className="section-label">Case studies</h2></div></div>
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
          <div className="row mx-5 no-gutter">{listSkills}</div>
        </div>
      </section>

      <section className="section-clients">
        <div className="container">
          <div className="row pb-5">
            <div className="col-12">
              <h2 className="section-label">Client network</h2>
            </div>
          </div>
          <div className="row mx-5 justify-content-center">{listClients}</div>
        </div>
      </section>

      <Footer />
    </>
  );
}