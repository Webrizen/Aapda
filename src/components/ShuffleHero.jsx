"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full md:px-0 px-2 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
        Protecting Kaziranga from Floods
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
        Technology for saving lives and habitats.
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          leveraging advanced technology to protect the region's diverse wildlife and human communities. Our integrated system combines satellite imagery, drone technology, and computer vision to pioneer a preemptive and responsive approach to floods.
        </p>
        <a href="#know" className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Learn More
        </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2017/04/13/09/11/waterfall-2227010_640.jpg",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600336153113-d66c79de3e91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb2R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1558448495-5ef3fce92344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1545276070-ec815f01c6ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1604276661516-9c26d19251a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1621871567192-e29a9b8b5aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1587035555495-258d26cc82f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1625815231930-69fc14042849?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1603194501328-857101a904d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1606905262433-a99c85fc475f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1609520778163-a16fb3862581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1597153490859-bd51df70543c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1606905262433-a99c85fc475f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1606905262433-a99c85fc475f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1597153490859-bd51df70543c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZsb29kfGVufDB8fDB8fHww",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1528194764949-125c374c41af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGZsb29kfGVufDB8fDB8fHww",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;