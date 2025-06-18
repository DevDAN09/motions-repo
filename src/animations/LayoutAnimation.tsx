import * as motion from "motion/react-client"
import { useState } from "react"

interface LayoutAnimationProps {
    onToggle?: (isOn: boolean) => void;
}

export default function LayoutAnimation({ onToggle }: LayoutAnimationProps) {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => {
        const newState = !isOn;
        setIsOn(newState);
        onToggle?.(newState);
    }

    return (
        <button
            className="toggle-container"
            style={{
                ...container,
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
                className="toggle-handle"
                style={handle}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button>
    )
}

/**
 * ==============   Styles   ================
 */

const container = {
    width: 100,
    height: 50,
    backgroundColor: "#7711ff",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 10,
}

const handle = {
    width: 30,
    height: 30,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
}
