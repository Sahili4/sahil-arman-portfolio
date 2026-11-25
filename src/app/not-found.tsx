import { Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-mono text-xl font-bold mb-6">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-[#F4F4F5] tracking-tight mb-3">
        Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md mb-8 leading-relaxed">
        The page you are looking for doesn&apos;t exist or has been moved to another location.
      </p>
      <Button
        href="/"
        variant="primary"
        size="md"
        leftIcon={<Home className="w-4 h-4" />}
      >
        Return to Home
      </Button>
    </div>
  );
}
