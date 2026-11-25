import React from "react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Globe,
  Server,
  LayoutDashboard,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  PackageCheck,
} from "lucide-react";

export function Services() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "globe":
        return <Globe className="w-6 h-6 text-violet-400" />;
      case "server":
        return <Server className="w-6 h-6 text-indigo-400" />;
      case "layout-dashboard":
        return <LayoutDashboard className="w-6 h-6 text-sky-400" />;
      case "smartphone":
        return <Smartphone className="w-6 h-6 text-emerald-400" />;
      default:
        return <Globe className="w-6 h-6 text-violet-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="04 // SERVICES"
          title="Engineering Solutions."
          highlight="Built for Growth."
          subtitle="Specialized development services tailored for founders, technical teams, and scaling international businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl bg-[#151519] border border-white/10 hover:border-violet-500/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-violet-600/10 hover:-translate-y-1"
            >
              <div>
                {/* Icon & Title Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#111114] border border-white/10 flex items-center justify-center shrink-0">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F5] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-violet-400 font-mono mt-1">
                      {service.bestFor}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                  {service.detailedDescription}
                </p>

                {/* Core Capabilities */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-3">
                    Capabilities Included
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mt-6 p-3.5 rounded-xl bg-[#111114] border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#71717A] mb-2">
                    <PackageCheck className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Tangible Deliverables</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#A1A1AA]">
                    {service.deliverables.map((deliv) => (
                      <li key={deliv} className="truncate">
                        • {deliv}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                <Button
                  variant="secondary"
                  size="sm"
                  href="#contact"
                  className="w-full justify-between group/btn hover:border-violet-500/50"
                  rightIcon={
                    <ArrowRight className="w-4 h-4 text-violet-400 group-hover/btn:translate-x-1 transition-transform" />
                  }
                >
                  <span>Inquire About {service.title.split(" ")[0]} Project</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
