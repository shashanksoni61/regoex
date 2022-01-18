import React from "react";

const Model = (props) => {
  const {
    headerTitle,
    children,
    submitBtnText,
    submitBtnHandler,
    cancelBtnText,
    cancelBtnHandler,
    closeModel,
    modalId,
    modalClass,
    errorMsg,
    isDisable,
  } = props;

  return (
    <div
      className="modal coman-modal fade in"
      tabIndex="-1"
      id={modalId || ""}
      role="dialog"
      style={{ display: "block" }}
    >
      <div
        className={`modal-dialog ${modalClass || "modal-sm text-center"}`}
        role="document"
      >
        <div className="modal-content">
          <button
            type="button"
            className="close"
            disabled={isDisable}
            onClick={closeModel}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          {(headerTitle !== undefined ||
            headerTitle != null ||
            headerTitle !== "") && <h2>{headerTitle}</h2>}
          {children}
          <div className="error-message">{errorMsg}</div>
          <div className="text-center">
            {submitBtnText !== undefined &&
              submitBtnText != null &&
              submitBtnText !== "" && (
                <button
                  type="button"
                  disabled={isDisable}
                  className="btn btn-primary  m-l-sm"
                  onClick={() => {
                    if (typeof submitBtnHandler === "function")
                      submitBtnHandler();
                    else closeModel();
                  }}
                >
                  {submitBtnText}
                </button>
              )}
            {cancelBtnText !== undefined &&
              cancelBtnText != null &&
              cancelBtnText !== "" && (
                <button
                  type="submit"
                  disabled={isDisable}
                  className="btn btn-primary m-l-sm"
                  onClick={() => {
                    if (typeof cancelBtnHandler === "function")
                      cancelBtnHandler();
                    closeModel();
                  }}
                >
                  Cancel
                </button>
              )}
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade in" />
    </div>
  );
};

export default Model;
