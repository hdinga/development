import globalvars from "../components/_globalvars";

export default function About() {
  const componentName = "About";

  document.title = componentName+globalvars.siteRoot;
  return (
    <>
      <h1> About me</h1>
    </>
  );
}
