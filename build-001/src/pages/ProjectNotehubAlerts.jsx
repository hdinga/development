import { useEffect } from "react";
//
import vars from "../components/_globalvars";
import icons from "../components/_icons";
import { BaseLayout } from "../components/_components";
import { OpenModalPreview } from "../components/_interactions";
//

export default function ProjectNotehubAlerts() {
  const componentName = "Notehub Alerts"; //COMPONENT NAME

  const SectionContent = () => {
    return (
      <div className="page-content">
        <section className="section-project container">
          <div className="row justify-content-center">
            <div className="col-9">
              <h1 className="mb-3">Notehub Alerts & Notifications</h1>

              <div className="card">
                <div className="card-body">
                  <div className="row mb-1">
                    <div className="col-sm-3 col-4">
                      <span className="font-weight-bold">Role</span>
                    </div>
                    <div className="col-sm-9 col-8">
                      UXUI Product Engineer
                    </div>
                  </div>
                  <div className="row mb-1">
                    <div className="col-sm-3 col-4">
                      <span className="font-weight-bold">Client</span>
                    </div>
                    <div className="col-sm-9 col-8">
                      Blues Wireless
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 col-4">
                      <span className="font-weight-bold">Deliveries</span>
                    </div>
                    <div className="col-sm-9 col-8">
                      UX, wireframes, prototypes, customer journey, usability tests, UI component library, front-end development
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <h6 className="font-weight-bold">
                  Challenge
                </h6>
                <p>
                  Important alerts and notifications related to devices, routes, events, anomalies, project or billing invites need to be easily accessible to customers in the app and via email and sms.
                </p>
              </div>
              <div className="mb-5">
                <h6 className="font-weight-bold">Objectives</h6>
                <div className="row mx-2">
                  <div className="d-flex col-12 col-md-4 px-1 mb-2">
                    <div className="stickynote">
                      <span className="font-weight-bold pr-2">#1</span>
                      Outline differences between alerts and notifications.
                    </div>
                  </div>
                  <div className="d-flex col-12 col-md-4 px-1 mb-2">
                    <div className="stickynote">
                      <span className="font-weight-bold pr-2">#2</span>
                      Outline all Notehub event types that should trigger alerts and notifications.
                    </div>
                  </div>
                  <div className="d-flex col-12 col-md-4 px-1 mb-2">
                    <div className="stickynote">
                      <span className="font-weight-bold pr-2">#3</span>
                      Outline privacy conditions for restricting user access on shared projects and accounts.
                    </div>
                  </div>
                  <div className="d-flex col-12 col-md-4 px-1 mb-2">
                    <div className="stickynote">
                      <span className="font-weight-bold pr-2">#4</span>
                      Define what types of activities should trigger an alert / notification.
                    </div>
                  </div>
                  <div className="d-flex col-12 col-md-4 px-1 mb-2">
                    <div className="stickynote">
                      <span className="font-weight-bold pr-2">#5</span>
                      Categorize alerts and notification by states, groups and hierarchical priorities.
                    </div>
                  </div>
                  <div className="d-flex col-12 col-md-4 px-1 mb-2">
                    <div className="stickynote">
                      <span className="font-weight-bold pr-2">#6</span>
                      Define UI components, behavior, interaction and functionality.
                    </div>
                  </div>
                  <div className="d-flex col-12 col-md-4 px-1 mb-2">
                    <div className="stickynote">
                      <span className="font-weight-bold pr-2">#7</span>
                      Conduct research and user testing, across different platforms.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <h6 className="font-weight-bold">Research</h6>
                <div className="alert bg-light text-muted mx-2">
                  <h6 className="font-weight-bold">Definition</h6>
                    <p>
                      - General notifications —Displayed as bell icon on the top right of Notehub navbar with a number indication, and opens up, and can be modified under account settings when clicked to list all unread notifications.
                    </p>
                    <p>
                      - Banner notifications (System generated) —Located below Notehub navbar and take up the entire with of the page. System generated and cannot be dismissed/modified by a user.
                    </p>
                    <p>
                      - Alerts (user defined) —Located in project settings, created by project owner to monitor and issue alerts for certain behaviors of elements in a project. Alerts are real-time unlike notifications.
                    </p>
                </div>
                <div className="alert bg-light text-muted mx-2">
                  <h6 className="font-weight-bold">Notes</h6>
                    <p>
                      - Notification system gives a user a quick overall status of important activities related to their Notehub account, without having to navigate to each specific page or email to check.
                    </p>
                    <p>
                      - Notification system consist of a quick dropdown menu which displays a handful of notifications and View all button which takes the user to a dedicated notification page with all notification related to the account.
                    </p>
                    <p>
                      - Notifications are dismissible, invites are not. The total number of active notifications is updated if dismissed or viewed. Notifications that require an action by account owner have a link to specific page or a CTA eg: Accept/Decline invite.
                    </p>
                    <p>
                      - Notifications are bundled into two groups: General informational notifications and Pending invites notification which requires user's action. Depending on level of complexity and number of notification groups we can include a filter system for specific notification group or type.
                    </p>
                </div>
                <div className="alert bg-light text-muted mx-2">
                  <h6 className="font-weight-bold">What type of activities trigger alerts or notifications?</h6>
                    <ul>
                      <li>— User's account is successfully verified</li>
                      <li>— Auto recharge successful / unsuccessful</li>
                      <li>— Payment successful</li>
                      <li>— Insufficient funds</li>
                      <li>— User is invited to join a project or billing account</li>
                      <li>— Device, event, route or anomaly</li>
                      <li>— Firmware update failed</li>
                      <li>— Payment Method added/edited/deleted</li>
                    </ul>
                </div>
              </div>
              <div className="mb-5">
                <h6 className="font-weight-bold">Impact</h6>
                <p className="">
                  Knowing and understanding how projects are performing means being able to make better informed decisions. Users are more informed of how their projects are performing without having to manually check each time thus improving usability, efficiency and productivity. A rather unintended side effect of this implementation was that overtime we noticed people having to sign in to the app less once they resolved all outstanding issues with their projects.
                </p>
              </div>
              <div className="mb-5">
                <h6 className="font-weight-bold">Reflections</h6>
                <div className="mb-3">
                  <span className="">Team work make the dream work —It was inspiring having collaborative sessions with the team and getting useful perspectives and insights.</span>
                </div>
              </div>

              <div className="container">
                <div className="row justify-content-center">
                  <figure className="col-9 project-card">
                    <img className="img-fluid" src="../src/assets/prj10/prj1.png" alt="Alerts design mockups" />
                    <figcaption className="figure-caption">Alerts design mockups</figcaption>
                  </figure>
                  <figure className="col-9 project-card">
                    <img className="img-fluid" src="../src/assets/prj10/prj2.png" alt="Alerts component documentation" />
                    <figcaption className="figure-caption">Alerts component documentation</figcaption>
                  </figure>
                  <figure className="col-9 project-card">
                    <img className="img-fluid" src="../src/assets/prj10/prj3.png" alt="System generated Notifications" />
                    <figcaption className="figure-caption">System generated Notifications</figcaption>
                  </figure>
                  
                  <figure className="col-9 project-card">
                    <img className="img-fluid" src="../src/assets/prj10/prj4.png" alt="Notifications nav dropdown" />
                    <figcaption className="figure-caption">Notifications nav dropdown</figcaption>
                  </figure>
                  <figure className="col-9 project-card">
                    <img className="img-fluid" src="../src/assets/prj10/prj5.png" alt="Notifications popup dropdown" />
                    <figcaption className="figure-caption">
                      Notifications dashboard</figcaption>
                  </figure>
                  <figure className="col-9 project-card">
                    <img className="img-fluid" src="../src/assets/prj10/prj6.png" alt="Notifications settings" />
                    <figcaption className="figure-caption">Notifications settings</figcaption>
                  </figure>
                  <figure className="col-9 project-card">
                    <img className="img-fluid" src="../src/assets/prj10/prj9.png" alt="Alerts dashboard" />
                    <figcaption className="figure-caption">Alerts dashboard</figcaption>
                  </figure>
                  <figure className="col-9 project-card">
                    <img className="img-fluid" src="../src/assets/prj10/prj8.png" alt="Alerts logs" />
                    <figcaption className="figure-caption">Alerts logs</figcaption>
                  </figure>
                  <figure className="col-9 project-card">
                    <img className="img-fluid" src="../src/assets/prj10/prj10.png" alt="Custom Alert configuration" />
                    <figcaption className="figure-caption">Custom Alert configuration -
                      <a href="../src/assets/prj10/prj.pdf" target="_blank">Alerts & Notification</a>
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div id="modalPreview" className="modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <img src="" className="img-fluid"/>
                      <button type="button" id='btnCloseModal' className="btn" aria-label="Close">
                        { icons.icn_close }
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-backdrop"></div>
              </div>

            </div>
          </div>
        </section>
      </div>
    )
  }

  useEffect(() => {
    OpenModalPreview();
  });

  document.title = componentName+vars.brandRoot; // DOCUMENT TITLE

  return (
    <>
      <BaseLayout bground={'bg-home'} content={ <SectionContent />} />
    </>
  );
}
