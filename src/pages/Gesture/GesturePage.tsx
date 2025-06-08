import * as motion from "motion/react-client";
import { constant } from "../../animations";
import type { SyntheticEvent } from "react";
import { useRef, useState } from "react";

const MotionedButton = () => {
    const handleHoverStart = (event: MouseEvent) => {
        console.log('Hover started', event);
    };
    const handleClick = (event: SyntheticEvent) => {
        console.log("clicked", event);
    }
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={constant.box}
            onHoverStart={handleHoverStart}
            onClick = {handleClick}
        ></motion.div>
    )
}

interface DragBoxProps {
    isConstraint?: boolean;
}

const DragBox = ({ isConstraint = false }: DragBoxProps) => {
    const constraintsRef = useRef<HTMLDivElement>(null)

    return (
        isConstraint ?
        <>
            <motion.div ref={constraintsRef} style={{
                width: 300,
                height: 300,
                backgroundColor: "var(--hue-1-transparent)",
                borderRadius: 10
            }}>
                <motion.div 
                    drag 
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={constant.box} 
                />
            </motion.div>
        </> :
        <motion.div 
            drag 
            style={constant.box} 
        />
    )
}

const DirectionLockingDrag = () => {
    const [activeDirection, setActiveDirection] = useState<"x" | "y" | null>(null);

    return (
        <>
            <Line direction="x" activeDirection={activeDirection} />
            <Line direction="y" activeDirection={activeDirection} />
            <motion.div
                drag
                dragDirectionLock
                onDirectionLock={(direction) => setActiveDirection(direction)}
                onDragEnd={() => setActiveDirection(null)}
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
                dragElastic={0.2}
                whileDrag={{ cursor: "grabbing" }}
                style={constant.box}
            />
        </>
    )
}

function Line({
    direction,
    activeDirection,
}: {
    direction: "x" | "y"
    activeDirection: "x" | "y" | null
}) {
    return (
        <motion.div
            initial={false}
            animate={{ opacity: activeDirection === direction ? 1 : 0.3 }}
            transition={{ duration: 0.1 }}
            style={{ ...constant.dashedLine, rotate: direction === "y" ? 90 : 0 }}
        />
    )
}

const GesturePage:React.FC = () => {
    return (
        <>
            <div
                className="flex flex-col items-center justify-start min-h-screen"
            >
            <h1>Gesture Page</h1>
            <p>모션 컴포넌트에는 다양한 제스쳐 애니메이션 프롭을 제공합니다.</p>
            <p>해당 모션때 적용할 애니메이션을 정의할 수 있습니다. </p>
            <MotionedButton></MotionedButton>
            <br/>
            <h2>drag</h2>
            <p>drag 제약을 주지 않으면 박스는 자유롭게 페이지를 확장시킵니다.</p>
            <DragBox />
            <p>제약을 주는 것이 중요합니다.</p>
            <DragBox isConstraint={true} />
            <div className="mb-[200px]"></div>
            <h2>Direction locking</h2>
            <DirectionLockingDrag/>
            </div>
        </>
    )
}

export default GesturePage;