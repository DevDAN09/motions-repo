import * as motion from "motion/react-client"
import { ball } from "./constant";


export default function EnterAnimation(){
    return (
        <motion.div
            initial = { { opacity : 0, scale: 0} }
            animate = { { opacity : 1, scale : 1} }
            transition = {
                {
                    duration: 0.4,
                    scale: { type : "spring", visualDuration: 0.4, bounce: 0.5},
                }
            }
            style = {ball}
        />
    )
}


