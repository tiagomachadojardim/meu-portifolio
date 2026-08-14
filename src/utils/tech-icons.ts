import type { ComponentType } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiBluetooth,
} from 'react-icons/si';
import { FaFire } from 'react-icons/fa';
import { FiZap } from 'react-icons/fi';

const techIconMap: Record<string, ComponentType<{ className?: string }>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  'next.js': SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  vite: SiVite,
  node: SiNodedotjs,
  'node.js': SiNodedotjs,
  laravel: SiLaravel,
  php: SiPhp,
  postgresql: SiPostgresql,
  flutter: SiFlutter,
  dart: SiDart,
  bluetooth: SiBluetooth,
  flame: FaFire,
  api: FiZap,
  'api rest': FiZap,
  rest: FiZap,
};

export function getTechIcon(name: string) {
  return techIconMap[name.trim().toLowerCase()];
}
