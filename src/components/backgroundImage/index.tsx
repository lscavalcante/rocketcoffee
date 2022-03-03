import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface props {
    children: ReactNode
}

export default function BackgroundImage({children}: props) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}