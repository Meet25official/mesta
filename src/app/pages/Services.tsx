import { motion } from "motion/react";
import {
  Code2,
  Palette,
  ShoppingCart,
  Megaphone,
  Search,
  Zap,
  ArrowRight,
  FileText,
  Rocket,
  Check,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Responsive Website Development",
      description:
        "We design and develop modern, responsive websites that look professional on every device and help businesses build credibility and generate more enquiries.",
      features: [
        "Responsive Design",
        "SEO-Friendly Structure",
        "Fast Performance",
        "Mobile Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzM5NjMwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },

    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Web Application Development",
      description:
        "We build modern and scalable web applications tailored to your business requirements, workflows and users.",
      features: [
        "Custom Web Applications",
        "Modern Frontend",
        "Secure Backend",
        "Scalable Architecture",
      ],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1080&q=80",
    },

    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description:
        "We create clean, intuitive and user-focused designs that make digital products easier to use and deliver better user experiences.",
      features: [
        "User-Centered Design",
        "Wireframing",
        "Modern UI Design",
        "Responsive Interfaces",
      ],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1080&q=80",
    },

    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-Commerce Solutions",
      description:
        "We build professional e-commerce experiences that help businesses showcase products, manage online sales and reach more customers.",
      features: [
        "Product Catalog",
        "Shopping Experience",
        "Mobile-Friendly Design",
        "Online Order Management",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1080&q=80",
    },

    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Digital Marketing",
      description:
        "We help businesses strengthen their online presence with practical digital marketing strategies focused on visibility, engagement and growth.",
      features: [
        "Social Media Marketing",
        "Content Strategy",
        "Campaign Planning",
        "Audience Growth",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80",
    },

    {
      icon: <Search className="w-10 h-10" />,
      title: "SEO Optimization",
      description:
        "We optimize websites for search engines to improve online visibility, attract relevant traffic and help businesses reach potential customers.",
      features: [
        "On-Page SEO",
        "Technical SEO",
        "Keyword Optimization",
        "SEO-Friendly Content",
      ],
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1080&q=80",
    },

    {
      icon: <Zap className="w-10 h-10" />,
      title: "Mini Automation",
      description:
        "We create lightweight automation solutions that reduce repetitive tasks, simplify business workflows and save valuable time.",
      features: [
        "Workflow Automation",
        "Form Automation",
        "Notifications",
        "Process Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1080&q=80",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#4a9d2e]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#4a9d2e]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-[#4a9d2e]/10 rounded-full">
              <span className="text-[#4a9d2e] font-semibold text-sm">
                Premium Services
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 font-bold leading-tight">
              Digital Solutions Built for{" "}
              <span className="italic text-[#4a9d2e]">Modern Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              MESTA provides responsive website development, UI/UX design, digital marketing and mini automation solutions designed to help businesses work smarter and grow online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#4a9d2e]/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Banner Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#4a9d2e] shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-700 flex items-center gap-3"
                      >
                        <div className="w-5 h-5 bg-[#4a9d2e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#4a9d2e]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-10 w-72 h-72 bg-[#4a9d2e]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#4a9d2e]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-4 font-bold">
              Our <span className="italic text-[#4a9d2e]">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: <Search className="w-7 h-7" />,
                title: "Discovery",
                description:
                  "We understand your business, audience, goals and the problem you want to solve.",
                features: [
                  "Initial consultation",
                  "Requirements gathering",
                  "Market research",
                  "Competitor analysis",
                ],
              },
              {
                step: "02",
                icon: <FileText className="w-7 h-7" />,
                title: "Planning",
                description:
                  "We define the right strategy, structure and execution plan before development begins.",
                features: [
                  "Project timeline",
                  "Resource allocation",
                  "Tech stack selection",
                  "Design mockups",
                ],
              },
              {
                step: "03",
                icon: <Code2 className="w-7 h-7" />,
                title: "Development",
                description:
                  "We design and develop the solution with a focus on usability, performance and scalability.",
                features: [
                  "Sprint cycles",
                  "Code reviews",
                  "Continuous integration",
                  "Weekly demos",
                ],
              },
              {
                step: "04",
                icon: <Rocket className="w-7 h-7" />,
                title: "Launch & Support",
                description:
                  "We launch, measure results and make improvements that support long-term growth.",
                features: [
                  "Production deployment",
                  "Performance monitoring",
                  "Bug fixes",
                  "Feature updates",
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                {/* Content Card */}
                <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#4a9d2e]/10 hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4a9d2e] to-[#3a7d1e] text-white mb-6 shadow-lg">
                    {phase.icon}
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-bold text-[#4a9d2e] tracking-wider">
                      STEP {phase.step}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {phase.description}
                  </p>

                  <ul className="space-y-3">
                    {phase.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-700 flex items-start gap-3"
                      >
                        <div className="w-5 h-5 bg-[#4a9d2e]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#4a9d2e]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow - Desktop */}
                {index < 3 && (
                  <div className="hidden lg:flex absolute top-20 -right-4 z-20 items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-200 shadow-sm">
                    <ArrowRight className="w-4 h-4 text-[#4a9d2e]" />
                  </div>
                )}
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
              Let's discuss <span className="italic">your project</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule a free consultation to explore how we can help bring your
              vision to life
            </p>
            <a
              href="/contact"
              className="bg-white text-[#4a9d2e] px-10 py-5 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-block text-lg font-semibold shadow-xl"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
