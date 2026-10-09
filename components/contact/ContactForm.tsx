"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-10"
    >
      {/* HONEYPOT */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* NAME */}
      <div>
        <label
          htmlFor="name"
          className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#6F6B64]"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
          className="w-full border-b border-[#BDB7AD] bg-transparent px-0 py-4 text-lg font-light outline-none transition-colors placeholder:text-[#A29D95] focus:border-[#171715]"
        />

        {state.errors?.name && (
          <p className="mt-2 text-sm text-red-700">
            {state.errors.name}
          </p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="email"
          className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#6F6B64]"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          className="w-full border-b border-[#BDB7AD] bg-transparent px-0 py-4 text-lg font-light outline-none transition-colors placeholder:text-[#A29D95] focus:border-[#171715]"
        />

        {state.errors?.email && (
          <p className="mt-2 text-sm text-red-700">
            {state.errors.email}
          </p>
        )}
      </div>

      {/* PHONE */}
      <div>
        <label
          htmlFor="phone"
          className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#6F6B64]"
        >
          Phone
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91"
          className="w-full border-b border-[#BDB7AD] bg-transparent px-0 py-4 text-lg font-light outline-none transition-colors placeholder:text-[#A29D95] focus:border-[#171715]"
        />

        {state.errors?.phone && (
          <p className="mt-2 text-sm text-red-700">
            {state.errors.phone}
          </p>
        )}
      </div>

      {/* PROJECT TYPE */}
      <div>
        <label
          htmlFor="projectType"
          className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#6F6B64]"
        >
          Project type
        </label>

        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          required
          className="w-full appearance-none border-b border-[#BDB7AD] bg-transparent px-0 py-4 text-lg font-light outline-none focus:border-[#171715]"
        >
          <option value="" disabled>
            Select project type
          </option>

          <option value="Residential Interior">
            Residential Interior
          </option>

          <option value="Hospitality">
            Hospitality
          </option>

          <option value="Commercial">
            Commercial
          </option>

          <option value="Workplace">
            Workplace
          </option>

          <option value="Furniture & Joinery">
            Furniture &amp; Joinery
          </option>

          <option value="Styling & Art Direction">
            Styling &amp; Art Direction
          </option>

          <option value="Other">
            Other
          </option>
        </select>

        {state.errors?.projectType && (
          <p className="mt-2 text-sm text-red-700">
            {state.errors.projectType}
          </p>
        )}
      </div>

      {/* LOCATION */}
      <div>
        <label
          htmlFor="location"
          className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#6F6B64]"
        >
          Project location
        </label>

        <input
          id="location"
          name="location"
          type="text"
          placeholder="City / Country"
          className="w-full border-b border-[#BDB7AD] bg-transparent px-0 py-4 text-lg font-light outline-none transition-colors placeholder:text-[#A29D95] focus:border-[#171715]"
        />

        {state.errors?.location && (
          <p className="mt-2 text-sm text-red-700">
            {state.errors.location}
          </p>
        )}
      </div>

      {/* BUDGET */}
      <div>
        <label
          htmlFor="budget"
          className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#6F6B64]"
        >
          Estimated budget
        </label>

        <select
          id="budget"
          name="budget"
          defaultValue=""
          className="w-full appearance-none border-b border-[#BDB7AD] bg-transparent px-0 py-4 text-lg font-light outline-none focus:border-[#171715]"
        >
          <option value="" disabled>
            Select a range
          </option>

          <option value="Under ₹25 Lakhs">
            Under ₹25 Lakhs
          </option>

          <option value="₹25–50 Lakhs">
            ₹25–50 Lakhs
          </option>

          <option value="₹50 Lakhs–₹1 Crore">
            ₹50 Lakhs–₹1 Crore
          </option>

          <option value="₹1 Crore+">
            ₹1 Crore+
          </option>

          <option value="Not decided yet">
            Not decided yet
          </option>
        </select>

        {state.errors?.budget && (
          <p className="mt-2 text-sm text-red-700">
            {state.errors.budget}
          </p>
        )}
      </div>

      {/* MESSAGE */}
      <div>
        <label
          htmlFor="message"
          className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#6F6B64]"
        >
          Tell us about your project
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about the space, your requirements, timeline and anything else you would like us to know."
          required
          className="w-full resize-none border-b border-[#BDB7AD] bg-transparent px-0 py-4 text-lg font-light leading-8 outline-none transition-colors placeholder:text-[#A29D95] focus:border-[#171715]"
        />

        {state.errors?.message && (
          <p className="mt-2 text-sm text-red-700">
            {state.errors.message}
          </p>
        )}
      </div>

      {/* SUCCESS */}
      {state.success && (
        <div
          role="status"
          className="flex gap-4 border border-[#C9C3B8] bg-[#E8E3DA] p-5"
        >
          <CheckCircle2
            size={21}
            strokeWidth={1.2}
            className="mt-0.5 shrink-0"
          />

          <div>
            <p className="text-sm font-medium">
              Enquiry received
            </p>

            <p className="mt-1 text-sm leading-6 text-[#6F6B64]">
              {state.message}
            </p>
          </div>
        </div>
      )}

      {/* ERROR */}
      {!state.success && state.message && (
        <div
          role="alert"
          className="border border-red-200 bg-red-50 p-5"
        >
          <p className="text-sm leading-6 text-red-800">
            {state.message}
          </p>
        </div>
      )}

      {/* SUBMIT */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="group inline-flex items-center gap-4 border-b border-[#171715] pb-3 text-sm uppercase tracking-[0.2em] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Sending enquiry..." : "Send enquiry"}

          {!isPending && (
            <ArrowUpRight
              size={18}
              strokeWidth={1.2}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          )}
        </button>
      </div>
    </form>
  );
}