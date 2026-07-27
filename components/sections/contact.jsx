"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "ajaypatel7232773@gmail.com",
      link: "mailto:ajaypatel7232773@gmail.com",
      text: "For professional inquiries and collaboration opportunities",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 9106919279",
      link: "tel:+919106919279",
      text: "Available for calls during business hours (IST)",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Surat, Gujarat 394221",
      link: "https://maps.google.com/?q=Surat,Gujarat",
      text: "Open to remote work and relocation opportunities",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-20 bg-accent/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h3>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you! Feel free to reach out through any of the
            following channels.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h4 className="text-2xl font-semibold mb-6 text-center">
            Let's discuss your project
          </h4>
          <p className="text-muted-foreground mb-8 max-w-2xl text-center mx-auto">
            I'm currently available for freelance projects and full-time
            opportunities. Whether you need a web application built from scratch
            or want to improve an existing one, I'm here to help.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-medium">{item.title}</h5>
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target={item.title === "Location" ? "_blank" : undefined}
                      rel={
                        item.title === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {item.value}
                    </a>
                    {item.text && (
                      <p className="text-sm text-muted-foreground p-2">
                        {item.text}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="bg-card rounded-lg p-6 border border-border text-muted-foreground text-center">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Let's Build Something Great Together</h4>
            <p className="text-muted-foreground mb-4">
              Whether you have a project in mind, need technical consultation, or want to discuss technology and innovation, I'd love to hear from you.
            </p>
            <div className="grid">
              <div>
                <Link href="mailto:ajaypatel7232773@gmail.com">
                <Button>
                  Send Me an Email
                </Button>
              </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}