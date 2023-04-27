import { useState } from 'react';
import Project from './Project';
import styles from './Projects.module.scss'


const Projects = ({projects}) => {

    // const { projects: projectList, button, url } = projects
    const [showAll,setShowAll] = useState("false")

    const renderProjects = projects.map((project,index) => {
            return <Project key={project._id} project={project}/>
        
    })

    return (
        <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className={styles.projects} id='blocos'>
            <h2>Blocos de Carnaval M'boi Mirim</h2>
            <ul className={styles.list}>
                {renderProjects}
            </ul>
            {/* <a className='btn btn-primary' onClick={()=>{showAll == "true" ? setShowAll("false") : setShowAll("true")}}>{showAll == "false" ? "Veja todos os Blocos" : "Esconder blocos"}</a> */}
        </section>
    )
}


export default Projects;