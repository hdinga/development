import vars from "./_globalvars";
import { EmailContact } from "./_components";
import { SocialLinks } from "./_components";
//

export default function Footer() {
  const componentName = "Footer";

  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6 justify-content-md-start footer-col">
          <EmailContact />
        </div>

        <div className="col-12 col-sm-6 justify-content-md-end footer-col">
          <SocialLinks/>
        </div>
      </div>
    </footer>
  );
}
