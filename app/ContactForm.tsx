"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvkpyqzn";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start justify-center rounded-sm border border-ivory/20 p-8 sm:col-span-2">
        <p className="font-display text-xl text-ivory">Thank you.</p>
        <p className="mt-2 font-body text-sm leading-relaxed text-ivory/70">
          Your message has been sent. A dedicated agent will follow up within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
    >
      <input
        type="text"
        name="name"
        placeholder="Full name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-0 border-b border-white/25 bg-transparent px-0 py-4 font-body text-sm text-white placeholder:text-white/45 focus:border-gold"
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-0 border-b border-white/25 bg-transparent px-0 py-4 font-body text-sm text-white placeholder:text-white/45 focus:border-gold"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border-0 border-b border-white/25 bg-transparent px-0 py-4 font-body text-sm text-white placeholder:text-white/45 focus:border-gold sm:col-span-2"
      />
      <textarea
        name="message"
        placeholder="What are you looking to do?"
        rows={4}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border-0 border-b border-white/25 bg-transparent px-0 py-4 font-body text-sm text-white placeholder:text-white/45 focus:border-gold sm:col-span-2"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-light mt-2 disabled:opacity-60 sm:col-span-2 sm:w-fit"
      >
        {status === "submitting" ? "Sending…" : "Request a visit"} <span>↗</span>
      </button>
      {status === "error" && (
        <p className="font-body text-sm text-accent-light sm:col-span-2">
          Something went wrong. Please try again, or email us directly at
          atlantisbuildcon@gmail.com.
        </p>
      )}
    </form>
  );
}
