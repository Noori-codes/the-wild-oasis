import { useContext, useRef, useEffect, cloneElement } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { ModalContext, Overlay, StyledModal, Button } from "./Modal";

export function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) close();
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [close],
  );

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}
