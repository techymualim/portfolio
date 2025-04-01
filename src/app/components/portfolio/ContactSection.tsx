import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, GitHub, Linkedin } from 'react-feather';
import { SectionTitle, GlassCard, staggerContainer, fadeInUp, tapEffect } from './SharedComponents';

interface ContactSectionProps {
  userEmail: string;
  userLocation: string;
  GitHubUrl: string;
  linkedinUrl: string;
  theme: 'light' | 'dark';
}

export const ContactSection = ({
  userEmail,
  userLocation,
  GitHubUrl,
  linkedinUrl,
  theme,
}: ContactSectionProps) => {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <SectionTitle title="Get in Touch" id="contact-title" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-6">
          <GlassCard className="p-6" theme={theme}>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Contact Info
            </h3>
            <div className="space-y-4 text-sm">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: userEmail,
                  href: `mailto:${userEmail}`,
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: userLocation,
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-accent-primary dark:text-accent-lightBlue mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-gray-700 dark:text-gray-100 hover:text-accent-primary dark:hover:text-accent-lightBlue break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-700 dark:text-gray-100">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="p-6" theme={theme}>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Connect
            </h3>
            <div className="flex space-x-3">
              {[
                { url: GitHubUrl, icon: GitHub },
                { url: linkedinUrl, icon: Linkedin },
              ].map(
                (item) =>
                  item.url && (
                    <motion.a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-white/5 p-3 rounded-lg text-gray-500 dark:text-gray-400 hover:text-accent-primary dark:hover:text-accent-lightBlue hover:bg-gray-200 dark:hover:bg-white/10 transition-all border border-gray-200 dark:border-white/10"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={tapEffect}
                    >
                      <item.icon size={18} />
                    </motion.a>
                  )
              )}
            </div>
          </GlassCard>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <GlassCard className="p-8" theme={theme}>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Send a Message
            </h3>
            <form action="#" method="POST" className="space-y-5">
              {[
                { id: 'name', label: 'Name', type: 'text' },
                { id: 'email', label: 'Email', type: 'email' },
              ].map((input) => (
                <div key={input.id}>
                  <label
                    htmlFor={input.id}
                    className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1"
                  >
                    {input.label}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, y: -1 }}
                    type={input.type}
                    id={input.id}
                    name={input.id}
                    required
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-black/10 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 text-sm text-gray-900 dark:text-white backdrop-blur-sm transition-colors duration-200"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, y: -1 }}
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-black/10 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 text-sm text-gray-900 dark:text-white backdrop-blur-sm transition-colors duration-200"
                ></motion.textarea>
              </div>
              <motion.button
                type="submit"
                className="relative overflow-hidden bg-accent-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-royalBlue transition-colors shadow-md shadow-accent-primary/20 w-full flex items-center justify-center gap-2 text-sm"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                  },
                }}
                whileTap={tapEffect}
              >
                <span className="relative z-10">Send Message</span>
                <Send size={16} className="relative z-10" />
              </motion.button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </motion.section>
  );
}; 