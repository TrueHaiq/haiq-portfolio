"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { LucideProps, icons } from "lucide-react";

export type LucideIconName = keyof typeof icons;

interface LucideIconProps extends Omit<LucideProps, "ref"> {
  name: LucideIconName;
  className?: string;
}

export function LucideIcon({ name, className, ...props }: LucideIconProps) {
  const Icon = icons[name];

  if (!Icon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return <Icon className={cn(className)} {...props} />;
}
