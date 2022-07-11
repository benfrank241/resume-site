import React, { Component } from "react";
//import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;


    const spacer = "      ";
    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
          <div className="overlay"> <a href={projects.url} target="_blank" rel="noreferrer"> {projects.category} </a></div>
            <a href={projects.url} target="_blank" rel="noreferrer">
              <img alt={projects.title} src={projectImage} /></a>
            <div style={{ textAlign: "center" }}><a href={projects.url} target="_blank" rel="noreferrer"><i className="fa fa-github"></i>{spacer}{projects.title}{spacer}
            </a>
              <em>{projects.technologies}</em>

            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
