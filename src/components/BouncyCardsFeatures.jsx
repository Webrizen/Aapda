"use client";
import React from "react";
import { motion } from "framer-motion";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <div className="flex flex-col gap-4">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
        About the Problem 
          <span className="text-slate-400"> Flood Crises in various parts of the world</span>
        </h2>
        <p className="max-w-2xl">
        Kaziranga located in Assam, renowned for its rich biodiversity and the iconic one-horned rhinoceros, faces a grave annual challenge: catastrophic flooding. The Brahmaputra River, nourishing the land in its serene days, turns into a source of destruction during monsoon seasons. Its rising waters inundate the park, leading to tragic losses for both wildlife and human settlements.
        </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          A technology for earth
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Impact on Wildlife and Communities</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
            The deluge, while a natural part of the ecosystem's rhythm, often becomes overwhelming, endangering the lives of animals and people alike. Wildlife faces displacement, with many animals drowning or being forced into human habitats, leading to distressing encounters. Communities suffer too, with homes destroyed, livelihoods washed away, and access to resources cut off.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Visualizing the Devastation</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
            Through poignant before-and-after imagery, we document the transformation of verdant expanses into waterlogged terrains. Statistical data further elucidates the extent of the devastation, highlighting the urgency of finding a sustainable solution.
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};