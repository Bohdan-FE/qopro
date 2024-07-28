import { useEffect, useMemo, useState } from 'react';
import styles from './Hero.module.scss';
import { extractNumberFromString } from 'src/helpers/extractNumberFromString';


function Hero() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    })
    const [isMouseIn, setIsMouseIn] = useState(false)
    const [isText, setIsText] = useState(false)

    const zoom = (document.body.style as any).zoom
    const index = useMemo(() => extractNumberFromString(zoom) / 100, [zoom])

    useEffect(() => {

        if (!isMouseIn) return

        const mouseMoveHandler = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX / index,
                y: e.clientY / index
            })
        }

        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }

    }, [index, isMouseIn])

    const style = {
        default: {
            left: mousePosition.x - 20,
            top: mousePosition.y - 20
        },
        text: {
            left: mousePosition.x - 75,
            top: mousePosition.y - 75,
            width: 150,
            height: 150,
            backgroundColor: "white",
            mixBlendMode: 'difference'
        }
    }

    return (
        <div className={styles.hero_container} onMouseEnter={() => setIsMouseIn(true)} onMouseLeave={() => setIsMouseIn(false)}>
            <h1 className={styles.title} onMouseEnter={() => setIsText(true)} onMouseLeave={() => setIsText(false)}>QORPO <br />POWER <br />LEADERBOARD</h1>
            {isMouseIn && <div className={styles.cursor} style={isText ? style.text : style.default}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>}
        </div >
    );
}

export default Hero;