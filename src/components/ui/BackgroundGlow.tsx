import React from "react";

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top subtle violet ambient glow */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] transform-gpu" />

      {/* Top-right subtle blue glow */}
      <div className="absolute top-[15%] right-[-5%] w-[450px] h-[450px] rounded-full bg-indigo-600/8 blur-[140px] transform-gpu" />

      {/* Mid subtle purple glow */}
      <div className="absolute top-[50%] left-[-10%] w-[550px] h-[550px] rounded-full bg-purple-700/8 blur-[160px] transform-gpu" />

      {/* Bottom ambient glow */}
      <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-violet-800/10 blur-[150px] transform-gpu" />

      {/* Fine radial grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 mask-gradient" />
    </div>
  );
}
