'use client';

import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS, PROJECT_CATEGORIES } from "@/constants";
import {
  SiBlender,
  SiMysql,
  SiExpress,
  SiAdobephotoshop,
} from "react-icons/si";
import {
  FaJava,
  FaRobot,
  FaCube,
  FaSearch,
  FaLayerGroup,
  FaFilter,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

// Mapping category names to icons and accents
const CATEGORY_META: Record<
  string,
  {
    icon: any;
    accentGlow: string;
    borderActive: string;
    color: string;
    description: string;
  }
> = {
  "Blender 3D": {
    icon: SiBlender,
    accentGlow: "from-orange-500/20 via-amber-500/10 to-transparent",
    borderActive: "border-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.35)]",
    color: "text-orange-400",
    description: "3D Environments, Game Assets, and Cinematic Product Animations",
  },
  "Java Projects": {
    icon: FaJava,
    accentGlow: "from-amber-500/20 via-red-500/10 to-transparent",
    borderActive: "border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.35)]",
    color: "text-amber-400",
    description: "Core Java Desktop Systems, Multithreaded Sockets & OOP Architecture",
  },
  "SQL Projects": {
    icon: SiMysql,
    accentGlow: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderActive: "border-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.35)]",
    color: "text-cyan-400",
    description: "3NF Relational Schemas, Index Tuning, Stored Routines & Analytics",
  },
  "Backend Projects": {
    icon: SiExpress,
    accentGlow: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderActive: "border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.35)]",
    color: "text-emerald-400",
    description: "Scalable REST APIs, Real-time WebSockets & Data Automation",
  },
  "Graphic Design": {
    icon: SiAdobephotoshop,
    accentGlow: "from-pink-500/20 via-purple-500/10 to-transparent",
    borderActive: "border-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.35)]",
    color: "text-pink-400",
    description: "Futuristic Space Branding, Sci-Fi UI/HUD Concepts & Digital Posters",
  },
  "AI & Robotics": {
    icon: FaRobot,
    accentGlow: "from-purple-500/20 via-indigo-500/10 to-transparent",
    borderActive: "border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.35)]",
    color: "text-purple-400",
    description: "Autonomous Quadrobot, 3D Plant Navigator & Interactive 3D Web",
  },
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeSubcategory, setActiveSubcategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Get active category configuration
  const currentCategoryConfig = useMemo(() => {
    return PROJECT_CATEGORIES.find(
      (cat) => cat.name.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  // Filter projects by category, subcategory, and search
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category filter
      if (
        activeCategory !== "all" &&
        project.category.toLowerCase() !== activeCategory.toLowerCase()
      ) {
        return false;
      }

      // Subcategory filter
      if (activeSubcategory !== "all") {
        if (
          !project.subcategory ||
          project.subcategory.toLowerCase() !== activeSubcategory.toLowerCase()
        ) {
          return false;
        }
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesSubcat = project.subcategory
          ? project.subcategory.toLowerCase().includes(query)
          : false;
        const matchesTag = project.tags
          ? project.tags.some((tag) => tag.toLowerCase().includes(query))
          : false;

        return matchesTitle || matchesDesc || matchesSubcat || matchesTag;
      }

      return true;
    });
  }, [activeCategory, activeSubcategory, searchQuery]);

  // Compute category project counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PROJECTS.length };
    PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Compute subcategory counts for active category
  const subcategoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    PROJECTS.forEach((p) => {
      if (
        activeCategory === "all" ||
        p.category.toLowerCase() === activeCategory.toLowerCase()
      ) {
        if (p.subcategory) {
          counts[p.subcategory] = (counts[p.subcategory] || 0) + 1;
        }
      }
    });
    return counts;
  }, [activeCategory]);

  const handleSelectCategory = (catName: string) => {
    if (activeCategory === catName) {
      // Toggle off to all
      setActiveCategory("all");
      setActiveSubcategory("all");
    } else {
      setActiveCategory(catName);
      setActiveSubcategory("all");
    }
  };

  const handleSelectSubcategory = (subcat: string) => {
    setActiveSubcategory(subcat);
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setActiveSubcategory("all");
    setSearchQuery("");
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-10 max-w-7xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7042f88b] bg-[#120738]/60 backdrop-blur-md mb-4 text-xs font-semibold text-purple-300 shadow-[0_0_15px_rgba(112,66,248,0.3)]">
          <FaLayerGroup className="text-purple-400" />
          <span>Interactive Hierarchical Portfolio</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500 tracking-tight">
          Featured Projects
        </h1>
        <p className="mt-4 text-gray-300/80 max-w-2xl text-sm md:text-base leading-relaxed">
          Explore specialized domain cards across 3D animation, Java software,
          relational databases, backend architectures, and autonomous AI systems.
        </p>
      </div>

      {/* TOP-LEVEL DOMAIN CATEGORY CARDS ("Card Type" Grid) */}
      <div className="w-full mb-10">
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-200">
            <FaCube className="text-cyan-400" />
            <span>Select Domain Category</span>
          </div>
          {activeCategory !== "all" && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
            >
              Reset to All Projects ({PROJECTS.length})
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(CATEGORY_META).map(([catName, meta]) => {
            const Icon = meta.icon;
            const isSelected =
              activeCategory.toLowerCase() === catName.toLowerCase();
            const count = categoryCounts[catName] || 0;

            // Subcategories belonging to this category
            const subcats = Array.from(
              new Set(
                PROJECTS.filter((p) => p.category === catName).map(
                  (p) => p.subcategory
                )
              )
            );

            return (
              <div
                key={catName}
                onClick={() => handleSelectCategory(catName)}
                className={`relative overflow-hidden rounded-2xl p-5 border cursor-pointer transition-all duration-300 group flex flex-col justify-between ${
                  isSelected
                    ? `${meta.borderActive} bg-[#10072e]/90 scale-[1.02]`
                    : "border-[#2A0E61] bg-[#070318]/70 hover:border-[#7042f890] hover:bg-[#0e072a]/80 hover:shadow-[0_0_20px_rgba(112,66,248,0.2)]"
                }`}
              >
                {/* Background glow gradient */}
                <div
                  className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br ${meta.accentGlow} blur-2xl pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity`}
                />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-3 rounded-xl bg-white/5 border border-white/10 ${meta.color} text-2xl group-hover:scale-110 transition-transform`}
                    >
                      <Icon />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {count} Projects
                      </span>
                      {isSelected && (
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {catName}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {meta.description}
                  </p>
                </div>

                {/* Sub-hierarchies badges inside category card */}
                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                  {subcats.map((sub, idx) => {
                    const subCount = sub ? subcategoryCounts[sub] || 0 : 0;
                    return (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-gray-300 border border-white/5"
                      >
                        {sub} ({subCount})
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FILTER & BREADCRUMB BAR */}
      <div className="w-full bg-[#0a0524]/80 backdrop-blur-md rounded-2xl border border-[#2A0E61] p-4 md:p-6 mb-8 flex flex-col gap-4 shadow-xl">
        {/* Top Filter Controls: Category Pills & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <button
              onClick={() => {
                setActiveCategory("all");
                setActiveSubcategory("all");
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-900/40"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>

            {Object.keys(CATEGORY_META).map((catName) => {
              const isSelected =
                activeCategory.toLowerCase() === catName.toLowerCase();
              return (
                <button
                  key={catName}
                  onClick={() => handleSelectCategory(catName)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-900/40"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  {catName} ({categoryCounts[catName] || 0})
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="relative min-w-[260px]">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
            <input
              type="text"
              placeholder="Search by title, tag, subcategory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#120738] border border-[#2A0E61] focus:border-cyan-400 rounded-lg pl-9 pr-8 py-2 text-xs text-white placeholder-gray-400 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <RxCross2 className="text-sm" />
              </button>
            )}
          </div>
        </div>

        {/* SUB-HIERARCHY FILTERS (Displays when a specific category is selected, or if Blender) */}
        {activeCategory !== "all" &&
          currentCategoryConfig &&
          "subcategories" in currentCategoryConfig &&
          (currentCategoryConfig.subcategories as any)?.length > 0 && (
          <div className="pt-3 border-t border-[#2A0E61]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
              <FaFilter className="text-purple-400" />
              <span>Sub-Hierarchies:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleSelectSubcategory("all")}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  activeSubcategory === "all"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                    : "bg-white/5 text-gray-400 hover:text-gray-200 border border-transparent"
                }`}
              >
                All {activeCategory} ({categoryCounts[activeCategory] || 0})
              </button>

              {Array.from(
                new Set(
                  PROJECTS.filter((p) => p.category === activeCategory).map(
                    (p) => p.subcategory
                  )
                )
              ).map((subcat) => {
                if (!subcat) return null;
                const isSubSelected =
                  activeSubcategory.toLowerCase() === subcat.toLowerCase();
                const count = subcategoryCounts[subcat] || 0;

                return (
                  <button
                    key={subcat}
                    onClick={() => handleSelectSubcategory(subcat)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                      isSubSelected
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                        : "bg-white/5 text-gray-400 hover:text-gray-200 border border-transparent"
                    }`}
                  >
                    {subcat} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Current Path & Result Count */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/5">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-gray-500">Path:</span>
            <span className="text-purple-300 font-medium">Projects</span>
            <span>&gt;</span>
            <span className="text-cyan-300 font-medium capitalize">
              {activeCategory}
            </span>
            {activeSubcategory !== "all" && (
              <>
                <span>&gt;</span>
                <span className="text-white font-medium">
                  {activeSubcategory}
                </span>
              </>
            )}
          </div>
          <div className="font-semibold text-gray-300 whitespace-nowrap">
            Showing {filteredProjects.length} of {PROJECTS.length} Projects
          </div>
        </div>
      </div>

      {/* PROJECT CARDS GRID */}
      {filteredProjects.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              video={(project as any).video}
              model={(project as any).model}
              title={project.title}
              description={project.description}
              link={project.link}
              category={project.category}
              subcategory={project.subcategory}
              tags={project.tags}
            />
          ))}
        </div>
      ) : (
        <div className="w-full py-16 flex flex-col items-center justify-center text-center bg-[#0a0524]/40 rounded-2xl border border-[#2A0E61] p-8">
          <FaSearch className="text-4xl text-gray-600 mb-3" />
          <h3 className="text-lg font-bold text-white">No projects found</h3>
          <p className="text-sm text-gray-400 mt-1 max-w-md">
            No projects matched your criteria &quot;
            {searchQuery || activeSubcategory}&quot;. Try selecting a different
            filter or clearing your search.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
};
