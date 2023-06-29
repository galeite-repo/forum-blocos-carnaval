import styles from './Search.module.scss';

const Search = ({search})=>{
    return(
        <section className={styles.searchWrapper}>
            {/* Primeiro Grande Bloco */}
            {search.firstSection ? 
            (
            <div className={`${styles.sectionWrapper} ${styles.firstSection}`}>
                <div className={styles.sectionSideBar}>
                    <span>{search.firstSection.sideBarTitle}</span>
                    <p>{search.firstSection.contentSideBar}</p>
                </div>
                <div className={styles.sectionContent}>
                    {search.firstSection.contentLittleBlocks ? 
                    (
                        search.firstSection.contentLittleBlocks.map((dataBloco)=>{
                            return(
                                <div className={styles.littleBlockWrapper} key={dataBloco.title}>
                                    <span>{dataBloco.title}</span>
                                    <span>{dataBloco.bigData}</span>
                                    <span>{dataBloco.blockDesc}</span>
                                </div>
                            )
                        })
                    ):<p>Não foram encontrados dados da pesquisa.</p>}
                </div>
            </div>
            ):<></>}
            {/* Segundo Grande Bloco */}
            {search.secondSection ? 
            (
            <div className={`${styles.sectionWrapper} ${styles.secondSection}`}>
                <div className={styles.sectionSideBar}>
                    <span>{search.secondSection.sideBarTitle}</span>
                    <p>{search.secondSection.contentSideBar}</p>
                </div>
                <div className={styles.sectionContent}>
                    {search.secondSection.contentLittleBlocks ? 
                    (
                        search.secondSection.contentLittleBlocks.map((dataBloco)=>{
                            return(
                                <div className={styles.littleBlockWrapper} key={dataBloco.title}>
                                    <span>{dataBloco.title}</span>
                                    <span>{dataBloco.bigData}</span>
                                    <span>{dataBloco.blockDesc}</span>
                                </div>
                            )
                        })
                    ):<p>Não foram encontrados dados da pesquisa.</p>}
                </div>
            </div>
            ) : <></>}
            {/* Terceiro Grande Bloco */}
            {search.thirdSection ? 
            (
            <div className={`${styles.sectionWrapper} ${styles.thirdSection}`}>
                <div className={styles.sectionSideBar}>
                    <span>{search.thirdSection.sideBarTitle}</span>
                    <p>{search.thirdSection.contentSideBar}</p>
                </div>
                <div className={styles.sectionContent}>
                {search.thirdSection.contentLittleBlocks ? 
                    (
                        search.thirdSection.contentLittleBlocks.map((dataBloco)=>{
                            return(
                                <div className={styles.littleBlockWrapper} key={dataBloco.title}>
                                    <span>{dataBloco.title}</span>
                                    <span>{dataBloco.bigData}</span>
                                    <span>{dataBloco.blockDesc}</span>
                                </div>
                            )
                        })
                    ):<p>Não foram encontrados dados da pesquisa.</p>}
                </div>
            </div>
            ):<></>}  
            {/* Quarto Grande Bloco */}
            {search.fourthSection ? 
            (
            <div className={`${styles.sectionWrapper} ${styles.fourthSection}`}>   
                <div className={styles.sectionSideBar}>
                    <span>{search.fourthSection.sideBarTitle}</span>
                    <p>{search.fourthSection.contentSideBar}</p>
                </div>
                <div className={styles.sectionContent}>
                {search.fourthSection.contentLittleBlocks ? 
                    (
                        search.fourthSection.contentLittleBlocks.map((dataBloco)=>{
                            return(
                                <div className={styles.littleBlockWrapper} key={dataBloco.title}>
                                    <span>{dataBloco.title}</span>
                                    <span>{dataBloco.bigData}</span>
                                    <span>{dataBloco.blockDesc}</span>
                                </div>
                            )
                        })
                    ):<p>Não foram encontrados dados da pesquisa.</p>}
                </div>
            </div>
            ):<></>}

        </section>
    )
}

export default Search;