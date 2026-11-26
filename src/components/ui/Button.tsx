"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:from-violet-500 hover:to-indigo-500 border border-violet-400/20",
    secondary:
      "bg-[#151519] text-[#F4F4F5] border border-white/10 hover:border-violet-500/40 hover:bg-[#1C1C22] shadow-sm",
    outline:
      "bg-transparent text-[#F4F4F5] border border-white/20 hover:border-white/50 hover:bg-white/5",
    ghost:
      "bg-transparent text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-white/5",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
      {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    const handleAnchorClick = props.onClick
      ? (e: React.MouseEvent<HTMLAnchorElement>) => {
          (props.onClick as React.MouseEventHandler<HTMLButtonElement>)(
            e as unknown as React.MouseEvent<HTMLButtonElement>
          );
        }
      : undefined;

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          onClick={handleAnchorClick}
          aria-label={props["aria-label"]}
          title={props.title}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={handleAnchorClick}
        aria-label={props["aria-label"]}
        title={props.title}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
