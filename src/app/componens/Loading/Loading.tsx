import { Puff } from "react-loader-spinner";
import styles from './Loading.module.scss'


function Loading() {
    return (
        <div className={styles.loader_container}>
            <Puff
                visible={true}
                height="150"
                width="150"
                color="#9555b9"
                ariaLabel="puff-loading"
            />
        </div>
    );
}

export default Loading;