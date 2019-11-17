import * as React from "react";
import { ModalDialog, ModalOptions } from "./ModalDialog";

const ModalServiceContext = React.createContext<
  (options: ModalOptions) => Promise<void>
>(Promise.reject);

export const useModal = () =>
  React.useContext(ModalServiceContext);

export const ModalServiceProvider = ({ children }) => {
  const [
    ModalState,
    setModalState
  ] = React.useState<ModalOptions | null>(null);

  const awaitingPromiseRef = React.useRef<{
    resolve: () => void;
    reject: () => void;
  }>();

  const openModal = (options: ModalOptions) => {
    setModalState(options);
    return new Promise<void>((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject };
    });
  };

  const handleClose = () => {
    if (ModalState.catchOnCancel && awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject();
    }

    setModalState(null);
  };

  const handleSubmit = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve();
    }

    setModalState(null);
  };

  return (
    <>
      <ModalServiceContext.Provider
        value={openModal}
        children={children}
      />

      <ModalDialog
        open={Boolean(ModalState)}
        onSubmit={handleSubmit}
        onClose={handleClose}
        {...ModalState}
      />
    </>
  );
};