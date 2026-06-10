const paths = {
  arrowRight:  <><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></>,
  leaf:        <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.5 2A12.91 12.91 0 0 1 22 9.5c0 4.13-3.05 7.5-7 7.5"/><path d="M2 21c1-3.5 4-7 8-10"/></>,
  fileCheck:   <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/></>,
  shieldCheck: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>,
  recycle:     <><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="M14 16l-3 3 3 3"/><path d="M8.293 13.596L7.196 9.5 3.1 10.598"/><path d="M9.344 5.811l1.093-1.892A1.83 1.83 0 0 1 12.013 3a1.787 1.787 0 0 1 1.575.91l3.328 5.763"/><path d="M13.378 9.633l4.096 1.098 1.097-4.097"/></>,
  barChart:    <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></>,
  droplet:     <><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></>,
  factory:     <><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></>,
  truck:       <><path d="M5 17h14"/><path d="M3 17h2V8a2 2 0 0 1 2-2h7v11h2"/><path d="M14 9h4l3 4v4h-2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></>,
  flask:       <><path d="M9 3h6"/><path d="M10 3v7L4 20a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-10V3"/><path d="M7 15h10"/></>,
  alert:       <><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></>,
  clock:       <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
  ban:         <><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/></>,
  user:        <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  check:       <><path d="M5 12l5 5L20 7"/></>,
  close:       <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>,
  mail:        <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></>,
  mountain:    <><path d="M8 3l4 8 5-5 5 15H2L8 3z"/></>,
  bolt:        <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>,
  linkedin:    <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
  instagram:   <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
  menu:        <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
  whatsapp:    <><path d="M3 21l1.65-4.95A8.96 8.96 0 0 1 3.5 11.5a8.5 8.5 0 1 1 8.5 8.5 8.96 8.96 0 0 1-4.05-1.05z"/><path d="M9 9.5c0 4 2.5 6.5 6.5 6.5l1-2-2.5-1.5-1 1c-1.5-.5-2.5-1.5-3-3l1-1L9.5 7z"/></>,
  mapPin:      <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></>,
}

export default function Icon({ name, size = 22, className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  )
}
