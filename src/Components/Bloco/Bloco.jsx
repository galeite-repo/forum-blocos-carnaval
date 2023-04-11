import styles from './Bloco.module.scss'
import useSanityImage from 'src/hooks/useSanityImage';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { SiInstagram, SiFacebook, SiTwitter, SiYoutube } from 'react-icons/si';
import { BiWorld as SiteIcon}  from 'react-icons/bi';

const UnicoBloco = ({project}) =>{
    const imgUrl = useSanityImage()
    let socialBloco = "false"
    if(project.socialBloco != undefined){
        socialBloco = "true";
    }
    return(
        <section className={styles.bPageWrapper}>
            <div className={styles.infoBasica}>
                <img src={imgUrl(project.image).url()} alt={`Logo do ${project.title}`} style={{width: '300px',height: '300px'}}/>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className={styles.socialLinks}>
                    {socialBloco == "true" && project.socialBloco.instagramBloco ? <li><a href={project.socialBloco.instagramBloco}><SiInstagram /></a></li>: <></>}
                    {socialBloco == "true" && project.socialBloco.facebookBloco ? <li><a href={project.socialBloco.facebookBloco}><SiFacebook /></a></li>: <></>}
                    {socialBloco == "true" && project.socialBloco.twitterBloco ? <li><a href={project.socialBloco.twitterBloco}><SiTwitter /></a></li>: <></>}
                    {socialBloco == "true" && project.socialBloco.youtubeBloco ? <li><a href={project.socialBloco.youtubeBloco}><SiYoutube /></a></li>: <></>}
                    {socialBloco == "true" && project.socialBloco.siteBloco ? <li><a href={project.socialBloco.siteBloco}><SiteIcon /></a></li>: <></>}
                </ul>
            </div>
            <div className={styles.blocoCarrousel}>
                <Carousel showThumbs={false} autoPlay dynamicHeight="true" infiniteLoop="true">
                    {project.slideFotos.map((element,index)=>{ 
                        return(
                            <img key={index} src={imgUrl(element).url()} alt={`Logo do ${project.title}`} />
                        )
                    })}
                </Carousel>
            </div>   
            <div className={styles.infoEnsaios}>
                <div>
                    <p>&bull; ENSAIOS ABERTOS AO PÚBLICO:</p>
                    <ul className={styles.itemUl}>
                        <li><p><span className={styles.infoItem}>Dia:</span> {project.ensaioBloco.diaSemana}</p></li>
                        <li><p>Horário: {project.ensaioBloco.horarioEnsaio}</p></li>
                        <li><p>Data: {project.ensaioBloco.dataEnsaio}</p></li>
                    </ul>
                </div>
                <div>
                    <p>&bull; SAÍDA OFICIAL:</p>
                    <ul className={styles.itemUl}>
                        <li><p>Data: {project.saidaBloco.dataSaida}</p></li>
                        <li><p>Concentração: {project.saidaBloco.horarioConcentra}</p></li>
                        <li><p>Saída: {project.saidaBloco.horarioSaida}</p></li>
                    </ul>
                </div>
                <div>
                    <p>&bull; PERCURSO:</p>
                    <ul className={styles.itemUl}>
                        {project.percursoBloco.map((element,index)=>{
                            return(
                                <li key={index}><p>{element}</p></li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.contatosBloco}>
                    <p>&bull; CONTATOS:</p>
                    <ul>
                    {project.contatosBloco.map((element,index)=>{
                            return(
                                <li key={index}><p>{element}</p></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className={styles.infoPessoas}>
                <div>
                    <p>&bull; DIRETORIA:</p>
                    <ul className={styles.itemUl}>
                        {project.diretoriaBloco.map((element,index)=>{
                            return(
                                <li key={index}><p>{element}</p></li>
                            )
                        })}
                    </ul>
                </div>

                
                {/* <div>
                    <p>&bull; BATERIA:</p>
                    <ul className={styles.itemUl}>
                        {project.bateriaBloco.map((element)=>{
                            return(
                                <li><p>{element}</p></li>
                            )
                        })}
                    </ul>
                </div> */}
                
                
                <div>
                    <p>&bull; INTEGRANTES:</p>
                    <p>{project.integrantesBloco}</p>
                </div>
                <div>
                    <p>&bull; PÚBLICO MÉDIO:</p>
                    <p>{project.publicoBloco}</p>
                </div>
            </div>
        </section>
    )
}

export default UnicoBloco;