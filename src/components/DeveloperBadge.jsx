// import { useState, useEffect } from "react";

// export default function DeveloperBadge() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setOpen(true), 400);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <>
//       {!open && (
//         <button
//           className="dev-toggle-btn"
//           onClick={() => setOpen(true)}
//           aria-label="Show developer info"
//         >
//           ℹ️
//         </button>
//       )}

//       <div className={`dev-badge ${open ? "show" : ""}`}>
//         <div className="dev-badge-card">
//           <button
//             className="dev-close"
//             onClick={() => setOpen(false)}
//             aria-label="Hide developer info"
//           >
//             ✕
//           </button>

//           <p><strong>Developed By:</strong> Ankit Kumar</p>
//           <p><strong>Phone:</strong> +91 7903863590</p>
//           <p><strong>Gmail:</strong> ankit8597286@gmail.com</p>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";

export default function DeveloperBadge() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {!open && (
        <button
          className="dev-toggle-btn"
          onClick={() => setOpen(true)}
          aria-label="Show developer info"
        >
          ℹ️
        </button>
      )}

      <div className={`dev-badge ${open ? "show" : ""}`}>
        <div
          className="dev-badge-card"
          onClick={() => setOpen(false)}
          role="button"
          aria-label="Hide developer info"
        >
          <p><strong>Developed By:</strong> Ankit Kumar</p>
          <p><strong>Phone:</strong> +91 7903863590</p>
          <p><strong>Gmail:</strong> ankit8597286@gmail.com</p>
          <span className="dev-hint">Tap anywhere to hide</span>
        </div>
      </div>
    </>
  );
}
