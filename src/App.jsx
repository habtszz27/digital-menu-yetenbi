import { useSearchParams } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";

// sample menu data
const menuData = {
  cocktails: [
    { name: "ማኒልያ ማርጋሪታ", price: "180 ETB" },
    { name: "ጎልደን ሞሲቶ", price: "150 ETB" },
  ],
  beers: [
    { name: "ስታውት ቢየር", price: "90 ETB" },
    { name: "ላገር ቢየር", price: "70 ETB" },
  ],
  food: [
    { name: "ፓን የሶስ ዳቦ", price: "120 ETB" },
    { name: "ቢልተድ በርግር", price: "250 ETB" },
  ],
};

export default function App() {
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState([]);
  const tableId = searchParams.get("table") || "?";

  const toggle = (item) =>
    setSelected((s) =>
      s.find((i) => i.name === item.name)
        ? s.filter((i) => i.name !== item.name)
        : [...s, item]
    );

  return (
    <MotionConfig transition={{ duration: 0.4 }}>
      <div className="min-h-screen bg-black text-gold-400 font-sans p-4">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold">የተንቢ ባርና ሬስቶራንት</h1>
          <p className="text-lg mt-2">Table #{tableId}</p>
        </header>

        <main className="grid gap-6 md:grid-cols-3">
          {Object.entries(menuData).map(([section, items]) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black border border-gold-700 rounded-2xl p-4 shadow-lg"
            >
              <h3 className="text-2xl mb-3 capitalize">{section}</h3>
              <ul className="space-y-2">
                {items.map((item) => {
                  const active = selected.find((i) => i.name === item.name);
                  return (
                    <li
                      key={item.name}
                      onClick={() => toggle(item)}
                      className={`flex justify-between border-b border-gold-700/40 pb-1 cursor-pointer hover:text-gold-700 transition ${
                        active ? "text-gold-700" : ""
                      }`}
                    >
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </main>

        {selected.length > 0 && (
          <section className="mt-10 bg-gold-900/10 p-4 rounded-xl shadow-inner">
            <h2 className="text-2xl mb-3">Selected Items</h2>
            <ul className="space-y-1">
              {selected.map((item) => (
                <li key={item.name} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </MotionConfig>
  );
}
