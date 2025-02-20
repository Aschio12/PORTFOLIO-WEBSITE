import { Link } from "react-router-dom";
import "./hero.css";
export default function Hero() {
  return (
    <div className="hero-container">
      <div className="logo">
        <p>logo</p>
      </div>
      <nav>
        <a href="#">
          <b>HOME</b>
        </a>
        <a href="#">
          <b>PROJECT</b>
        </a>
        <a href="#about-me">
          <b>ABOUT ME</b>
        </a>
        <a href="#CONTACT">
          <b>CONTACT</b>
        </a>
      </nav>
      <section className="inspire-hero">
        <h1>
          <b>Meet Aschalewe Daraje: Aspiring Software Developer</b>
        </h1>
        <p>
          Hi There.....I am Aschalew Daraje a dedicated 3rd-year Software
          Engineering student at Adam Science and Technology University. With a
          passion for coding and problem-solving, he specializesin JavaScript,
          ReactJS, and TailwindCSS.
        </p>
      </section>
    </div>
  );
}
