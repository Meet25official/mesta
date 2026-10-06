import { motion } from "motion/react";
import {
  Target,
  Lightbulb,
  Award,
  TrendingUp,
} from "lucide-react";
export function About() {
  const team = [
  {
    name: "Meet Sarvaiya",
    role: "Founder & Full Stack Developer",
    bio: "Meet Sarvaiya is the founder of MESTA, a digital solutions company focused on responsive website development, UI/UX design, digital marketing, SEO and mini automation. With 1+ year of hands-on experience and 5+ projects delivered, he focuses on building practical digital experiences for modern businesses.",
    image: "/meet-sarvaiya.jpeg",
  },
];

  const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Business First",
    description:
      "We start with your business goals, audience and challenges to create digital solutions that deliver real value.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Simple & Effective",
    description:
      "We keep our websites, digital experiences and automation solutions practical, clear and easy to use.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Quality Focused",
    description:
      "From responsive web design to development and SEO, we focus on performance, usability and attention to detail.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Built to Grow",
    description:
      "We create scalable digital solutions that help businesses strengthen their online presence and grow over time.",
  },
];

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
              About <span className="italic text-[#4a9d2e]">MESTA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              MESTA is a digital solutions company focused on helping businesses build a stronger online presence through modern websites, UI/UX design, digital marketing and smart automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
<section className="pb-32">
  <div className="max-w-5xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12"
    >

      {/* Heading */}
      <div className="mb-14">
        <h2 className="text-3xl md:text-4xl mb-4">
          Our{" "}
          <span className="italic text-[#4a9d2e]">
            Story
          </span>
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl">
          MESTA started with a simple vision — to help businesses
          build a stronger digital presence through modern,
          practical and business-focused digital solutions.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-300" />

        <div className="space-y-12">

          {/* 2026 - Beginning */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-12"
          >
            {/* Dot */}
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#4a9d2e] flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>

            <span className="text-sm font-semibold text-[#4a9d2e] uppercase tracking-wider">
              2026
            </span>

            <h3 className="text-2xl font-semibold text-gray-900 mt-2 mb-3">
              The Beginning
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              MESTA officially started in 2026 with a clear goal:
              to create modern and practical digital solutions
              that help businesses establish a strong online
              presence.
            </p>
          </motion.div>

          {/* 2026 - First Projects */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative pl-12"
          >
            {/* Dot */}
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#4a9d2e] flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>

            <span className="text-sm font-semibold text-[#4a9d2e] uppercase tracking-wider">
              2026
            </span>

            <h3 className="text-2xl font-semibold text-gray-900 mt-2 mb-3">
              Building Real Projects
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              We started turning ideas into real digital products,
              working on responsive websites, web applications
              and user-focused digital experiences.
            </p>
          </motion.div>

          {/* 2026 - Expanding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative pl-12"
          >
            {/* Dot */}
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#4a9d2e] flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>

            <span className="text-sm font-semibold text-[#4a9d2e] uppercase tracking-wider">
              2026
            </span>

            <h3 className="text-2xl font-semibold text-gray-900 mt-2 mb-3">
              Expanding Our Capabilities
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              As we continued growing, MESTA expanded its focus
              across UI/UX design, e-commerce solutions, SEO,
              digital marketing and mini automation.
            </p>
          </motion.div>

          {/* Present */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative pl-12"
          >
            {/* Active Dot */}
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#c4ff61] border-4 border-[#4a9d2e] flex items-center justify-center">
              <div className="w-2 h-2 bg-[#4a9d2e] rounded-full" />
            </div>

            <span className="text-sm font-semibold text-[#4a9d2e] uppercase tracking-wider">
              Today
            </span>

            <h3 className="text-2xl font-semibold text-gray-900 mt-2 mb-3">
              MESTA Today
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              Today, MESTA is focused on helping businesses build
              better digital experiences through technology,
              design and practical digital solutions.
            </p>
          </motion.div>

          {/* Future */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative pl-12"
          >
            {/* Dot */}
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full" />
            </div>

            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              The Road Ahead
            </span>

            <h3 className="text-2xl font-semibold text-gray-900 mt-2 mb-3">
              Building What's Next
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our journey has just started. We continue to learn,
              build and improve with every project while working
              towards creating meaningful digital solutions for
              businesses.
            </p>
          </motion.div>

        </div>
      </div>

    </motion.div>
  </div>
</section>

      {/* Values Section */}
<section className="py-32 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl mb-4">
        What <span className="italic text-[#4a9d2e]">Drives MESTA</span>
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We combine design, technology and business thinking to create
        digital solutions that help businesses build a stronger online
        presence, improve customer experiences and grow.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="text-[#4a9d2e] mb-4">
            {value.icon}
          </div>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            {value.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Team Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Meet the <span className="italic text-[#4a9d2e]">Founder</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              MESTA is founded by Meet Sarvaiya, a Full Stack Developer focused on building modern digital experiences, responsive websites and practical technology solutions for businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                </div>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-[#4a9d2e] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1+", label: "Years in Business" },
              { number: "5+", label: "Projects Completed" },
              { number: "5+", label: "Happy Clients" },
              { number: "2+", label: "Team Members" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#4a9d2e] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#4a9d2e] to-[#3a7d1e] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6 text-white font-bold">
              Want to <span className="italic">join us?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're always looking for talented people to join our team
            </p>
            <a
              href="/contact"
              className="bg-white text-[#4a9d2e] px-10 py-5 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-block text-lg font-semibold shadow-xl"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
