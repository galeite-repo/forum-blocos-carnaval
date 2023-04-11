import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from "src/Components/Header/Header";
import About from "src/Components/About/About";
import client from "src/sanity";
import Projects from "src/Components/Projects/Projects";
import Footer from "src/Components/Footer/Footer";
import Navbar from "src/Components/Navbar/Navbar";
import Searches from "src/Components/Searches/Searches";
import SFooter from "src/Components/SFooter/SFooter"

export default function Home({ header, about, skills, projects, footer, social, searches, sponsor, implementation }) {

  useEffect(() => {

    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <Header header={header} social={social} />
      <main>
        <About about={about} />
        <Searches searches={searches} />
        <Projects  projects={projects} />
        <Footer footer={footer} />
        <SFooter sponsor={sponsor} footer={footer} implementation={implementation} />
      </main>
    </>
  )
}

export const getServerSideProps  = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const social = await client.fetch(`*[_type == "social"][0]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const skills = await client.fetch(`*[_type == "skills"][0]`);
  const projects = await client.fetch(`*[_type == "projects"][0]`);
  const footer = await client.fetch(`*[_type == "footer"][0]`);
  const searches = await client.fetch(`*[_type == "searches"]`);
  const sponsor = await client.fetch(`*[_type == "sponsor"]`);
  const implementation = await client.fetch(`*[_type == "implementation"]`)


  return {
    props: {
      header,
      social,
      about,
      skills,
      projects,
      footer,
      searches,
      sponsor,
      implementation
    }
  }
}