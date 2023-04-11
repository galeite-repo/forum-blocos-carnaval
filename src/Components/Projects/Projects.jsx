import { useState } from 'react';
import Project from './Project';
import styles from './Projects.module.scss'


const Projects = ({projects}) => {
    const { title, projects: projectList, button, url } = projects
    const [showAll,setShowAll] = useState("false")

    const renderProjects = projectList.map((project,index) => {
        if(showAll == "false"){
            if(index <= 2){
                return <Project key={project._key} project={project}/>
            }
        }else{
            return <Project key={project._key} project={project}/>
        }
    })

    return (
        <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className={styles.projects} id='blocos'>
            <h2>{title}</h2>
            <ul className={styles.list}>
                {renderProjects}
            </ul>
            <a className='btn btn-primary' onClick={()=>{showAll == "true" ? setShowAll("false") : setShowAll("true")}}>{showAll == "false" ? button : "Esconder blocos"}</a>
        </section>
    )
}


export default Projects;