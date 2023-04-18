import Link from 'next/link'
import styles from './Layout.module.css'
import utils from '../src/styles/utils.module.css'

export default function Layout({children, title}) {
    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>
                    {title}
                </h1>
                <nav className={styles.headerNav}>
                    <Link className={styles.link} href="/">
                        Home
                    </Link>
                    <Link className={styles.link} href="/signup">
                        <button className={styles.button}>Sign Up</button>
                    </Link>
                    <Link className={styles.link} href="/login">
                        <button className={styles.button}>Log In</button>
                    </Link>
                </nav>
            </header>
            <div>{children}</div>
        </div>
    )
}