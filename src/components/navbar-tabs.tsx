"use client";

import { useState, useRef, useEffect } from "react";
import { LucideIcon } from "./ui/lucide-icon";
import { AppTab } from "@/constants/app-tabs";
import { useRouter } from "next/navigation";

export default function NavbarTabs({
  tabs,
  className,
}: {
  tabs: AppTab[];
  className?: string;
}) {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onTabClick = (tab: AppTab, index: number) => {
    setActiveIndex(index);
    router.push(tab.path);
  };

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const overviewElement = tabRefs.current[0];
      if (overviewElement) {
        const { offsetLeft, offsetWidth } = overviewElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    });
  }, []);

  return (
    <div className={`${className} flex justify-center items-center w-full`}>
      <div className="relative">
        {/* Hover Highlight */}
        <div
          className="hidden sm:flex absolute h-[30px] transition-all duration-300 ease-out bg-muted rounded-full items-center"
          style={{
            ...hoverStyle,
            opacity: hoveredIndex !== null ? 1 : 0,
          }}
        />

        {/* Active Indicator */}
        {/* <div
          className="hidden sm:flex absolute bottom-[-20px] sm:bottom-[-6px] h-[2px] bg-[#0e0f11] dark:bg-white transition-all duration-300 ease-out"
          style={activeStyle}
        /> */}

        {/* Tabs */}
        <div className="relative flex space-x-[6px] items-center">
          {tabs.map((tab, index) => (
            <div
              key={index}
              ref={(el: any) => (tabRefs.current[index] = el)}
              className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
                index === activeIndex
                  ? "text-[#0e0e10] dark:text-white"
                  : "text-[#0e0f1199] dark:text-[#ffffff99]"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onTabClick(tab, index)}
            >
              <div
                className={`sm:visible invisible text-sm whitespace-nowrap flex items-center justify-center h-full gap-2 duration-200
                  ${index === activeIndex && "font-bold"}`}
              >
                <LucideIcon name={tab.iconName} size={18} /> {tab.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
