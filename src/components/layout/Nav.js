import React from "react";
import { IndexLink, Link } from "react-router";
import SiteMap from "./SiteMap";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
      fixed: false,
      navActive: false
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    const navActive = !this.state.navActive;
    this.setState({collapsed, navActive});
  }

  componentDidMount() {
    console.log("add scroll listener");
    window.addEventListener('scroll', this.handleScroll.bind(this), true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this), true);
  }

  handleScroll(event) {
      let scrollTop = event.srcElement.body.scrollTop;
      if (scrollTop > 146.7) {
        this.setState({
          fixed: true
        });
      } else {
        this.setState({
          fixed: false
        });
      }
      console.log(scrollTop);
  }

  render() {
    const { location } = this.props;
    const {
      collapsed,
      fixed,
      navActive
    } = this.state;
    const homeClass = location.pathname === "/" ? "active" : "";
    const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
    const treatmentsClass = location.pathname.match(/^\/treatments/) ? "active" : "";
    const financesClass = location.pathname.match(/^\/finances/) ? "active" : "";
    const testimonialsClass = location.pathname.match(/^\/testimonials/) ? "active" : "";
    const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";
    const navClasses = ["nav"];
    if (fixed) { navClasses.push('nav-fixed'); }
    const navMobileClasses = ["nav-mobile"];
    if (!collapsed) { navMobileClasses.push('nav-mobile-open'); }
    const navListClasses = ["nav-list"];
    if (navActive) { navListClasses.push('nav-active'); }

    return (
      <nav class={navClasses.join(' ')}>
        <div class={navMobileClasses.join(' ')} onClick={this.toggleCollapse.bind(this)}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <SiteMap
          navListClasses={navListClasses}
          homeClass={homeClass}
          aboutClass={aboutClass}
          treatmentsClass={treatmentsClass}
          financesClass={financesClass}
          testimonialsClass={testimonialsClass}
          contactClass={contactClass}
          onClick={this.toggleCollapse.bind(this)}/>
      </nav>
    );
  }
}
