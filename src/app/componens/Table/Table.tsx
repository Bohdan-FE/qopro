import TierBtn from '../TierBtn/TierBtn';
import styles from './Table.module.scss';
import TaleList from './TableList/TableList';
import data1 from '../../../data/accounts.json'
import data2 from '../../../data/accounts2.json'
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';


function Table() {
    const [tier, setTier] = useState('1')

    return (
        <section className={styles.table_wrapper}>
            <div className={styles.btns_container}>
                <TierBtn tier={tier} setTier={setTier} />
            </div>
            <div className={styles.table_title_wrapper}>
                <p className={styles.table_title}>Leaderboard</p><p className={styles.table_title_2}>QORPO POWER</p>
            </div>
            <div className={styles.table_header_container}>
                <div className={styles.table_header}>
                    <p className={styles.bank}>Bank</p><p>Name</p>
                </div>
                <div className={styles.table_header}>
                    <p className={styles.bank}>Bank</p><p>Name</p>
                </div>
            </div>
            <div className={styles.list_container}>
                <AnimatePresence>
                    {tier === '1' && <TaleList key={1} data={data1} title='Tier1' />}
                    {tier === '2' && <TaleList key={2} data={data2} title='Tier2' />}
                    {tier === '3' && <TaleList key={3} data={data2} title='Tier3' />}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default Table;