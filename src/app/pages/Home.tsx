import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";

export function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden -mt-20 pt-20">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlJTIwb2ZmaWNlfGVufDF8fHx8MTc3NzUwNDIyNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Software development office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl leading-tight">
                <span className="text-white">We build</span>{" "}
                <span className="italic text-[#c4ff61]">Digital</span>
                <br />
                <span className="text-white">Experiences That Grow</span>
                <br />
                <span className="text-white">Your Business.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
                MESTA helps businesses build a stronger digital presence through responsive websites, UI/UX design, digital marketing and smart automation solutions. We turn ideas into modern digital experiences that are built to perform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-[#c4ff61] text-[#0a1f1a] px-8 py-4 rounded-full hover:bg-[#b5f052] transition-all hover:scale-105 inline-flex items-center gap-2 font-semibold"
                >
                  Start Your Project
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/work"
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
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
              What we <span className="italic text-[#4a9d2e]">Build</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From strategy and design to development and growth, MESTA builds practical digital solutions for modern businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Responsive Website Development",
                description: "Fast, responsive and SEO-friendly websites designed to represent your business professionally and convert visitors into customers.",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "UI/UX Design",
                description: "Clean, intuitive and user-focused UI/UX designs that create better digital experiences across websites and applications.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Digital Marketing & Automation",
                description: "Digital marketing strategies and smart mini automation solutions that help businesses save time, reach more customers and grow online.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#4a9d2e]/50 transition-all group"
              >
                <div className="text-[#4a9d2e] mb-4 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#4a9d2e] hover:gap-4 transition-all"
            >
              Explore all services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Projects Delivered" },
              { number: "5+", label: "Happy Clients" },
              { number: "1+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
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
              Ready to Build Your Digital <span className="italic">Presence?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Tell us about your business, idea or digital challenge. MESTA will help you turn it into a practical digital solution.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#4a9d2e] px-10 py-5 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center gap-2 text-lg font-semibold shadow-xl"
            >
              Let's Build Together
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}