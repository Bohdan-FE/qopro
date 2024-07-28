import styles from './TableItem.module.scss'
import Avatar from "../../Avatar/Avatar";
import { motion } from 'framer-motion';

interface Props {
    name: string,
    address: string,
    title: string
}

function TableItem({ name, address, title }: Props) {

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
        exit: { opacity: 0, x: 100 }
    }

    return (
        <motion.li className={`${styles.item} ${address === 'avatar' && styles.active_item}`} variants={item}>
            <p className={styles.tier_text}>{title}</p>
            <Avatar urlString={name} />
            <p className={styles.name_text}>{name}</p>
        </motion.li>
    );
}

export default TableItem;