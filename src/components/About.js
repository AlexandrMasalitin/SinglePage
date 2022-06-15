import React, { Component } from "react";
import man from '../assets/man.jpg'

export default class About extends Component {
  render() {
    return (
      <div id="About" className="blockAbout">
        <h2 className="title-components">About me / Обо мне</h2>
        <div>
          <img src={man} alt="" className="photo_about"/>
          <h3 className="color-text">Education</h3>
          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at
            fringilla neque. Donec molestie euismod ipsum in tincidunt. Mauris
            gravida.
          </p>
          <h3 className="color-text">Education</h3>
          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at
            fringilla neque. Donec molestie euismod ipsum in tincidunt. Mauris
            gravida.
          </p>
          <h3 className="color-text">Education</h3>
          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at
            fringilla neque. 
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3 className="color-text">Образование</h3>
          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at
            fringilla neque. Donec molestie euismod ipsum in tincidunt. Mauris
            gravida.
          </p>
          <h3 className="color-text">Образование</h3>
          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at
            fringilla neque. Donec molestie euismod ipsum in tincidunt. Mauris
            gravida.
          </p>
          <h3 className="color-text">Образование</h3>
          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at
            fringilla neque. 
          </p>
        </div>
      </div>
    );
  }
}
