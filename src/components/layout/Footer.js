import React from "react";
import SiteMap from "./SiteMap";

export default class Footer extends React.Component {
  render() {

    const footerStyle = {
      borderColor: "#dedede",
      backgroundColor: "white",
      borderTop: "1px solid",
      padding: "2em 0 2em 0",
      marginTop: "2em"
    };
    const navListClasses = ["nav-list"];

    return (
      <footer class="footer" style={footerStyle}>
        <SiteMap 
          navListClasses={navListClasses}
          treatmentsClass={"footer-invisible"}
          financesClass={"footer-invisible"}
          testimonialsClass={"footer-invisible"} />
        <div class="footer-address">
          <div>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            10630 N 71st PL, Suite 1 Scottsdale, Arizona 85254 
          </div>
          <div>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            4425E Agave Rd, Suite 106 Phoenix, Arizona 85044 
          </div>
        </div>
        <div class="footer-phone">
          <i class="fa fa-phone" aria-hidden="true"></i>
          (480) 951-5785
        </div>
        <p>Copyright &copy; Huashing Acupuncture 2017</p>
      </footer>
    );
  }
}
