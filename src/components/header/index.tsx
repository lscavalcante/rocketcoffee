import styles from './styles.module.scss';

import { mediaHook } from '../../hooks/mediaHook';
import { ReactNode, useEffect, useState } from 'react';

interface props {
    children: ReactNode
}

export default function Header({children}: props) {

    const [width, height] = mediaHook();
    const [drawer, setDrawer] = useState<boolean>(false)

    return (
        <header>

            {width >= 1000 ?
                <div className={styles.container_web}>
                    <img src="assets/logo-desktop.svg" alt="" />
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">Menu</a>
                        <a href="#">Recompensa</a>
                        <a href="#">Gift Cards</a>
                        <a href="#">Lojas</a>
                    </nav>
                    <button>
                        PEGAR MEU CAFÉ
                    </button>
                </div>
                :
                <div className={styles.container_mobile}>
                    <nav>
                        <img src="assets/logo-desktop.svg" alt="" />
                        <img onClick={() => { setDrawer(!drawer) }} src={`${drawer ? 'assets/menu-buguer-close.svg' : 'assets/menu-buguer-open.svg'}`}></img>
                    </nav>
                    {drawer ?
                        <div className={styles.menuMobileContent}> 
                            <ul>
                                <li>Home</li>
                                <li>Menu</li>
                                <li>Recompensas</li>
                                <li>Gift Cards</li>
                                <li>Lojas</li>
                            </ul>
                        </div>
                        :
                        null
                    }
                    {/* <div className={`${styles.menuMobileContent} ${drawer ? styles.disable : styles.disable}`}>
                        <ul>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>Recompensas</li>
                            <li>Gift Cards</li>
                            <li>Lojas</li>
                        </ul>
                    </div> */}
                </div>
            }

            {!drawer && children}

        </header>
    )
}