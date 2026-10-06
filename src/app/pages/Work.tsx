import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Quote, Star } from "lucide-react";

export function Work() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const projects = [
    {
      title: "AI Habit Tracker",
      category: "AI-Powered Web Application",
      description:
        "An AI-powered habit tracking web application that helps users build consistent habits with personalized suggestions, streak tracking, progress analytics and daily motivational insights.",
      image: "/ai-habit-tracker.png",
      tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
      url: "#",
    },

    {
      title: "Shree Ayurveda",
      category: "E-Commerce Website",
      description:
        "A responsive Ayurvedic product website designed to showcase products, improve customer engagement and provide a smooth online browsing experience across devices.",
      image: "/shree-uma-ayurveda.png",
      tech: ["React", "JavaScript", "Responsive Design", "UI/UX"],
      url: "https://shreeumaayurveda.lovable.app",
    },

    {
      title: "MESTA",
      category: "Business Website",
      description:
        "The official MESTA digital solutions website, designed to present services, showcase projects and establish a professional online presence for a growing digital business.",
      image: "/mesta-website.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      url: "#",
    },

    {
      title: "Find My Parking",
      category: "Smart Parking Platform",
      description:
        "A smart parking platform concept designed to help users discover and manage parking spaces through a modern web-based experience.",
      image: "/find-my-parking.png",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      url: "#",
    },
  ];

  const testimonials = [
    {
      quote:
        "MESTA understood our requirements and delivered a clean, professional digital experience for our business.",
      client: "Client Name 1",
      position: "Business Owner",
    },
    {
      quote:
        "The website was responsive, modern and easy to use. The overall development process was smooth and professional.",
      client: "Client Name 2",
      position: "Founder",
    },
    {
      quote:
        "We were impressed by the attention to detail and the quality of the final digital solution.",
      client: "Client Name 3",
      position: "Business Owner",
    },
    {
      quote:
        "MESTA helped us create a stronger online presence with a modern and user-friendly website.",
      client: "Client Name 4",
      position: "Founder",
    },
    {
      quote:
        "Professional communication, clean design and a solution that matched our business requirements.",
      client: "Client Name 5",
      position: "Business Owner",
    },
  ];

  const handleTestimonialScroll = (
    event: React.UIEvent<HTMLDivElement>
  ) => {
    const container = event.currentTarget;
    const cards = container.querySelectorAll(".testimonial-card");

    if (!cards.length) return;

    const containerRect = container.getBoundingClientRect();

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();

      const distance = Math.abs(
        cardRect.left - containerRect.left
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveTestimonial(closestIndex);
  };

  const scrollToTestimonial = (index: number) => {
    const container = document.getElementById(
      "testimonial-slider"
    );

    if (!container) return;

    const cards = container.querySelectorAll(
      ".testimonial-card"
    );

    const card = cards[index] as HTMLElement;

    if (!card) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const scrollLeft =
      container.scrollLeft +
      (cardRect.left - containerRect.left);

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    setActiveTestimonial(index);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">

      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl mb-6">
              Our{" "}
              <span className="italic text-[#4a9d2e]">
                Work
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600">
              Explore our portfolio of successful projects.
              From startups to businesses, we've delivered
              exceptional digital experiences.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * index,
                }}
                className="group cursor-pointer block"
              >

                <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-[#4a9d2e]/50 transition-all h-full flex flex-col">

                  <div className="relative overflow-hidden aspect-video">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent opacity-60" />

                    <div className="absolute top-4 right-4 bg-[#c4ff61] text-[#0a1f1a] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={20} />
                    </div>

                  </div>

                  <div className="p-8 flex-1 flex flex-col">

                    <h3 className="text-2xl mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              </motion.a>
            ))}

          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >

            <h2 className="text-4xl md:text-5xl mb-4 font-bold">
              What our{" "}
              <span className="italic text-[#4a9d2e]">
                clients say
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from businesses we've worked
              with.
            </p>

          </motion.div>

          {/* Testimonials Slider */}
          <div
            id="testimonial-slider"
            onScroll={handleTestimonialScroll}
            className="overflow-x-auto snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >

            <div className="flex gap-8">

              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                  }}
                  className="testimonial-card w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex-shrink-0 snap-start bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-[#4a9d2e]/5 transition-all duration-300 relative"
                >

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-[#4a9d2e]/10 rounded-full flex items-center justify-center">

                    <Quote className="w-6 h-6 text-[#4a9d2e]" />

                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-5">

                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#4a9d2e] text-[#4a9d2e]"
                      />
                    ))}

                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Client */}
                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 bg-gradient-to-br from-[#4a9d2e] to-[#3a7d1e] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.client.charAt(0)}
                    </div>

                    <div>

                      <div className="font-semibold text-gray-900">
                        {testimonial.client}
                      </div>

                      <div className="text-sm text-gray-500">
                        {testimonial.position}
                      </div>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

          {/* Dynamic Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">

            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  scrollToTestimonial(index)
                }
                aria-label={`Go to testimonial ${
                  index + 1
                }`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? "w-6 bg-[#4a9d2e]"
                    : "w-2 bg-gray-300 hover:bg-[#4a9d2e]/50"
                }`}
              />
            ))}

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#4a9d2e] to-[#3a7d1e] relative overflow-hidden">

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-4xl md:text-6xl mb-6 text-white font-bold">
              Ready to start{" "}
              <span className="italic">
                your project?
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's create something extraordinary together
            </p>

            <a
              href="/contact"
              className="bg-white text-[#4a9d2e] px-10 py-5 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-block text-lg font-semibold shadow-xl"
            >
              Get Started
            </a>

          </motion.div>

        </div>

      </section>

    </div>
  );
}