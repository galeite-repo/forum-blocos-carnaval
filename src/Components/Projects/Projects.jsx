import Project from './Project';
import styles from './Projects.module.scss'


const Projects = () => {

    return (
        <section className={styles.projects}>
            <h2>Projetos</h2>
            <ul className={styles.list}>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </ul>
            <a href="#" className='btn btn-primary'> Veja mais</a>
        </section>
    )
}


export default Projects;