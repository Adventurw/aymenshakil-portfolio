"use client";

import { motion } from "framer-motion";

import { sectionReveal } from "@/lib/animations";
import { contactSection } from "@/constants/contact";

import SectionHeading from "@/components/shared/SectionHeading";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactContent() {
  return (
    <motion.div
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionHeading
        eyebrow={contactSection.eyebrow}
        title={contactSection.title}
        description={contactSection.description}
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[420px_1fr]">

        <ContactInfo />

        <ContactCard className="p-8">
          <h3 className="mb-8 text-2xl font-semibold">
            Send Me a Message
          </h3>

          <ContactForm />
        </ContactCard>

      </div>
    </motion.div>
  );
}