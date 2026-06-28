"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    console.log(form);

    // Later:
    // EmailJS
    // Formspree
    // API Route
    // Supabase Edge Function
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <Input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
      />

      <Input
        name="email"
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
      />

      <Input
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
      />

      <Textarea
        name="message"
        rows={6}
        placeholder="Tell me about your project..."
        value={form.message}
        onChange={handleChange}
      />

      <Button
        type="submit"
        size="lg"
      >
        Send Message
      </Button>
    </form>
  );
}