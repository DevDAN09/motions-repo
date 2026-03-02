import { AnimatePresence, LayoutGroup } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"
import { constant } from "./constant"
export default function SharedLayoutAnimation() {
    const [selectedTab, setSelectedTab] = useState(tabs[0])

    return (
        <div style={constant.container}>
            <LayoutGroup id="shared-layout-tabs">
                <nav style={constant.nav}>
                    <ul style={constant.tabsContainer}>
                        {tabs.map((item) => (
                            <motion.li
                                key={item.label}
                                initial={false}
                                animate={{
                                    backgroundColor:
                                        item === selectedTab ? "#eee" : "#eee0",
                                }}
                                style={constant.tab}
                                onClick={() => setSelectedTab(item)}
                            >
                                {`${item.icon} ${item.label}`}
                                {item === selectedTab ? (
                                    <motion.div
                                        style={constant.underline}
                                        layoutId="underline"
                                        id="underline"
                                    />
                                ) : null}
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <main style={constant.iconContainer}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTab ? selectedTab.label : "empty"}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={constant.icon}
                        >
                            {selectedTab ? selectedTab.icon : "😋"}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </LayoutGroup>
        </div>
    )
}
/**
 * ==============   Data   ================
 */

const allIngredients = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" },
]

const [tomato, lettuce, cheese] = allIngredients
const tabs = [tomato, lettuce, cheese]