import Navbar from "src/Components/Navbar/Navbar";
import client from "src/sanity";
import SFooter from "src/Components/SFooter/SFooter";
import { useRouter } from "next/router";

const PesquisaPage = ({sponsor,footer,implementation,pesquisas})=>{
  const id = useRouter().query.id
  let pesquisa = ""
  pesquisas.map(element => {
    if(element.slug.current == id){
      pesquisa = element;
      return
    }
  });

  return(
      <>
        <Navbar />
        <main>
          
          <SFooter sponsor={sponsor} footer={footer} implementation={implementation} />
        </main>
      </>
  )
}


export default PesquisaPage; 

export const getServerSideProps = async () => {
    const pesquisas = await client.fetch(`*[_type == "searches"]`);
    const footer = await client.fetch(`*[_type == "footer"][0]`);
    const sponsor = await client.fetch(`*[_type == "sponsor"]`);
    const implementation = await client.fetch(`*[_type == "implementation"]`)
  
  
    return {
      props: {
        pesquisas,
        footer,
        sponsor,
        implementation
      }
    }
  }