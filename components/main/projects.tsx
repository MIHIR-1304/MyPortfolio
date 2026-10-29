'use client';

import { useState, useMemo } from "react";
import Image from "next/image";
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

// Category Meta with accents, icons, and gradients
const CATEGORY_META: Record<
  string,
  {
    icon: any;
    accentGlow: string;
    borderActive: string;
    borderHover: string;
    color: string;
    badgeBg: string;
    description: string;
  }
> = {
  "Product Design": {
    icon: FaCube,
    accentGlow: "from-orange-500/25 via-amber-500/15 to-transparent",
    borderActive: "border-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.4)]",
    borderHover: "hover:border-orange-400/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]",
    color: "text-orange-400",
    badgeBg: "bg-orange-500/10 border-orange-500/30 text-orange-300",
    description: "Modern, high-fidelity 3D product animations and interactive commercial assets.",
  },
  "Web Development": {
    icon: FaRobot,
    accentGlow: "from-cyan-500/25 via-blue-500/15 to-transparent",
    borderActive: "border-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.4)]",
    borderHover: "hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]",
    color: "text-cyan-400",
    badgeBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
    description: "Responsive 3D websites, interactive web applications, autonomous robotics & React projects.",
  },
  "Interior Design": {
    icon: SiBlender,
    accentGlow: "from-emerald-500/25 via-teal-500/15 to-transparent",
    borderActive: "border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.4)]",
    borderHover: "hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]",
    color: "text-emerald-400",
    badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    description: "Photorealistic architectural visualizations, lighting mockups, room models & cinematic scenes.",
  },
  "Game Assets": {
    icon: FaCube,
    accentGlow: "from-purple-500/25 via-pink-500/15 to-transparent",
    borderActive: "border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.4)]",
    borderHover: "hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]",
    color: "text-purple-400",
    badgeBg: "bg-purple-500/10 border-purple-500/30 text-purple-300",
    description: "Low-poly and high-poly 3D models, GLTF interactive assets, and real-time game props.",
  },
  "Java Projects": {
    icon: FaJava,
    accentGlow: "from-amber-500/25 via-red-500/15 to-transparent",
    borderActive: "border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.4)]",
    borderHover: "hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]",
    color: "text-amber-400",
    badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    description: "Robotics control interfaces, multi-threaded server-client systems, and logic layers.",
  },
  "Backend Projects": {
    icon: SiExpress,
    accentGlow: "from-teal-500/25 via-emerald-500/15 to-transparent",
    borderActive: "border-teal-500 shadow-[0_0_25px_rgba(20,184,166,0.4)]",
    borderHover: "hover:border-teal-400/60 hover:shadow-[0_0_25px_rgba(20,184,166,0.25)]",
    color: "text-teal-400",
    badgeBg: "bg-teal-500/10 border-teal-500/30 text-teal-300",
    description: "Scalable REST APIs, spreadsheet data automation pipelines, and real-time WebSockets.",
  },
  "SQL Projects": {
    icon: SiMysql,
    accentGlow: "from-blue-500/25 via-cyan-500/15 to-transparent",
    borderActive: "border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.4)]",
    borderHover: "hover:border-blue-400/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]",
    color: "text-blue-400",
    badgeBg: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    description: "3NF relational schemas, stored procedures, cascading triggers, and query tuning.",
  },
  "Graphic Design": {
    icon: SiAdobephotoshop,
    accentGlow: "from-pink-500/25 via-fuchsia-500/15 to-transparent",
    borderActive: "border-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.4)]",
    borderHover: "hover:border-pink-400/60 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]",
    color: "text-pink-400",
    badgeBg: "bg-pink-500/10 border-pink-500/30 text-pink-300",
    description: "Futuristic space branding, cyberpunk game UI / HUD layouts, and digital motion posters.",
  },
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeSubcategory, setActiveSubcategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"section-wise" | "grid">("section-wise");

  // Get active category configuration
  const currentCategoryConfig = useMemo(() => {
    return PROJECT_CATEGORIES.find(
      (cat) => cat.name.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  // Compute category project counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PROJECTS.length };
    PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

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

  // Subcategory counts for active category
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

  // Grouped projects for Section-Wise view
  const groupedProjects = useMemo(() => {
    const groups: Record<string, any[]> = {};
    const categoriesToGroup =
      activeCategory === "all"
        ? Object.keys(CATEGORY_META)
        : [activeCategory];

    categoriesToGroup.forEach((cat) => {
      const projs = filteredProjects.filter((p) => p.category === cat);
      if (projs.length > 0) {
        groups[cat] = projs;
      }
    });
    return groups;
  }, [filteredProjects, activeCategory]);

  const handleSelectCategory = (catName: string) => {
    if (activeCategory === catName) {
      setActiveCategory("all");
      setActiveSubcategory("all");
    } else {
      setActiveCategory(catName);
      setActiveSubcategory("all");
    }
  };

  const handleScrollToSection = (catName: string) => {
    handleSelectCategory(catName);
    const elem = document.getElementById("projects-display-area");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setActiveSubcategory("all");
    setSearchQuery("");
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-10 max-w-7xl mx-auto w-full z-20"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-950/40 backdrop-blur-xl mb-4 text-xs font-semibold text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          <FaLayerGroup className="text-cyan-400" />
          <span>Glassmorphic Interactive Showcase</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500 tracking-tight">
          Featured Projects
        </h1>
        <p className="mt-4 text-gray-300/80 max-w-2xl text-xs md:text-sm lg:text-base leading-relaxed">
          Explore specialized domain hubs featuring real 3D product animations,
          interactive GLTF assets, core Java systems, scalable backend architectures,
          and autonomous AI robotics.
        </p>
      </div>

      {/* TOP-LEVEL GLASSMORPHIC DOMAIN CARDS WITH EMBEDDED PROJECT THUMBNAILS */}
      <div className="w-full mb-12">
        <div className="flex items-center justify-between mb-5 px-1">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-200">
            <FaCube className="text-cyan-400" />
            <span>Domain Hubs & Project Galleries</span>
          </div>
          {activeCategory !== "all" && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
            >
              Reset to All ({PROJECTS.length} Projects)
            </button>
          )}
        </div>

        {/* Responsive Grid of Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(CATEGORY_META).map(([catName, meta]) => {
            const Icon = meta.icon;
            const isSelected =
              activeCategory.toLowerCase() === catName.toLowerCase();
            const count = categoryCounts[catName] || 0;

            // Get project thumbnails belonging to this category
            const domainProjects = PROJECTS.filter((p) => p.category === catName);
            const previewImages = domainProjects.slice(0, 3).map((p) => ({
              src: p.image,
              title: p.title,
            }));

            return (
              <div
                key={catName}
                onClick={() => handleScrollToSection(catName)}
                className={`relative overflow-hidden rounded-2xl p-5 border cursor-pointer transition-all duration-500 group flex flex-col justify-between backdrop-blur-xl ${
                  isSelected
                    ? `${meta.borderActive} bg-[#10072e]/90 scale-[1.02] shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]`
                    : `border-white/10 bg-gradient-to-b from-white/[0.05] via-purple-950/20 to-[#08021a]/80 ${meta.borderHover} hover:scale-[1.01] hover:bg-white/[0.08]`
                }`}
              >
                {/* Neon Ambient Glow */}
                <div
                  className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${meta.accentGlow} blur-3xl pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity duration-500`}
                />

                {/* Shiny glass highlight corner */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.06] pointer-events-none" />

                <div className="relative z-10">
                  {/* Card Header: Icon + Count Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className={`p-3 rounded-xl bg-white/[0.06] border border-white/10 ${meta.color} text-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md`}
                    >
                      <Icon />
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md border ${meta.badgeBg}`}
                      >
                        {count} {count === 1 ? "Project" : "Projects"}
                      </span>
                      {isSelected && (
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-cyan-300 group-hover:to-purple-300 transition-colors">
                    {catName}
                  </h3>
                  <p className="mt-1.5 text-xs text-gray-300/80 line-clamp-2 leading-relaxed">
                    {meta.description}
                  </p>

                  {/* EMBEDDED PROJECT THUMBNAILS PREVIEW GALLERY */}
                  <div className="mt-4 pt-3 border-t border-white/[0.08]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                        Project Previews
                      </span>
                      <span className="text-[10px] text-cyan-400 font-medium group-hover:underline">
                        View Details →
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {previewImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-video rounded-lg overflow-hidden border border-white/15 bg-black/50 group/thumb shadow-sm"
                          title={img.title}
                        >
                          <Image
                            src={img.src}
                            alt={img.title}
                            width={240}
                            height={150}
                            className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-transparent transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Explore Hub Button Footer */}
                <div className="relative z-10 mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-purple-300 group-hover:text-cyan-300 transition-colors">
                  <span>Explore Hub</span>
                  <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FILTER & INTERACTION CONTROL BAR */}
      <div
        id="projects-display-area"
        className="w-full bg-gradient-to-b from-[#0e072c]/80 to-[#07021a]/90 backdrop-blur-xl rounded-2xl border border-white/[0.12] p-4 md:p-6 mb-10 flex flex-col gap-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
      >
        {/* Top Controls: Filter Pills, Search, View Mode Switcher */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-hidden">
            <button
              onClick={() => {
                setActiveCategory("all");
                setActiveSubcategory("all");
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer backdrop-blur-md ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/30"
                  : "bg-white/[0.05] text-gray-300 hover:bg-white/[0.1] hover:text-white border border-white/10"
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
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer backdrop-blur-md ${
                    isSelected
                      ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/30"
                      : "bg-white/[0.05] text-gray-300 hover:bg-white/[0.1] hover:text-white border border-white/10"
                  }`}
                >
                  {catName} ({categoryCounts[catName] || 0})
                </button>
              );
            })}
          </div>

          {/* Right Controls: View Switcher & Search Bar */}
          <div className="flex items-center gap-3">
            {/* View Mode Toggle: Section-Wise vs Unified Grid */}
            <div className="flex items-center bg-black/40 border border-white/10 rounded-xl p-1 backdrop-blur-md">
              <button
                onClick={() => setViewMode("section-wise")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "section-wise"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                title="Section-by-Section View"
              >
                <span>☰</span>
                <span className="hidden sm:inline">Section Wise</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                title="Grid View"
              >
                <span>⊞</span>
                <span className="hidden sm:inline">Grid View</span>
              </button>
            </div>

            {/* Live Search Input Box */}
            <div className="relative flex-1 sm:w-64">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              <input
                type="text"
                placeholder="Search projects, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#120738]/90 border border-white/15 focus:border-cyan-400 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-gray-400 outline-none transition-colors backdrop-blur-md"
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
        </div>

        {/* SUB-HIERARCHY FILTER PILLS (When Category is selected) */}
        {activeCategory !== "all" &&
          currentCategoryConfig &&
          "subcategories" in currentCategoryConfig &&
          (currentCategoryConfig.subcategories as any)?.length > 0 && (
            <div className="pt-3 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <FaFilter className="text-purple-400" />
                <span>Sub-Categories:</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveSubcategory("all")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer backdrop-blur-md ${
                    activeSubcategory === "all"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                      : "bg-white/[0.04] text-gray-400 hover:text-gray-200 border border-white/5"
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
                      onClick={() => setActiveSubcategory(subcat)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer backdrop-blur-md ${
                        isSubSelected
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                          : "bg-white/[0.04] text-gray-400 hover:text-gray-200 border border-white/5"
                      }`}
                    >
                      {subcat} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        {/* Current Path & Result Count Footer */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/[0.08]">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-gray-500">Browsing:</span>
            <span className="text-purple-300 font-semibold">Projects</span>
            <span>&gt;</span>
            <span className="text-cyan-300 font-semibold capitalize">
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

      {/* PROJECT PRESENTATION AREA */}
      {filteredProjects.length > 0 ? (
        viewMode === "section-wise" && activeCategory === "all" ? (
          /* SECTION-WISE PRESENTATION: Categorized sections with glass banners */
          <div className="w-full flex flex-col gap-14">
            {Object.entries(groupedProjects).map(([catName, projs]) => {
              const meta = CATEGORY_META[catName];
              const Icon = meta?.icon || FaCube;

              return (
                <div key={catName} className="flex flex-col gap-6">
                  {/* Glassmorphic Section Header Banner */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.12]">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl bg-white/[0.06] border border-white/10 ${
                          meta?.color || "text-cyan-400"
                        } text-xl shadow-md`}
                      >
                        <Icon />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                            {catName}
                          </h2>
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full border ${
                              meta?.badgeBg || "bg-white/10 text-gray-300"
                            }`}
                          >
                            {projs.length} {projs.length === 1 ? "Project" : "Projects"}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">
                          {meta?.description}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSelectCategory(catName)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 bg-cyan-950/30 px-3 py-1.5 rounded-lg transition-all hover:bg-cyan-500/20 cursor-pointer"
                    >
                      Focus Section →
                    </button>
                  </div>

                  {/* Section Grid of Glassmorphic Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projs.map((project) => (
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
                </div>
              );
            })}
          </div>
        ) : (
          /* UNIFIED GRID VIEW (OR WHEN SPECIFIC CATEGORY IS ACTIVE) */
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
        )
      ) : (
        /* NO RESULTS FALLBACK */
        <div className="w-full py-16 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0e072c]/60 to-[#07021a]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-xl">
          <FaSearch className="text-4xl text-gray-500 mb-3 animate-pulse" />
          <h3 className="text-lg font-bold text-white">No projects found</h3>
          <p className="text-xs md:text-sm text-gray-400 mt-1 max-w-md">
            No projects matched your criteria &quot;
            {searchQuery || activeSubcategory}&quot;. Try selecting a different
            filter or clearing your search.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white text-xs font-semibold hover:opacity-95 shadow-lg shadow-purple-900/30 transition-all cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
};