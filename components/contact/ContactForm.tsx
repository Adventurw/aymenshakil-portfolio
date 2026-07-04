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

const [loading, setLoading] = useState(false);

const [status, setStatus] = useState("");
  async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  setLoading(true);
  setStatus("");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } else {

      setStatus("Something went wrong.");
    }

  } catch {

    setStatus("Server error.");

  } finally {

    setLoading(false);
  }
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
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
      {status && (
        <p className="text-sm text-primary">
          {status}
        </p>
      )}
    </form>
  );
}