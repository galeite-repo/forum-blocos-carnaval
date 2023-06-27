import styles from './Searches.module.scss'


const Searches = ({searches})=>{
    return(
        <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={styles.searchesWrapper} id="pesquisa">
            <h2>Pesquisas</h2>
            <div className={styles.searches}>
                <div className={styles.firstSearch}>
                    <h4>{searches[0].title}</h4>
                    <span>{searches[0].date}</span>
                </div>
                <div className={styles.secondSearch}>
                    <h4>{searches[1].title}</h4>
                    <span>{searches[1].date}</span>
                    <div className={styles.tempButtons}>
                        <a href="/images/pesquisasResumo.pdf" download>Veja o Resumo da Pesquisa</a>
                        <a href="/images/pesquisasCompleta.pdf" download>Veja a Pesquisa Completa</a>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Searches;