import styles from './Points.module.scss'

function Points() {
    return (
        <section className={styles.points_wrapper}>
            <p className={styles.pints_title}>Your points: <span>1236</span></p>
            <div className={styles.points_container}>
                <p className={styles.point_container_text}>
                    <span>2561 </span>points missing to move to <span>Tier 1</span>
                </p>
            </div>
            <p className={styles.points_link}>Check history</p>
        </section>
    );
}

export default Points;