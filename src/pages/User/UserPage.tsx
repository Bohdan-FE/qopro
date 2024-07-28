import { useEffect } from "react"
import styles from './UserPage.module.scss'
import Header from "src/app/componens/Header/Header";
import Hero from "src/app/componens/Hero/Hero";
import Points from "src/app/componens/Points/Points";
import Table from "src/app/componens/Table/Table";
import Button from "src/app/componens/Button/Button";

function UserPage() {

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
        <div className={styles.page_container}>
            <Header />
            <main>
                <Hero />
                <Points />
                <Table />
                <Button />
            </main>
        </div>
    )
}

export default UserPage