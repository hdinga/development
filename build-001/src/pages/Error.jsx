import globalvars from "../components/_globalvars";

export default function Error() {
  const componentName = "Error 404";

  document.title = componentName+globalvars.brandRoot; // DOCUMENT TITLE
  return (
    <>
      <h1> Error 404: Page not found</h1>
    </>
  );
}
