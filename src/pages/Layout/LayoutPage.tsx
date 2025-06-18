import * as motion from "motion/react-client";
import { LayoutAnimation } from "../../animations";
import { useState } from "react";

const LayoutPage:React.FC = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <>
        <div className="flex flex-col items-center justify-start min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center"
            >
                <h1>Layout Page</h1>
                <p>props 로 layout 컴포넌트를 전달할 수 있습니다.</p>
                <p>레이아웃 애니메이션의 가장 멋진 점 중 하나는</p>
                <p>모든 CSS 속성을 효과적으로 전환할 수 있다는 점입니다.</p>
                <p>플렉스 방향이나 그리드 템플릿 열에는 CSS 전환을 적용할 수 없지만</p>
                <p>레이아웃 애니메이션을 사용하면 가능합니다.</p>
                <p>게다가 애니메이션은 매우 효율적인 트랜스폼을 사용하므로 움직임이 부드럽습니다!</p>
                <p> ~ Josh W. Comeau</p>
            </motion.div>
            
            <LayoutAnimation onToggle={(isOn) => setIsOn(isOn) } />
            <p>{isOn ? "flex-start" : "flex-end"}</p>
        </div>
        
        </>
    )
}

export default LayoutPage;
