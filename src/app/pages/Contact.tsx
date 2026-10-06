import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/contact.mesta@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,

            _subject: "New MESTA Website Enquiry",
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        alert(
          "Thank you! Your message has been sent successfully. We will contact you soon."
        );

        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        alert(
          "Unable to send your message. Please try again or contact us on WhatsApp."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      alert(
        "Something went wrong. Please try again or contact us on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              Let's Build{" "}
              <span className="italic text-[#4a9d2e]">
                Something Together
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600">
              Have a website, design, SEO, digital marketing or automation
              idea? Tell MESTA what you need and let's create a digital
              solution that works for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-8">
                Get in{" "}
                <span className="italic text-[#4a9d2e]">
                  Touch
                </span>
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="bg-[#c4ff61] text-[#0a1f1a] p-3 rounded-full h-fit">
                    <Mail size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl mb-2">Email</h3>

                    <a
                      href="mailto:contact.mesta@gmail.com"
                      className="text-gray-600 hover:text-[#4a9d2e] transition-colors"
                    >
                      contact.mesta@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <div className="flex gap-4">
                  <div className="bg-[#c4ff61] text-[#0a1f1a] p-3 rounded-full h-fit">
                    <Phone size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl mb-2">WhatsApp</h3>

                    <a
                      href="https://wa.me/919313394171"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#4a9d2e] transition-colors"
                    >
                      +91 93133 94171
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="bg-[#c4ff61] text-[#0a1f1a] p-3 rounded-full h-fit">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl mb-2">Address</h3>

                    <p className="text-gray-600">
                      Gandhinagar, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2"
                    >
                      Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4a9d2e] transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2"
                    >
                      Email *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4a9d2e] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm mb-2"
                    >
                      Company
                    </label>

                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4a9d2e] transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm mb-2"
                    >
                      Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4a9d2e] transition-colors resize-none"
                      placeholder="Tell us about your website, design, SEO, marketing or automation project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#c4ff61] text-[#0a1f1a] px-8 py-4 rounded-full hover:bg-[#b5f052] transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}

                    <Send size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Frequently Asked{" "}
              <span className="italic text-[#4a9d2e]">
                Questions
              </span>
            </h2>

            <p className="text-xl text-gray-600">
              Everything you need to know about working with MESTA
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What services does MESTA provide?",
                answer:
                  "MESTA provides responsive website development, web application development, UI/UX design, e-commerce solutions, digital marketing, SEO optimization and mini automation for modern businesses.",
              },
              {
                question: "How can I start a project with MESTA?",
                answer:
                  "You can contact MESTA through the contact form, email or WhatsApp. Share your requirements and project goals, and we will discuss the right digital solution for your business.",
              },
              {
                question: "Does MESTA build responsive websites?",
                answer:
                  "Yes. MESTA creates modern responsive websites optimized for desktop, tablet and mobile devices with a focus on performance, usability and SEO-friendly structure.",
              },
              {
                question: "Do you provide SEO and digital marketing?",
                answer:
                  "Yes. MESTA provides SEO optimization and digital marketing solutions designed to improve online visibility, reach relevant audiences and support business growth.",
              },
              {
                question: "Do you provide UI/UX design?",
                answer:
                  "Yes. MESTA creates clean, intuitive and responsive UI/UX designs focused on usability, visual hierarchy and better customer experiences.",
              },
              {
                question: "Can MESTA help with business automation?",
                answer:
                  "Yes. MESTA provides mini automation solutions that help businesses simplify repetitive tasks, improve workflows and save time.",
              },
              {
                question: "Where is MESTA based?",
                answer:
                  "MESTA is based in Gandhinagar, Gujarat, India and works with businesses looking for modern digital solutions.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                }}
                className="bg-white border border-gray-200 rounded-2xl p-8"
              >
                <h3 className="text-xl mb-3 text-[#4a9d2e]">
                  {faq.question}
                </h3>

                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}