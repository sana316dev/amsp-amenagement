import type { SVGProps } from "react";

export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "arrow-down"
  | "phone"
  | "whatsapp"
  | "mail"
  | "pin"
  | "clock"
  | "check"
  | "star"
  | "quote"
  | "plus"
  | "menu"
  | "close"
  | "ruler"
  | "handshake"
  | "document"
  | "compass"
  | "sparkle";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

const paths: Record<IconName, React.ReactNode> = {
  "arrow-right": <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />,
  "arrow-up-right": <path d="M7 17 17 7m0 0H8m9 0v9" />,
  "arrow-down": <path d="M12 4v15m0 0 5.5-5.5M12 19l-5.5-5.5" />,
  phone: (
    <path d="M6.5 3.5h-2A1.5 1.5 0 0 0 3 5.2C3 13 10.9 21 18.8 21a1.5 1.5 0 0 0 1.7-1.5v-2a1 1 0 0 0-.8-1l-3.4-.7a1 1 0 0 0-1 .4l-1.1 1.5a13.6 13.6 0 0 1-5.9-5.9L9.8 10a1 1 0 0 0 .4-1l-.7-3.4a1 1 0 0 0-1-.8Z" />
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16.2a8.4 8.4 0 1 1 3.4 3.3l-4.9 1Z" />
      <path d="M8.8 8.2c.3-.6.6-.6 1-.6h.4c.2 0 .4.1.5.5l.6 1.4c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .7.5.8 1.4 1.7 2.2 2.2.3.2.5.2.7 0l.6-.6c.2-.2.4-.2.6-.1l1.4.7c.4.1.4.3.4.5v.4c0 .4 0 .7-.6 1-1.4.8-3.3.4-5.3-1.1-1.6-1.3-2.7-2.9-2.8-3.9-.2-.7 0-1.4.4-2Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  star: (
    <path d="m12 3 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2-5.6-3-5.6 3 1.2-6.2L3 9.5l6.3-.8Z" />
  ),
  quote: (
    <path d="M9 6c-3 1.4-4.8 4.2-4.8 8.2 0 2.4 1.4 3.8 3.3 3.8 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.2-3-2.8-3-.3 0-.6 0-.8.1.3-1.6 1.3-2.9 2.9-3.8L9 6Zm9 0c-3 1.4-4.8 4.2-4.8 8.2 0 2.4 1.4 3.8 3.3 3.8 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.2-3-2.8-3-.3 0-.6 0-.8.1.3-1.6 1.3-2.9 2.9-3.8L18 6Z" />
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  close: <path d="m5.5 5.5 13 13m0-13-13 13" />,
  ruler: (
    <>
      <rect x="2.5" y="8" width="19" height="8" rx="1.5" transform="rotate(-8 12 12)" />
      <path d="M7 9.6v3M11 9v3M15 8.4v3M19 7.8v3" />
    </>
  ),
  handshake: (
    <>
      <path d="m3 12 3-3 4 1 2-2 2 2 4-1 3 3-4 5-2-1-2 2-2-2-2 1-3-1-3-4Z" />
      <path d="M3 12h18" />
    </>
  ),
  document: (
    <>
      <path d="M6 3.5h8l4 4v13H6z" />
      <path d="M14 3.5v4h4M9 12h6M9 16h4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 5-4 2 2-5 4-2Z" />
    </>
  ),
  sparkle: (
    <path d="M12 3.5c.6 4.3 2.6 6.3 6.9 6.9-4.3.6-6.3 2.6-6.9 6.9-.6-4.3-2.6-6.3-6.9-6.9 4.3-.6 6.3-2.6 6.9-6.9Z" />
  ),
};

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.55 3.75 1.5 5.28L2 22l5.02-1.65a9.8 9.8 0 0 0 5.02 1.38c5.43 0 9.84-4.4 9.84-9.84C21.88 6.4 17.47 2 12.04 2Zm0 17.9c-1.57 0-3.04-.42-4.3-1.16l-.31-.18-3.19 1.05 1.05-3.1-.2-.32a8.06 8.06 0 0 1-1.24-4.35 8.2 8.2 0 1 1 8.19 8.06Zm4.5-6.03c-.25-.12-1.46-.72-1.68-.8-.23-.09-.39-.13-.55.12-.16.25-.63.8-.77.96-.14.16-.28.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
