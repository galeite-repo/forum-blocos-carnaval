import styles from './Header.module.scss'
import { RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri'
import { AiFillInstagram, AiOutlineArrowDown } from 'react-icons/ai'
import useSanityImage from 'src/hooks/useSanityImage'
import Image from 'next/legacy/image'

const Header = ({ header, social }) => {
    const { image, name, ocupation, summary } = header
    const { linkedin, instagram, whatsapp } = social

    const imageUrl = useSanityImage();

    return (
        <header className={styles['header-wrapper']} >

            <div className={styles.header}>

                {/* HOME IMAGE */}
                <div className={styles.imageCapa}>
                    <img src={imageUrl(header[0].image).url()} alt="Capa Carnaval" className={styles.bgSlide} />
                </div>
                
                {/* SOCIAL BUTTONS */}
                {/* <div className={styles.social}>
                    <a href={linkedin}><RiLinkedinFill className={styles.icon} /></a>
                    <a href={instagram}><AiFillInstagram className={styles.icon} /></a>
                    <a href={whatsapp}><RiWhatsappFill className={styles.icon} /></a>
                </div> */}

                {/* <a href="#about" className={styles.arrow}>
                    <AiOutlineArrowDown className={styles.icon} />
                </a> */}

            </div>
        </header>
    )
}


export default Header;