import styles from './Avatar.module.scss'

function Avatar({ urlString }: { urlString: string }) {

    return (
        <div className={styles.img_container}>
            <img className={styles.avatar} src={`https://robohash.org/${urlString}`} alt="avatar" width={40} height={40} />
        </div>
    );
}

export default Avatar;