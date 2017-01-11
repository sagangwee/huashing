import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="header-address">
          <div>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            10630 N 71st PL, Suite 1 Scottsdale, Arizona 85254 
          </div>
          <div>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            4425E Agave Rd, Suite 106 Phoenix, Arizona 85044 
          </div>
        </div>
        <div class="header-title">
          <h1> Huashing Acupuncture </h1>
          <h1> & </h1>
          <h1> Chinese Medicine </h1>
        </div>
        <div class="header-phone">
          <i class="fa fa-phone" aria-hidden="true"></i>
          (480) 951-5785
        </div>
      </header>
    );
  }
}
