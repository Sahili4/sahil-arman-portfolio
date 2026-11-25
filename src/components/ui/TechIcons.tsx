import {
  Code2,
  KeyRound,
  GitBranch,
  Webhook,
  Terminal,
  Layers,
  Cpu,
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-5 h-5" }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Crisp custom SVG icons for major tech stacks
  switch (normalized) {
    case "php":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.5 13H6l1.3-6h2.2c1.2 0 2 .7 2 1.8 0 1.5-1.1 2.2-2.3 2.2H8.2l-.7 2zm4.5 0h-1.5l1.3-6h1.5l-1.3 6zm6-2.5c0 1.5-1.1 2.5-2.6 2.5h-2.4l1.3-6h2.2c1.2 0 2.2.7 2.2 1.8 0 .6-.3 1.2-.7 1.7z" />
        </svg>
      );
    case "laravel":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M19.8 8.4l-7.3-4.2c-.3-.2-.7-.2-1 0L4.2 8.4c-.3.2-.5.5-.5.9v8.4c0 .4.2.7.5.9l7.3 4.2c.3.2.7.2 1 0l7.3-4.2c.3-.2.5-.5.5-.9V9.3c0-.4-.2-.7-.5-.9zM12 5.5l5.5 3.2-5.5 3.2-5.5-3.2L12 5.5zm-6.5 4.8l5.5 3.2v6.3l-5.5-3.2v-6.3zm13 6.3l-5.5 3.2v-6.3l5.5-3.2v6.3z" />
        </svg>
      );
    case "react":
    case "reactjs":
    case "reactnative":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.8 14.5l-5.4-7.6v7.6H9V7.5h1.6l5.4 7.6V7.5h1.4v9.5h-1.6z" />
        </svg>
      );
    case "typescript":
    case "ts":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M3 3h18v18H3V3zm8.5 7H6v1.5h1.7V17h1.6v-5.5H11V10zm3.8 2.3c-.9-.4-1.3-.7-1.3-1.2 0-.5.4-.8 1.1-.8.7 0 1.2.3 1.5.8l1.2-.8c-.6-.9-1.5-1.3-2.7-1.3-1.7 0-2.8.9-2.8 2.2 0 1 .6 1.7 2 2.2.9.4 1.3.7 1.3 1.3 0 .6-.5.9-1.2.9-.9 0-1.5-.4-1.8-1.1l-1.3.8c.5 1.1 1.6 1.7 3.1 1.7 1.8 0 2.9-.9 2.9-2.3 0-1.2-.8-1.9-2-2.4z" />
        </svg>
      );
    case "nodejs":
    case "node":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4zm-1 6.2h2v4h-2v-4z" />
        </svg>
      );
    case "postgresql":
    case "postgres":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
          <path d="M12 3C7.5 3 4 6.5 4 11c0 3.5 2 6 5 7.5V21l3-1 3 1v-2.5c3-1.5 5-4 5-7.5 0-4.5-3.5-8-8-8z" />
          <path d="M8 12c1 1 2 1.5 4 1.5s3-.5 4-1.5" />
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
          <ellipse cx="12" cy="7" rx="8" ry="3" />
          <path d="M4 7v6c0 1.66 3.58 3 8 3s8-1.34 8-3V7" />
          <path d="M4 13v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
        </svg>
      );
    case "prisma":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <polygon points="12 2 22 19 2 19" />
          <line x1="12" y1="2" x2="12" y2="19" />
        </svg>
      );
    case "tailwind":
    case "tailwindcss":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "expo":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M4 19L11.5 5h1L20 19h-2.5l-5.5-10.2L6.5 19H4zm5-6l3-5.5 3 5.5H9z" />
        </svg>
      );
    case "stripe":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-4.32C17.697 1.97 14.945 1.5 12.33 1.5 6.643 1.5 2.8 4.536 2.8 9.387c0 4.805 3.993 6.46 7.147 7.643 2.54.957 3.394 1.761 3.394 2.845 0 1.115-.992 1.704-2.43 1.704-2.616 0-5.46-1.246-7.243-2.247l-.92 4.398c1.996.953 5.163 1.57 8.01 1.57 5.922 0 9.942-2.923 9.942-8.033 0-5.11-4.064-6.848-6.724-8.117z" />
        </svg>
      );
    case "razorpay":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22.4 2L10.2 22H5.4l5.1-9.1-4.1-3.6 8.3-7.3h7.7zm-8.8 6.2l-3.3 2.9 2.2 1.9 3.5-4.8h-2.4z" />
        </svg>
      );
    case "api":
    case "restapi":
    case "restapis":
      return <Cpu className={className} />;
    case "webhook":
    case "webhooks":
      return <Webhook className={className} />;
    case "auth":
    case "authenticationsystems":
      return <KeyRound className={className} />;
    case "git":
    case "gitgithub":
      return <GitBranch className={className} />;
    case "express":
    case "expressjs":
      return <Terminal className={className} />;
    case "javascript":
    case "js":
      return <Code2 className={className} />;
    default:
      return <Layers className={className} />;
  }
}
