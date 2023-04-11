import styles from './SFooter.module.scss'
import useSanityImage from 'src/hooks/useSanityImage'

const SFooter = ({sponsor,implementation,footer})=>{

    const imageUrl = useSanityImage();

    return(
        <section className={styles.sfooterWrapper}>
            <div className={styles.sfooter}>
                <div className={styles.footerLogo}>
                    <a href="#"><img src={imageUrl(sponsor[1].image).url()}/></a>
                </div>

                <div className={styles.footerNav}>
                    <nav>
                        <ul>
                            <li><a href='#sobre'>Forum</a></li>
                            <li><a href='#pesquisa'>Pesquisas</a></li>
                            <li><a href='#blocos'>Blocos</a></li>
                            <li><a href='#contato'>Contato</a></li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.footerApoio}>
                    <p>Apoio:</p>
                    <div className={styles.sponsorsImages}>
                        <img src={imageUrl(sponsor[0].image).url()} style={{width: "100%"}}/>
                    </div>
                </div>

                <div className={styles.footerRealizacao}>
                    <p>Realização:</p>
                    <div className={styles.sponsorsImages}>
                        <img src={imageUrl(implementation[0].image).url()} style={{width: "100%"}}/>
                        <img src={imageUrl(implementation[1].image).url()} style={{width: "100%"}}/>
                    </div>
                </div>
            </div>
            <p className={styles.copy}>{footer.copy}</p>
        </section>
    )
}



export default SFooter;