import Header from "src/Components/Header/Header";
import About from "src/Components/About/About";
import Skills from "src/Components/Skills/Skills";
import client from "src/sanity";
import Projects from "src/Components/Projects/Projects";

export default function Home({ header, about, skills }) {

  return (
    <>
      <Header header={header} />
      <main>
        <About about={about} />
        <Skills skills={skills} />
        <Projects />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const skills = await client.fetch(`*[_type == "skills"][0]`);

  return {
    props: {
      header,
      about,
      skills
    }
  }
}