"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectsData = [
    {
      id: 1,
      title: "All-in-one restaurant POS system",
      description: "A comprehensive restaurant POS system built with React.js and php Implemented secure user authentication and integrated with AWS services.",
      image: "https://res.cloudinary.com/hghvyefc/image/upload/v1783668792/banner_snap4.4_blonlu.webp",
      category: ["all"],
      tags: ["React.js", "php", "AWS", "Ionic React", "MySQL"],
      company: "Yanolja Cloud Solution",
      featured: true
    },
    {
      id: 2,
      title: "contactless restaurant service",
      description: "A contactless experience is something that your customers are actively looking for. It’s a way to make your restaurant more efficient, and it’s a way to make your customers feel safer.",
      image: "https://res.cloudinary.com/hghvyefc/image/upload/f_auto,q_auto/Screenshot_2026-07-10_125304_qfbk8q",
      category: ["all"],
      tags: ["React.js", "Ant-Design", "php", "MySQL"],
      company: "Yanolja Cloud Solution",
      featured: true
    },
    {
      id: 3,
      title: "Service Provider Platform",
      description: "Electrician, Plumber, AC Repair, RO Service, Carpenter & Painter — all in one place...",
      image: "https://res.cloudinary.com/hghvyefc/image/upload/v1783669849/Screenshot_2026-07-10_132009_v0trfr.png",
      category: ["all"],
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Ionic React"],
      company: "",
      featured: true
    },
    {
      id: 4,
      title: "Pharmacy Website",
      description: "A pharmacy website is a fully integrated digital healthcare platform designed to provide patients with 24/7 access to medication management, over-the-counter products, and professional health resources.",
      image: "https://cdn.dribbble.com/userupload/11546492/file/original-29412e1dcb0cd6fe7f0d11e86e6b9858.png?resize=752x&vertical=center",
      category: ["all"],
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Material UI"],
      company: "",
      featured: false
    }
  ];

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category.includes("all"));

  return (
    <section id="projects" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            My Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h3>
          <p className="text-muted-foreground">
            Here are some of the key projects I've worked on throughout my career.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Button 
            variant={filter === "all" ? "default" : "outline"} 
            onClick={() => setFilter("all")}
            className="min-w-[90px]"
          >
            All
          </Button>
          <Button 
            variant={filter === "web" ? "default" : "outline"} 
            onClick={() => setFilter("web")}
            className="min-w-[90px]"
          >
            Web
          </Button>
          <Button 
            variant={filter === "frontend" ? "default" : "outline"} 
            onClick={() => setFilter("frontend")}
            className="min-w-[90px]"
          >
            Frontend
          </Button>
          <Button 
            variant={filter === "fullstack" ? "default" : "outline"} 
            onClick={() => setFilter("fullstack")}
            className="min-w-[90px]"
          >
            Fullstack
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={fadeIn}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30 h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary/90 hover:bg-primary">Featured</Badge>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <Badge variant="outline" className="mb-2">{project.company}</Badge>
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}