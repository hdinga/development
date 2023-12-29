import globalvars from "../components/_globalvars";

export default function About() {
  const componentName = "About";

  document.title = componentName+globalvars.brandRoot; // DOCUMENT TITLE
  return (
    <>
      <h1>{ componentName }</h1>
    </>
  );
}
