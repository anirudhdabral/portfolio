import * as LucideIcons from 'lucide-react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className = "" }: DynamicIconProps) {
  // Check SiIcons (Simple Icons - common for tech stacks)
  if (name.startsWith('Si') && name in SiIcons) {
    const Icon = (SiIcons as any)[name];
    return <Icon className={className} />;
  }

  // Check FaIcons (FontAwesome)
  if (name.startsWith('Fa') && name in FaIcons) {
    const Icon = (FaIcons as any)[name];
    return <Icon className={className} />;
  }

  // Check Lucide
  if (name in LucideIcons) {
    const Icon = (LucideIcons as any)[name];
    return <Icon className={className} />;
  }

  // Fallback icon if not found
  return <LucideIcons.Box className={className} />;
}
