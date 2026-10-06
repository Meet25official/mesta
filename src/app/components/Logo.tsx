export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/mesta-logo.png"
      alt="MESTA — Innovate, Build, Elevate"
      className={`h-12 w-auto object-contain ${className}`}
    />
  );
}