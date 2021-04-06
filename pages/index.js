import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Greeting from "../components/Greeting";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import "@fontsource/poppins";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Greeting />
      <Skills />
      <Projects />
    </Layout>
  );
}
