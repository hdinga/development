import vars from "./_globalvars";

export default function Footer() {
  const componentName = "Footer";

  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6 text-md-left text-center py-2">
          { "© "+vars.currentYear+" "+vars.siteName }
        </div>
        <div className="col-12 col-sm-6 text-md-right text-center py-2">
          <a href={'mailto:'+vars.email}>{vars.email}</a>
        </div>
      </div>
    </footer>
  );
}
