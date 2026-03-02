import { Reorder } from "motion/react";
import { useState } from "react";

const initialItems = ["Tomato", "Lettuce", "Cheese", "Carrot", "Banana"];

const itemStyle: React.CSSProperties = {
  listStyle: "none",
  width: "100%",
  padding: "10px 14px",
  marginBottom: 10,
  borderRadius: 10,
  background: "#ffffff",
  border: "1px solid #ececec",
  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  cursor: "grab",
};

const ReorderListDemo: React.FC = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <section className="w-full max-w-xl mt-8">
      <h2 className="text-xl font-semibold mb-2">Reorder Sortable List</h2>
      <p className="text-sm text-gray-600 mb-4">
        항목을 드래그해서 순서를 바꿔보세요. <code>Reorder.Group</code>이 레이아웃 이동을
        자연스럽게 보간해 줍니다.
      </p>

      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="p-0 m-0"
        style={{ width: "100%" }}
      >
        {items.map((item) => (
          <Reorder.Item key={item} value={item} style={itemStyle}>
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  );
};

export default ReorderListDemo;
