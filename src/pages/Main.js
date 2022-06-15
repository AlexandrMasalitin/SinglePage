import React, { Component } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Info from "../components/Info";
import Projects from "../components/Project";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
  render() {
    return (
      <div className="content">
        <Info />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}
