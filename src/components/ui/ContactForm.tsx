"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormData } from "@/types";
import { Button } from "./Button";
import { CheckCircle2, AlertCircle, Send, RotateCcw } from "lucide-react";

const projectTypeOptions = [
  "SaaS & Web Application",
  "Backend & API Development",
  "CRM & Operations Portal",
  "Mobile Application (iOS/Android)",
  "Architecture Consultation / Other",
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Flexible / Not Fixed",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      projectType: projectTypeOptions[0],
      budget: budgetOptions[1],
      projectDetails: "",
      _gotcha: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus("success");
        setStatusMessage(result.message || "Thank you! Your message has been sent successfully.");
        reset();
      } else {
        setSubmissionStatus("error");
        setStatusMessage(result.error || "Failed to submit message. Please try again or reach out directly via email.");
      }
    } catch {
      setSubmissionStatus("error");
      setStatusMessage("Network error encountered. Please check your connection or contact me via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative rounded-2xl bg-[#151519] border border-white/10 p-6 sm:p-8 shadow-xl">
      {submissionStatus === "success" ? (
        <div className="py-12 px-4 text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-[#F4F4F5] mb-2">Message Sent!</h3>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md mb-6 leading-relaxed">
            {statusMessage}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSubmissionStatus("idle")}
            leftIcon={<RotateCcw className="w-4 h-4" />}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          {submissionStatus === "error" && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-300 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Honeypot for spam protection */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("_gotcha")}
            />
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-mono font-medium text-[#D4D4D8] mb-1.5 uppercase">
                Full Name <span className="text-violet-400">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Alex Morgan"
                className={`w-full px-4 py-2.5 rounded-lg bg-[#111114] border ${
                  errors.fullName ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-violet-500"
                } text-[#F4F4F5] text-sm placeholder-[#71717A] focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors`}
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono font-medium text-[#D4D4D8] mb-1.5 uppercase">
                Email Address <span className="text-violet-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="alex@company.com"
                className={`w-full px-4 py-2.5 rounded-lg bg-[#111114] border ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-violet-500"
                } text-[#F4F4F5] text-sm placeholder-[#71717A] focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors`}
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Company & Project Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="company" className="block text-xs font-mono font-medium text-[#D4D4D8] mb-1.5 uppercase">
                Company / Business <span className="text-[#71717A] lowercase">(optional)</span>
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company or Startup name"
                className="w-full px-4 py-2.5 rounded-lg bg-[#111114] border border-white/10 text-[#F4F4F5] text-sm placeholder-[#71717A] focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                {...register("company")}
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-xs font-mono font-medium text-[#D4D4D8] mb-1.5 uppercase">
                Project Category
              </label>
              <select
                id="projectType"
                className="w-full px-4 py-2.5 rounded-lg bg-[#111114] border border-white/10 text-[#F4F4F5] text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors cursor-pointer"
                {...register("projectType")}
              >
                {projectTypeOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#151519] text-[#F4F4F5]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="budget" className="block text-xs font-mono font-medium text-[#D4D4D8] mb-1.5 uppercase">
              Estimated Budget <span className="text-[#71717A] lowercase">(optional)</span>
            </label>
            <select
              id="budget"
              className="w-full px-4 py-2.5 rounded-lg bg-[#111114] border border-white/10 text-[#F4F4F5] text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors cursor-pointer"
              {...register("budget")}
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#151519] text-[#F4F4F5]">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="projectDetails" className="block text-xs font-mono font-medium text-[#D4D4D8] mb-1.5 uppercase">
              Project Details & Objectives <span className="text-violet-400">*</span>
            </label>
            <textarea
              id="projectDetails"
              rows={4}
              placeholder="Tell me about what you are building, key technical requirements, timelines, or challenges you're facing..."
              className={`w-full px-4 py-3 rounded-lg bg-[#111114] border ${
                errors.projectDetails ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-violet-500"
              } text-[#F4F4F5] text-sm placeholder-[#71717A] focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors resize-y min-h-[110px]`}
              {...register("projectDetails", {
                required: "Please provide a short description of your project",
                minLength: {
                  value: 10,
                  message: "Please provide at least 10 characters so I can understand your needs",
                },
              })}
            />
            {errors.projectDetails && (
              <p className="mt-1 text-xs text-red-400">{errors.projectDetails.message}</p>
            )}
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
            >
              {isSubmitting ? "Sending Inquiry..." : "Submit Project Inquiry"}
            </Button>
            <p className="mt-3 text-xs text-[#71717A]">
              No obligation. I typically review requirements and respond within 24 hours.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
