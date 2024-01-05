import { useEffect } from "react";
//
import vars from "../components/_globalvars";
import { BaseLayout } from "../components/_components";
//

export default function Project02() {
  const componentName = "Notehub Alerts"; //COMPONENT NAME

  const SectionContent = () => {
    <div className="page-content">
      <section className="">
        Hello world!
      </section>
    </div>
  }

  useEffect(() => {
    //
  });

  document.title = componentName+vars.brandRoot; // DOCUMENT TITLE

  return (
    <>
      <BaseLayout bground={'bg-home'} content={ <SectionContent />} />
    </>
  );
}
