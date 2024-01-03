import { useEffect } from "react";
//
import NavigationBar from "../components/NavigationBar";
import Masthead from "../components/Masthead";
import Footer from "../components/Footer";
import vars from "../components/_globalvars";
//import icons from "../components/_icons";
import { BtnScrollUp } from "../components/_components";
//

export default function About() {
  const componentName = "About";

  // ARRAY: LOGOS
  const logos = [
    { id: 1, title: 'Triggercell logo', desc: 'Original logo', src: '1b', year: '2004', },
    { id: 2, title: 'Triggercell logo', desc: 'Redesigned for simplicity', src: '1c', year: '2010', },
    { id: 3, title: 'Triggercell logo', desc: 'Redesigned for representation', src: '2a', year: '2019', },
    { id: 4, title: 'Triggercell logo', desc: 'Redesigned for modernity', src: '2b', year: '2024', },
  ];

  // COMPONENT: SKILL
  const listLogos = logos.map((logo) => (
    <figure key={ logo.id } className="col-lg-3 col-md-6">
      <img src={ './src/assets/tc-logo-'+logo.src+'.png' } className="img-fluid" alt={ logo.title }/>
      <figcaption className="figure-caption text-center">{ logo.year }</figcaption>
      <p className="mt-4 text-center small">{ logo.desc }</p>
    </figure>
  ));

  useEffect(() => {
    //
  })

  document.title = componentName+vars.brandRoot; // DOCUMENT TITLE

  return (
    <>

      <NavigationBar />

      <BtnScrollUp />

      <Masthead />

      <section className="section-about">
        <div className="container section-offset-y">

          <div className="row about-wrapper">
            <div className="col-lg-6 col-md-12 about-profile-img"></div>
            <div className="col-lg-6 col-md-12 about-career">
              <h6 className="">—Curiousity complex</h6>
              <h1>I'm <span>{ vars.brandOwner }</span></h1>
              <p>
                I am a UX UI design enthusiast, driven by empathic curiosity for people, prowess for untangling complex problems into simple modular solutions, and passion for crafting seamless user experiences that meet business objectives. Fluent in user centric designs and functionality, I consider myself the invisible glue that connects stakeholders, developers and end users to the final product.
              </p>
            </div>
          </div>

          <div className="row m-5">
            <div className="col">
              <p>
                Growing up as a kid, I only had one tool in my arsenal; a screwdriver! I've always been motivated by passion and curiosity to figure out how things work. I would take my toys apart and try rebuilding them to be better, stronger, faster! And although I didn’t always manage to screw them back together as they originally were, I always remained curiously intrigued to tinker and fix things. It is this unyielding passion that’s helped shaped my career — to be a visual thinker and problem solver; to focus on understanding the process and implementing design that's intuitive, engaging and improving people's experiences through design.
              </p>
              <p>
                I consider myself fortunate to have worked with some of the most brilliant minds in the industry. My philosophy on design as in life is, it's a never-ending work in progress with room for improvement. I constantly challenge myself to learn from my mistakes and research new and better ways of working more efficiently.
              </p>
              <p>
                When I'm not working, I enjoy traveling, photography, sports and spending time with family and friends.
              </p>
              <blockquote>
                <i>
                  "Behind every great creation resides thought and with an addition of feeling and effort it was brought to life."
                </i>
              </blockquote>
            </div>
          </div>

          <div className="row about-brand">
            <div className="col-md-6 my-auto">
              <h4 className="mt-4 mb-0">trigger&middot;cell</h4>
              <h6 className="mb-2 text-muted">/triggercell/ noun</h6>
              <p>
                Triggercell is a composition of two words; trigger and battery cell, meaning stored creative potential ready to be utilized on demand for a given design task.
              </p>
            </div>
            <div className="col-md-6 about-brand-img"></div>
          </div>

          <div className="row m-5 p-5">
            { listLogos }
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
