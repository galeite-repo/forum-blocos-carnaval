import styles from './Project.module.scss'


const Project = () => {

    return (
        <li className={styles.project}>
            <a href="#">
                <div className={styles.image}>

                </div>
                <span>Firebase</span>
                <span>Nextjs</span>
                <span>Reactjs</span>
                <h3>Portoflio</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </a>
        </li>
    )
}


export default Project;