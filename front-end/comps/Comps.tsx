import styles from './Comps.module.css'

export default function Box({header, paragraph}) {
    return (
        <div className={styles.box}>
            <div className={styles.boxContent}>
                <h1>{header}</h1>
                <div>
                    <p>
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    )
}