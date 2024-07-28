import styles from './TierBtn.module.scss'
import { ReactComponent as Svg } from '../../../styles/icons/tier-btn-vector.svg'

interface Props {
    tier: string,
    setTier: React.Dispatch<React.SetStateAction<string>>
}

function TierBtn({ tier, setTier }: Props) {

    return (<>
        <div className={`${styles.btn_container} ${tier === '3' && styles.btn_conatiner_active}`}>
            <div className={styles.btn} onClick={() => setTier('3')}>
                <p>Tier 3</p>
            </div>
            <Svg className={styles.svg} />
        </div>
        <div className={`${styles.btn_container} ${tier === '2' && styles.btn_conatiner_active}`}>
            <div className={styles.btn} onClick={() => setTier('2')} >
                <p>Tier 2</p>
            </div>
            <Svg className={styles.svg} />
        </div>
        <div className={`${styles.btn_container} ${tier === '1' && styles.btn_conatiner_active}`}>
            <div className={styles.btn} onClick={() => setTier('1')} >
                <p>Tier 1</p>
            </div>
            <Svg className={styles.svg} />
        </div>
    </>
    );
}

export default TierBtn;