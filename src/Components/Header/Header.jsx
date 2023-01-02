import styles from './Header.module.scss'
import { RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri'
import { AiFillInstagram, AiOutlineArrowDown } from 'react-icons/ai'
import useSanityImage from 'src/hooks/useSanityImage'
import Image from 'next/image';
const Header = ({ header }) => {
    const { image, name, ocupation, summary } = header

    const imageUrl = useSanityImage();


    return (
        <header className={styles['header-wrapper']} >

            <div className={styles.header}>
                {/* SOCIAL BUTTONS */}
                <div className={styles.social}>
                    <a href="#"><RiLinkedinFill className={styles.icon} /></a>
                    <a href="#"><AiFillInstagram className={styles.icon} /></a>
                    <a href="#"><RiWhatsappFill className={styles.icon} /></a>
                </div>

                {/* HOME IMAGE */}
                <div className={styles.image}>
                    <Image src={imageUrl(image).url()} layout='fill' />
                </div>

                {/* CONTENT PAGE */}
                <div className={styles.content}>
                    <span>{name}</span>
                    <h1>{ocupation}</h1>
                    <p>{summary}</p>
                </div>

                <a href="#" className={styles.arrow}>
                    <AiOutlineArrowDown className={styles.icon} />
                </a>

            </div>
        </header>
    )
}


export default Header;