import React from "react";
import { IndexLink, Link } from "react-router";

const SiteMap = function (props) {
  const { 
  	navListClasses,
    homeClass,
    aboutClass,
    treatmentsClass,
    testimonialsClass,
    financesClass,
    contactClass,
    onClick
  } = props;

  return (
    <ul class={navListClasses.join(' ')}>
      <li class={"nav-item " + homeClass}>
        <IndexLink to="/" onClick={onClick}>Home</IndexLink>
      </li>
      <li class={"nav-item " + aboutClass}>
        <Link to="about" onClick={onClick}>About</Link>
      </li>
      <li class={"nav-item " + treatmentsClass}>
        <Link to="treatments" onClick={onClick}>Treatments</Link>
      </li>
      <li class={"nav-item " + testimonialsClass}>
        <Link to="testimonials" onClick={onClick}>Testimonials</Link>
      </li>
      <li class={"nav-item " + financesClass}>
        <Link to="finances" onClick={onClick}>Pricing</Link>
      </li>
      <li class={"nav-item " + contactClass}>
        <Link to="contact" onClick={onClick}>Contact</Link>
      </li>
    </ul>
  );
};

export default SiteMap;