"use client";

import Link from "next/link";

import { contactInfo } from "@/constants/contact";
import { portfolio } from "@/constants/portfolio";

import { Icons } from "@/components/ui/icons";

import ContactCard from "./ContactCard";

export default function ContactInfo() {
  return (
    <ContactCard className="flex h-full flex-col p-8">

      <div>
        <h3 className="text-2xl font-semibold">
          Contact Information
        </h3>

        <p className="mt-3 text-muted-foreground">
          I'm always interested in discussing software engineering,
          frontend development, software quality assurance,
          and Information Systems Audit opportunities.
        </p>
      </div>

      <div className="mt-10 space-y-6">

        {contactInfo.map((item) => {

          const Icon = Icons[item.icon];

          return (
            <Link
              key={item.title}
              href={item.href ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-start
                gap-4
                rounded-xl
                border
                p-4
                transition-all
                hover:border-primary
                hover:bg-primary/5
              "
            >
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Icon size={20} />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  {item.title}
                </p>

                <p className="font-medium">
                  {item.value}
                </p>
              </div>
            </Link>
          );
        })}

      </div>

      <div className="mt-10 rounded-2xl border bg-primary/5 p-5">

        <h4 className="font-semibold">
          Availability
        </h4>

        <p className="mt-2 text-sm text-muted-foreground">
          Currently available for internships,
          graduate roles, freelance projects,
          and collaboration opportunities.
        </p>

      </div>

      <div className="mt-10">

        <p className="mb-4 font-medium">
          Follow Me
        </p>

        <div className="flex gap-4">

          <Link
            href={portfolio.personal.github}
            target="_blank"
            className="
              rounded-full
              border
              p-3
              transition-all
              hover:-translate-y-1
              hover:border-primary
            "
          >
            <Icons.github size={22} />
          </Link>

          <Link
            href={portfolio.personal.linkedin}
            target="_blank"
            className="
              rounded-full
              border
              p-3
              transition-all
              hover:-translate-y-1
              hover:border-primary
            "
          >
            <Icons.linkedin size={22} />
          </Link>

          <Link
            href={`mailto:${portfolio.personal.email}`}
            className="
              rounded-full
              border
              p-3
              transition-all
              hover:-translate-y-1
              hover:border-primary
            "
          >
            <Icons.mail size={22} />
          </Link>

        </div>

      </div>

    </ContactCard>
  );
}