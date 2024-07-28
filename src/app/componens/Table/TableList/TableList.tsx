import styles from './TableList.module.scss'
import { ReactComponent as Svg } from '../../../../styles/icons/list-item-bg.svg'
import TableItem from '../TableItem/TableItem';
import { motion } from 'framer-motion';
import { Data } from 'src/types/types';


function TaleList({ data, title }: { data: Data[], title: string }) {

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.05,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
        exit: {
            opacity: 1,
        }
    }

    return (
        <motion.ul
            className={styles.table_list}
            initial="hidden"
            animate="visible"
            exit='exit'
            variants={list}>
            {data.map(item => <TableItem key={item.address} name={item.name} address={item.address} title={title} />)}
            <Svg className={styles.svg} />
        </motion.ul>
    );
}

export default TaleList;