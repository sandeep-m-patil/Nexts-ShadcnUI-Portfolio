"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-10 bg-primary/60" />
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </span>
        {align === "center" && <span className="h-px w-10 bg-primary/60" />}
      </div>
      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}