import styles from './Header.module.scss'
import { ReactComponent as Logo } from '../../../styles/icons/user-logo.svg'
import { ReactComponent as Button } from '../../../styles/icons/header-button.svg'
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { userSelector } from 'src/redux/selectors';
import useClosePopUp from 'src/hooks/useClosePopUp';
import { formatNumber, shortenAddress } from 'src/helpers/shortenString';
import { changeUser } from 'src/redux/userSlice';


function Header() {
    const { address, balance } = useSelector(userSelector)
    const dispatch = useDispatch()
    const { ref, isActive, setIsActive } = useClosePopUp()

    return (
        <header className={styles.header}>
            <div className={styles.logo_container}>
                <Logo />
                <div className={styles.empty_container_wrapper}>
                    <div className={styles.empty_container}></div>
                </div>
            </div>
            <nav className={styles.navigation_container}>
                <div className={styles.nav_btn_container}>
                    <Button className={styles.button_icon} />
                    <p className={styles.balance_text}>{`${formatNumber(balance)} $ETH`}</p>
                </div>
                <div className={styles.accaunt_container}>
                    <div className={styles.address_container}>
                        <p className={styles.address_text}>{shortenAddress(address)}</p>
                        <ul className={styles.bar_list}>
                            {Array(6).fill(0).map((_, i) =>
                                <li className={styles.bar_item} key={i}></li>
                            )}
                        </ul>
                    </div>
                    <div className={styles.img_container} onClick={() => setIsActive(!isActive)} ref={ref}>
                        <div className={styles.img_wrapper}><img className={styles.avatar} src="https://robohash.org/David" alt="avatar" width={48} height={48} /></div>
                        <AnimatePresence>
                            {isActive &&
                                <motion.div className={styles.logout_container}
                                    key="modal"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}>
                                    <button onClick={() => dispatch(changeUser({ address: null, balance: null }))}>Log out</button>
                                </motion.div>}
                        </AnimatePresence>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;