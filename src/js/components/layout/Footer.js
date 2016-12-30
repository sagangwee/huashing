import React from "react";

export default class Footer extends React.Component {
  render() {

    const footerStyle = {
      borderColor: "#dedede",
      backgroundColor: "#f5f6f7",
      borderTop: "1px solid",
      padding: "2em 0 2em 0",
      marginTop: "2em"
    };

    return (
      <footer style={footerStyle}>
        <p>Copyright &copy; Huashing Acupuncture</p>
      </footer>
    );
  }
}
