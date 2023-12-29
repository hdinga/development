import globalvars from "../components/_globalvars";

export default function ProjectNotehubAlerts() {
  const componentName = "Notehub Alerts";

  document.title = componentName+globalvars.brandRoot; // DOCUMENT TITLE
  return (
    <>
      <h1>{ componentName }</h1>
    </>
  );
}
