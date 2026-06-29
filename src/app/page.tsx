import { About } from "@/components/home/about";
import { BlogPreview } from "@/components/home/blog-preview";
import { Contact } from "@/components/home/contact";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";
import { Timeline } from "@/components/home/timeline";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Timeline />
      <Skills />
      <BlogPreview />
      <Contact />
    </>
  );
}
