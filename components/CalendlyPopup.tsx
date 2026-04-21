"use client";

// Composant Calendly en modale — commenté par défaut, activable plus tard
// Pour activer : npm install react-calendly, décommenter ce composant et l'importer dans page.tsx
//
// import { PopupModal } from "react-calendly";
//
// interface CalendlyPopupProps {
//   open: boolean;
//   onClose: () => void;
// }
//
// export default function CalendlyPopup({ open, onClose }: CalendlyPopupProps) {
//   if (typeof window === "undefined") return null;
//   return (
//     <PopupModal
//       url="https://calendly.com/rclerc26/new-meeting"
//       onModalClose={onClose}
//       open={open}
//       rootElement={document.getElementById("calendly-root") ?? document.body}
//     />
//   );
// }

export default function CalendlyPopup() {
  return null;
}
