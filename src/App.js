import React, { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./Components/Navbar"));
const Intro = lazy(() => import("./Components/Intro"));
const Skills = lazy(() => import("./Components/Skills"));
const Projects = lazy(() => import("./Components/Projects"));
const Education = lazy(() => import("./Components/Education"));
const Achievements = lazy(() => import("./Components/Achievements"));
const Contact = lazy(() => import("./Components/Contact"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </Suspense>
  );
}

export default App;