import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export function ModalComponent(props) {
  useEffect(() => {
    if (!props.isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") props.onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("overflow-hidden");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [props.isOpen, props.onClose]);

  return createPortal(
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={props.onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-full max-w-lg rounded-xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-lg font-semibold">{props.title}</h2>

              <button
                onClick={props.onClose}
                className="rounded-md p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
              {props.children}
            </div>

            {/* Footer */}
            {props.footer && (
              <div className="flex justify-end gap-2 border-t px-6 py-4">
                {props.footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
