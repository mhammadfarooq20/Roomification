import NavBar from "components/Navbar";
import type { Route } from "./+types/home";
import { ArrowRight } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <NavBar />

      <section className="hero">
        <div className="announce">
          <div className="dot">
            <div className="pulse"></div>
          </div>
          <p>Introducing Roomification</p>
        </div>

        <h1>
          Build beautiful spaces at the speed of thought with Roomification
        </h1>
        <p className="subtitle">
          Roomification is the AI-First design environment that helps you
          visualize,render, and ship architectural projects faster than
          ever
        </p>

        <div className="actions">
          <a href="#upload" className="cta">
            Start Building <ArrowRight className="icon" />
          </a>
        </div>
      </section>
    </div>
  )
}
