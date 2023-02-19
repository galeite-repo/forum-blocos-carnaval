import styles from './Navbar.module.scss'
import Image from 'next/legacy/image'
import NavLink from './NavLink';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
const Navbar = () => {

    const [isMenu, setIsMenu] = useState(false);

    const commonAttributes = {
        className: styles.icon,
        onClick: () => setIsMenu(!isMenu)
    }

    return (
        <section className={styles['navbar-wrapper']}>
            <div className={styles.navbar}>
                <a href="/" className={styles.logo}>
                    <Image src='/logo.png' layout='fixed' width={100} height={45} />
                </a>
                <nav>
                    <ul className={styles.list}>
                        <NavLink text='O Forum' url='#about' />
                        <NavLink text='Pesquisas' url='#searches' />
                        <NavLink text='Blocos' url='#projects' />
                        <NavLink text='Contato' url='#footer' />
                    </ul>
                </nav>
                <div className={`${styles.mobile} ${isMenu ? styles.active : ''}`}>
                    <GiHamburgerMenu {...commonAttributes} />

                    <div className={styles.background}>
                        <AiOutlineClose {...commonAttributes} />
                        <nav>
                            <ul className={styles['mobile-list']}>
                                <NavLink text='O Forum' url='#about' toggleMenu={() => setIsMenu(!isMenu)} />
                                <NavLink text='Pesquisas' url='#searches' toggleMenu={() => setIsMenu(!isMenu)} />
                                <NavLink text='Blocos' url='#projects' toggleMenu={() => setIsMenu(!isMenu)} />
                                <NavLink text='Contato' url='#footer' toggleMenu={() => setIsMenu(!isMenu)} />
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


        </section>
    )
}


export default Navbar;