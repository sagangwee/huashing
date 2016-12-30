import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const financesClass = location.pathname.match(/^\/finances/) ? "active" : "";
    const testimonialsClass = location.pathname.match(/^\/testimonials/) ? "active" : "";
    const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class={"navbar " + navClass}>
        <ul class="nav">
          <li class={featuredClass}>
            <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
          </li>
          <li class={testimonialsClass}>
            <Link to="testimonials" onClick={this.toggleCollapse.bind(this)}>Testimonials</Link>
          </li>
          <li class={financesClass}>
            <Link to="finances" onClick={this.toggleCollapse.bind(this)}>Finances</Link>
          </li>
          <li class={contactClass}>
            <Link to="contact" onClick={this.toggleCollapse.bind(this)}>Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
