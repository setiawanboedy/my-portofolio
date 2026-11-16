"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactInfoItem } from "@/types";
import Link from "next/link";

const info: ContactInfoItem[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 81 946 358 409",
    href: "tel:+6281946358409",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    description: "(+62) 81 946 358 409",
    href: "https://wa.me/6281946358409",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "budisetiawan.dev@gmail.com",
    href: "mailto:budisetiawan.dev@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Lombok, NTB, Indonesia",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 xl:py-24"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] items-center justify-between">
          {/* text & quick actions */}
          <div className="flex-1 flex flex-col gap-6 text-center xl:text-left">
            <span className="text-accent text-lg font-medium uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
              Let&apos;s build something <span className="text-accent">great together</span>.
            </h2>
            <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">
              Feel free to reach out for project inquiries, freelance opportunities, collaboration, or just to say hello.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start pt-4">
              <a
                href="mailto:budisetiawan.dev@gmail.com"
                className="inline-block"
              >
                <Button size="lg" className="flex items-center gap-2 w-full sm:w-auto">
                  <FaEnvelope className="text-lg" />
                  <span>Send an Email</span>
                </Button>
              </a>
              <a
                href="https://wa.me/6281946358409"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2 w-full sm:w-auto hover:bg-accent hover:text-primary"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>

          {/* info cards */}
          <div className="flex-1 w-full max-w-[580px]">
            <ul className="flex flex-col gap-6 bg-[#27272c] p-8 xl:p-10 rounded-2xl border border-white/10">
              {info.map((item, index) => {
                const content = (
                  <div className="flex items-center gap-6 group">
                    <div className="w-[52px] h-[52px] xl:w-[68px] xl:h-[68px] bg-[#1f1f23] text-accent rounded-xl flex items-center justify-center text-[24px] xl:text-[28px] group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-white/60 text-sm font-light">
                        {item.title}
                      </p>
                      <h3 className="text-lg xl:text-xl font-medium text-white group-hover:text-accent transition-colors">
                        {item.description}
                      </h3>
                    </div>
                  </div>
                );

                return (
                  <li
                    key={index}
                    className="border-b border-white/10 last:border-none pb-6 last:pb-0"
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
