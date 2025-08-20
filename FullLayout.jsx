// src/pages/ResourcesPage.jsx
import React from "react";
import { Bookmark, ArrowUpRight } from "lucide-react";

// Lista temporal de recursos (puedes mover esto a un archivo JSON aparte)
const resources = [
  {
    id: 1,
    title: "Exactly",
    description:
      "AI artwork creation platform for artists that understands your style.",
    image: "/images/resources/exactly.png",
    link: "https://exactly.com",
  },
  {
    id: 2,
    title: "D&AD Awards",
    description:
      "Recognised globally, this award celebrates excellence in design and advertising.",
    image: "/images/resources/dandad.png",
    link: "https://www.dandad.org",
  },
  {
    id: 3,
    title: "Grid System",
    description:
      "Josef Müller-Brockmann’s grid systems emphasise clarity and functionality.",
    image: "/images/resources/grid-system.png",
    link: "https://example.com",
  },
  // ...agrega más recursos
];

const categories = [
  "All",
  "Artificial Intelligence",
  "Awards Application",
  "Books & Magazines",
  "Colors",
  "Courses & Tutorials",
  "Designers Archive",
  "Design Studios",
  "Extensions & Plugins",
  "Icons",
  "Illustrations",
  "Inspiration",
  "Market Places",
  "Mockups",
  "Photography",
  "Pro Guide Lines",
  "Programs",
  "Trends",
  "Typography",
  "Type Foundry",
  "Ux / Ui",
  "Vectors",
  "Video & Motion",
];

const Sidebar = () => (
  <aside className="w-64 p-4 border-r border-gray-200">
    <ul className="space-y-2 text-sm">
      {categories.map((cat) => (
        <li key={cat} className="hover:text-yellow-500 cursor-pointer">
          {cat}
        </li>
      ))}
    </ul>
  </aside>
);

const Filters = () => (
  <div className="flex flex-wrap items-center gap-3 mb-6">
    {["Free", "Freetrial", "Freemium", "Paid", "Staff Pick"].map((filter) => (
      <button
        key={filter}
        className="px-3 py-1 text-xs border rounded-full hover:bg-gray-100"
      >
        {filter}
      </button>
    ))}
  </div>
);

const ResourceCard = ({ resource }) => (
  <div className="bg-white rounded-2xl border shadow-sm p-4 flex flex-col justify-between">
    <img
      src={resource.image}
      alt={resource.title}
      className="w-16 h-16 object-contain mb-4"
    />
    <h3 className="font-semibold text-sm mb-1">{resource.title}</h3>
    <p className="text-xs text-gray-600 mb-3 line-clamp-3">
      {resource.description}
    </p>
    <div className="flex justify-between items-center">
      <a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-600 flex items-center gap-1 hover:underline"
      >
        Visit <ArrowUpRight size={14} />
      </a>
      <button>
        <Bookmark size={16} className="text-gray-500 hover:text-black" />
      </button>
    </div>
  </div>
);

const Footer = () => (
  <footer className="mt-10 border-t border-gray-200 p-6 text-sm text-gray-600">
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <p className="font-semibold">MAKEROOM</p>
        <p className="text-xs mt-2">
          All the websites you need to get started & beyond, curated by creatives
          like you.
        </p>
      </div>
      <div>
        <p className="font-semibold mb-2">Resources</p>
        <ul className="text-xs space-y-1">
          {categories.slice(0, 10).map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold mb-2">Submit</p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full border p-2 text-xs rounded mb-2"
        />
        <input
          type="text"
          placeholder="Share your web, book, design studio..."
          className="w-full border p-2 text-xs rounded mb-2"
        />
        <button className="w-full bg-black text-white py-2 text-xs rounded">
          Send
        </button>
      </div>
    </div>
  </footer>
);

const ResourcesPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Filters />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ResourcesPage;
