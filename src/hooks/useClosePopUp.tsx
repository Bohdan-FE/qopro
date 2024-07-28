import { useEffect, useRef, useState } from "react";

function useClosePopUp() {
    const ref = useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsActive(false)
            }
        };

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };
    }, [ref, setIsActive]);


    return { ref, isActive, setIsActive };
}

export default useClosePopUp;