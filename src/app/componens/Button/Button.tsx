import styles from './Button.module.scss'

function Button() {
    return (
        <div className={styles.btn_container}>
            <button className={styles.btn}>STAKE NOW</button>
        </div>
    );
}

export default Button;