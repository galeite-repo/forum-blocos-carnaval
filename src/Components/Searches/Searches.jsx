import styles from './Searches.module.scss'


const Searches = ({searches})=>{
    return(
        <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={styles.searchesWrapper} id="pesquisa">
            <h2>Pesquisas</h2>
            <div className={styles.searches}>
                <div className={styles.firstSearch}>
                    <h4>{searches[0].title}</h4>
                    <span>{searches[0].date}</span>
                    <a href={searches[0].url}>{searches[0].button}</a>
                </div>
                <div className={styles.secondSearch}>
                    <h4>{searches[1].title}</h4>
                    <span>{searches[1].date}</span>
                    <a href={searches[1].url}>{searches[1].button}</a>
                </div>
            </div>
        </section>
    )
}



export default Searches;