import { useWalletConnection } from "../../hooks/useWalletConnection"
import styles from './MainPage.module.scss'
import { ReactComponent as Logo } from '../../styles/icons/user-logo.svg'
import { ReactComponent as Border } from '../../styles/icons/main-page-border-btn.svg'
import { ReactComponent as Topbtn } from '../../styles/icons/main-btn-top.svg'
import { useDispatch } from "react-redux"
import { changeUser } from "../../redux/userSlice"
import { useEffect } from "react"
import { motion } from "framer-motion"

function MainPage() {
    const { errorMessage, connectWalletHandler } = useWalletConnection()
    const dispatch = useDispatch()

    useEffect(() => {

        const calculateZoom = () => {
            const windowWidth = window.innerWidth;
            const contentWidth = 1926;
            const newZoom = windowWidth / contentWidth;
            (document.body.style as any).zoom = `${newZoom * 100}%`
        };

        calculateZoom();

    }, []);

    return (
        <main className={styles.main_container}>
            <motion.div
                key='left'
                className={styles.image_container}
                animate={{ x: 0 }}
                exit={{ x: -100 }}>
                <Logo className={styles.logo} width={207} height={88} />
                <div className={styles.button_container}>
                    <button className={styles.custom_button}>
                        What is <br />QORPO ID?
                    </button>
                    <Border className={styles.border_btn_svg} width={271} height={107} />
                    <Topbtn className={styles.top_btn_svg} />
                </div>
            </motion.div>
            <motion.div
                key='right'
                className={styles.login_container}
                animate={{ x: 0 }}
                exit={{ x: -100 }}>
                <h1 className={styles.login_title}>{!errorMessage ? 'LOGIN' : errorMessage}</h1>
                <button className={styles.login_btn} type="button" onClick={connectWalletHandler}>{!errorMessage ? 'CONNECT WALLET' : 'Try again'}</button>
                <button type="button" className={styles.test_btn} onClick={() => dispatch(changeUser({ address: 'test', balance: '1256.55659' }))}>Test</button>
            </motion.div>
        </main>
    )
}

export default MainPage