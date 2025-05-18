import './App.css';
import { useState } from 'react';

const menuData = {
  Foods: [
    { name: "የስጋ ፉል", price: "120ብር" },
    { name: "በቅመም ምስር", price: "140ብር" }
  ],
  Drinks: [
    { name: "ቢያር", price: "100ብር" },
    { name: "ዋይን", price: "200ብር" }
  ]
};

function App() {
  const [category, setCategory] = useState("Foods");

  return (
    <div className="min-h-screen bg-black text-yellow-400 font-sans">
      <header className="text-center py-6 border-b border-yellow-500">
        <h1 className="text-3xl font-bold">የተንቢ ባርና ሬስቶራንት</h1>
        <p className="text-sm mt-1 text-yellow-300">Digital Menu</p>
      </header>

      <nav className="flex justify-center gap-4 my-4 flex-wrap">
        {Object.keys(menuData).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm ${
              category === cat ? "bg-yellow-400 text-black" : "border border-yellow-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      <main className="px-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {menuData[category].map((item, index) => (
          <div key={index} className="border border-yellow-500 p-4 rounded-xl bg-black hover:bg-yellow-100/10 transition">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm mt-1">{item.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
