"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface FormState {
  status: "idle" | "sending" | "success" | "error";
  message: string;
}

// EmailJS credentials — public by design (the Public Key is meant to be exposed
// to the browser). Falls back to hardcoded values so the form works on Vercel
// without any env vars configured.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_jutuoen";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_r6alk9h";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "HWy2KOH7D9oDWASFb";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation.
    if (!name.trim() || !email.trim() || !message.trim()) {
      setState({ status: "error", message: "Please fill in your name, email and message." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setState({ status: "error", message: "Please enter a valid email address." });
      return;
    }

    // EmailJS isn't configured yet — give a clear message instead of a
    // generic network error.
    if (!configured) {
      setState({
        status: "error",
        message:
          "Email isn't configured yet. Add the three NEXT_PUBLIC_EMAILJS_* vars to your .env.local and restart the dev server.",
      });
      return;
    }

    setState({ status: "sending", message: "" });

    try {
      await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        {
          from_name: name,
          reply_to: email,
          subject: subject || "New message from your portfolio",
          message,
          to_name: "Vimal",
        },
        PUBLIC_KEY
      );
      setState({
        status: "success",
        message: "Message sent! I'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setState({
        status: "error",
        message: "Something went wrong sending your message. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-medium text-muted mb-1.5">
            Your Name
          </label>
          <input
            id="cf-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.06] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs font-medium text-muted mb-1.5">
            Your Email
          </label>
          <input
            id="cf-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.06] transition-colors"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="cf-subject" className="block text-xs font-medium text-muted mb-1.5">
          Subject <span className="text-muted/50">(optional)</span>
        </label>
        <input
          id="cf-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Project inquiry, job opportunity, collaboration…"
          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.06] transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="block text-xs font-medium text-muted mb-1.5">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project or opportunity…"
          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.06] transition-colors resize-none"
        />
      </div>

      {/* Status / Send */}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
        >
          {state.status === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>

        {state.message && (
          <span
            className={`flex items-center gap-1.5 text-sm ${
              state.status === "success"
                ? "text-emerald-400"
                : state.status === "error"
                ? "text-red-400"
                : "text-muted"
            }`}
          >
            {state.status === "success" ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            {state.message}
          </span>
        )}
      </div>

      {/* Not configured note (visible only during local dev / before EmailJS is set up) */}
      {!configured && state.status === "idle" && (
        <p className="text-xs text-muted/70">
          Email sending isn&apos;t configured yet. Set the EmailJS env vars to enable
          the form (see README / .env.example).
        </p>
      )}
    </form>
  );
}