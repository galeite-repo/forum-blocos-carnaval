import Header from "src/Components/Header/Header";
import Navbar from "src/Components/Navbar/Navbar";
import Bloco from "src/Components/Bloco/Bloco"
import client from "src/sanity";
import SFooter from "src/Components/SFooter/SFooter";
import { useRouter } from "next/router";

const BlocoPage = ({header,social,sponsor,footer,implementation,projects})=>{
  const id = useRouter().query.id
  let project = ""
  projects.map(element => {
    if(element.slug.current == id){
      project = element;
      return
    }
  });

  return(
      <>
        <Navbar />
        <main>
          <Bloco project={project} key={project._key}/>
          <SFooter sponsor={sponsor} footer={footer} implementation={implementation} />
        </main>
      </>
  )
}


export default BlocoPage; 

export const getServerSideProps = async () => {
    const projects = await client.fetch(`*[_type == "projects"]`);
    const footer = await client.fetch(`*[_type == "footer"][0]`);
    const sponsor = await client.fetch(`*[_type == "sponsor"]`);
    const implementation = await client.fetch(`*[_type == "implementation"]`)
  
  
    return {
      props: {
        projects,
        footer,
        sponsor,
        implementation
      }
    }
  }