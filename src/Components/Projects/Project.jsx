import styles from './Project.module.scss'
import Image from 'next/legacy/image'
import useSanityImage from 'src/hooks/useSanityImage'
import { AiFillGithub } from 'react-icons/ai';

const Project = ({ project}) => {
    const { image, title, technologies, simplificada} = project
    const imageUrl = useSanityImage();
    const renderTech = technologies.map(tech => <span key={tech._key}>{tech.technology}</span>)
    return (
        <li className={styles.project}>
            <a href={`/${project.idBloco}`}>
                <div className={styles.image}>
                    <AiFillGithub className={styles.icon} />
                    <Image src={imageUrl(image).url()} layout='fill' />
                </div>
                {renderTech}
                <h3 className='h5'>{title}</h3>
                <p>{simplificada}</p>
            </a>
        </li>
    )
}


export default Project;