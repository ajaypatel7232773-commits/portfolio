"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = () => {
    const email = newsletterEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      alert("Please enter an email address.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const to = "ajaypatel7232773@gmail.com";
    const subject = encodeURIComponent("Newsletter Subscription");
    const body = encodeURIComponent(`Please subscribe this email to the newsletter: ${email}`);

    // Open user's mail client with a prefilled message
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight flex items-center gap-2 mb-4"
            >
              <span className="text-primary">Ajay</span>
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded">
                  Patel
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              A passionate software developer specializing in React.js, Node.js, and modern web technologies.
              Building scalable and efficient solutions for web applications.
            </p>
            <div className="flex space-x-2">
              <Link href="https://github.com/ajaypatel7232773-commits" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/patel-ajay-043aab273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:ajaypatel7232773@gmail.com">
                <Button variant="ghost" size="icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:ajaypatel7232773@gmail.com" className="hover:text-primary transition-colors">
                  ajaypatel7232773@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+919106919279" className="hover:text-primary transition-colors">
                  +91 9106919279
                </a>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Surat, Gujarat 394221</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates on new projects and tech articles.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email address"
                className="max-w-[220px]"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <Button type="button" onClick={handleSubscribe}>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ajay Patel. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}