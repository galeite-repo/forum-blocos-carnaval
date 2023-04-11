import styles from './About.module.scss'
import useSanityImage from 'src/hooks/useSanityImage'
import Image from 'next/legacy/image'

import Box from '../Ui/Box';

const About = ({ about }) => {

    const { image, title, text, button, url } = about
    const imageUrl = useSanityImage();

    const renderBiography = text.map(text => <p key={text._key}>{text.paragraph}</p>)

    return (
        <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={styles.about} id="sobre">
            <div className={styles.image}>
                <Image src={imageUrl(image).url()} layout='fill' />
                <div className={styles.box}>
                    <Box text="Sobre" />
                </div>
            </div>

            <div className={styles.content}>
                <h2>{title}</h2>
                {renderBiography}
                <a href={url} className='btn btn-primary'>{button}</a>
            </div>
        </section>
    )
}

export default About;

