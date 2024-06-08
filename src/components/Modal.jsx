import { useRef, useImperativeHandle, forwardRef } from "react";

import { createPortal } from "react-dom";

const Modal = forwardRef(({ children, buttonCaption, ...props }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.querySelector("#modal-root")
  );
});

export default Modal;
