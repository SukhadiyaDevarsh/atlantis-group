"use client";

import { useState } from "react";

const CONTACT_EMAIL = "atlantisbuildcon@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `New inquiry from ${name || "website contact form"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
    >
      <input
        type="text"
        placeholder="Full name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-sm border border-ivory/20 bg-transparent px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory/40 focus:border-accent"
      />
      <input
        type="email"
        placeholder="Email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-sm border border-ivory/20 bg-transparent px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory/40 focus:border-accent"
      />
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="rounded-sm border border-ivory/20 bg-transparent px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory/40 focus:border-accent sm:col-span-2"
      />
      <textarea
        placeholder="What are you looking to do?"
        rows={4}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-sm border border-ivory/20 bg-transparent px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory/40 focus:border-accent sm:col-span-2"
      />
      <button
        type="submit"
        className="rounded-sm bg-accent px-6 py-3 font-body text-sm text-ink transition hover:bg-accent-light sm:col-span-2 sm:w-fit"
      >
        Send message
      </button>
    </form>
  );
}
