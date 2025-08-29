"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./magicui/border-beam";
import SidebarCard from "./ContactUs/SidebarCard";

export default function SignupFormDemo() {
  const formRef = useRef<HTMLFormElement>(null);

  // Loading, success, error state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await emailjs.sendForm(
        "service_442k6r3",     // Your Service ID
        "template_11ciokw",    // Your Template ID
        formRef.current,
        "81H-paFwAEGNQSEKu"    // Your Public Key
      );
      setSuccess("Your message has been sent successfully!");
      formRef.current.reset(); // reset form
    } catch (err) {
      console.error(err);
      setError("Failed to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8">
      {/* Form container */}
      <div className="relative shadow-input border overflow-hidden mx-auto w-full max-w-md rounded-xl bg-white p-6 md:p-8 dark:bg-black">
        <BorderBeam duration={8} size={80} />
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Connect Us</h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Let's stay in touch — drop your details or message me directly through this form.
        </p>

        <form ref={formRef} className="my-8" onSubmit={sendEmail}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" name="firstname" placeholder="Your Name" type="text" required />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" name="lastname" placeholder="Last Name" type="text" required />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" placeholder="example@domain.com" type="email" required />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Subject of your message" type="text" required />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={4}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm dark:border-gray-700 dark:bg-zinc-900 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </LabelInputContainer>

          <button
            type="submit"
            disabled={loading}
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-md dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message →"}
            <BottomGradient />
          </button>

          {success && <p className="mt-4 text-green-600 dark:text-green-400 font-medium">{success}</p>}
          {error && <p className="mt-4 text-red-600 dark:text-red-400 font-medium">{error}</p>}

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </form>
      </div>

      <SidebarCard />
    </div>
  );
}

// Decorative bottom gradient for the button
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
