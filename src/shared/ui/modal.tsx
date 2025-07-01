import type React from "react";
import ReactModal from "react-modal";

interface ModalComponentProps {
  isOpen: boolean;
  content: string;
  leftButtonText: string;
  leftButtonFunc: () => void;
  rightButtonText: string;
  rightButtonFunc: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  content,
  leftButtonText,
  leftButtonFunc,
  rightButtonText,
  rightButtonFunc,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customModalStyles}
      onAfterOpen={() => {
        document.body.style.overflow = "hidden";
      }}
      onAfterClose={() => {
        document.body.style.overflow = "";
      }}
    >
      <div className="flex flex-col items-center gap-y-[48px]">
        <p className="titleMd textSub">{content}</p>

        <div className="flex flex-row items-center gap-x-[8px]">
          <button
            onClick={leftButtonFunc}
            className="bgWarning px-[24px] py-[14px] rounded-[8px] textLg text-white"
          >
            {leftButtonText}
          </button>
          <button
            onClick={rightButtonFunc}
            className="bg-white px-[24px] py-[13px] border borderTextDisabled rounded-[8px] textLg textDisabled"
          >
            {rightButtonText}
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalComponent;

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    inset: "50% auto auto 50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 20,
    width: 726,
    paddingTop: 80,
    paddingRight: 60,
    paddingBottom: 48,
    paddingLeft: 60,
  },
};
