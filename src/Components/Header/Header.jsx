import styles from './Header.module.scss'
import { RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri'
import { AiFillInstagram, AiOutlineArrowDown } from 'react-icons/ai'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import useSanityImage from 'src/hooks/useSanityImage'
import Image from 'next/legacy/image'

const Header = ({ header, social }) => {
    const { backgroundImage, name, ocupation, summary } = header
    const { linkedin, instagram, whatsapp } = social

    const imgUrl = useSanityImage();
    return (
        <header className={styles['header-wrapper']} >

            <div className={styles.header}>

                {/* HOME IMAGE */}

                <Carousel  showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} autoPlay dynamicHeight={false} infiniteLoop="true">
                    {backgroundImage.map((element)=>{ 
                        return(
                            <img key={header._id} src={imgUrl(element).url()} alt="Background Image" />
                        )
                    })}
                </Carousel>


                
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