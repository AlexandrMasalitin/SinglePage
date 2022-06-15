import React, { Component } from "react";
import user from "../assets/man.jpg";

export default class Info extends Component {
  render() {
    return (
      <div className="blockInfo">
        <h2 className="nameUser">Aleksandr Masalitin / Александр Масалитин</h2>
        <h1 className="userWork">Front-End Developer</h1>
        <h4 className="infoUser-text">
          <img src={user} alt="/" className="photo" />
          Hi all. Just want to say thank you for taking the time and viewing my resume site.
        </h4>
        <p>
          I am a beginner javascript developer, with great desire to develop in the field of computer technology.
          <br></br>
          Now looking for my first job in IT company
          <br></br>
          Now I am constantly engaged in self-education of such technologies as:
          <span className="strong"><strong> React </strong></span>, 
          <span className="strong"><strong> Sass </strong></span>,
          <span className="strong"><strong>TypeScript .</strong></span>
          <br></br>
          <br></br>
          <br></br>
          <h4 className="infoUser-text">
           Всем привет. Просто хочу сказать спасибо, что нашли время и посмотрели мой сайт резюме.
          </h4>
        <p>
           Я начинающий javascript-разработчик с большим желанием развиваться в сфере компьютерных технологий.
          <br></br>
          В настоящее время ищу свою первую работу в IT компании
          <br></br>
          Сейчас я постоянно занимаюсь самообразованием таких технологий как:
          <span className="strong"><strong> React </strong></span>, 
          <span className="strong"><strong> Sass </strong></span>,
          <span className="strong"><strong>TypeScript .</strong></span>
        </p>
        </p>
      </div>
    );
  }
}
