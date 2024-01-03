import { useEffect } from "react";
//
import icons from "./_icons";
//

export default function Masthead () {

  // ARRAY: BGROUNDS
  const bgrounds = [
    { id: 1, title: 'About', class:'', src: 'bg-about', },
  ];

  // COMPONENT: BGROUNDS
  const listBgrounds = bgrounds.map((bground) => (
    <img 
      key={ bground.id } 
      className={ bground.class } 
      src={ './src/assets/bground/'+bground.src+'.jpg'} 
      alt={ bground.title } 
    />
  ));

  useEffect(() => {
    //
  });

  return (
    <>
    <section className="section-masthead">
      <div className="icn-mouse" title="Scroll down">{icons.icn_mouse}</div>
      <div className="masthead-content"></div>
      <div className="masthead-bground">
        { listBgrounds }
      </div>
    </section>
    </>
  )
}