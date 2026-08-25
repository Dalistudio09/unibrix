import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function IconTelegram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.5 4.3c.2-.9-.7-1.6-1.5-1.3L2.9 9.4c-.9.3-.9 1.6.1 1.9l4.6 1.4 1.8 5.6c.3.8 1.3 1 1.9.4l2.6-2.6 4.7 3.5c.7.5 1.7.1 1.9-.7l1-14.6ZM8.6 12.7l8.7-5.4-6.8 6.6-.3 3.1-1.6-4.3Z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 3.2A8.8 8.8 0 0 0 3.9 16.4L3 21l4.7-.9A8.8 8.8 0 1 0 12.04 3.2Zm0 1.6a7.2 7.2 0 0 1 6.2 10.9 7.2 7.2 0 0 1-8.4 2.4l-.5-.2-2.8.5.5-2.7-.2-.5A7.2 7.2 0 0 1 12.04 4.8Zm-3.7 4.3c-.2 0-.5.1-.7.4-.2.4-.8 1-.8 2.3s.9 2.7 1 2.9c.1.2 1.8 2.9 4.5 3.9 2.2.8 2.6.6 3.1.6.5 0 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3 0-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4 0-.5.1l-.7.8c-.2.1-.3.2-.6.1-.2-.1-1-.4-1.9-1.3-.7-.7-1.2-1.5-1.3-1.8-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.3.2-.5 0-.1 0-.3-.1-.4l-.8-1.8c-.2-.4-.4-.4-.6-.4Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 7.5 12 13l8-5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
