'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface NavItem {
  id: string;
  label: string;
  icon?: string | React.ReactNode;
}

export interface LiquidUnderlineNavbarProps {
  items?: (string | NavItem)[];
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
  navClassName?: string;
  bare?: boolean;
  strokeColor?: string;
}

export function LiquidUnderlineNavbar({
  items = ['Home', 'About', 'Projects', 'Contacts'],
  activeId,
  onSelect,
  className = '',
  navClassName = '',
  bare = false,
  strokeColor,
}: LiquidUnderlineNavbarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const normalizedItems: NavItem[] = items.map((item) =>
    typeof item === 'string' ? { id: item.toLowerCase(), label: item } : item
  );

  const defaultNavClass = bare
    ? 'relative flex items-center justify-center gap-3 sm:gap-6 px-1 py-1 overflow-x-auto no-scrollbar'
    : 'relative flex items-center justify-center gap-4 sm:gap-8 lg:gap-10 px-4 sm:px-8 py-2 sm:py-2.5 rounded-full bg-white/80 dark:bg-[#181622]/80 backdrop-blur-md border border-black/[0.08] dark:border-white/12 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.08)] dark:shadow-[0_14px_34px_-8px_rgba(0,0,0,0.5)] transition-colors duration-200 overflow-x-auto no-scrollbar';

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* THE NAVBAR */}
      <div className="relative flex items-center justify-center max-w-full">
        <nav
          aria-label="Navigation"
          className={`${defaultNavClass} ${navClassName}`}
        >
          {normalizedItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = activeId === item.id;
            const isUnderlined = isHovered || (isActive && hoveredIndex === null);

            return (
              <button
                key={item.id}
                onClick={() => onSelect?.(item.id)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative py-1.5 px-1 flex flex-col items-center cursor-pointer shrink-0 group focus:outline-none"
              >
                <div className="flex items-center gap-1.5">
                  {item.icon && (
                    <span className="text-sm transition-transform duration-200 group-hover:scale-110">
                      {item.icon}
                    </span>
                  )}
                  <span
                    className={`text-xs sm:text-[14px] font-semibold tracking-wide uppercase transition-colors duration-300 ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : isHovered
                        ? 'text-black dark:text-white'
                        : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                {/* The animated SVG liquid line */}
                <div
                  className={`absolute -bottom-1 w-full h-2 pointer-events-none ${
                    strokeColor
                      ? ''
                      : isActive
                      ? 'stroke-emerald-600 dark:stroke-emerald-400'
                      : 'stroke-black dark:stroke-white'
                  }`}
                  style={strokeColor ? { stroke: strokeColor } : undefined}
                >
                  <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="overflow-visible"
                  >
                    <motion.path
                      d="M 0,5 Q 25,0 50,5 T 100,5"
                      fill="none"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: isUnderlined ? 1 : 0,
                        opacity: isUnderlined ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    />
                  </motion.svg>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default LiquidUnderlineNavbar;
