import React from "react";
import ValueComponent from "../ValueComponent";
import EditIcon from "@mui/icons-material/Edit";
import { CircularProgress } from "@mui/material";
import { Check, CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
import useIsPrefetched from "../../hooks/useIsPrefetched.ts";
import { updateCardByIndex } from "../../utils/execution/updateCardByIndex.ts";

function PlaybookTitle({ step, index }) {
  const isPrefetched = useIsPrefetched();
  const editCardTitle = (e) => {
    e.stopPropagation();
    updateCardByIndex("editTitle", true, index);
  };

  const cancelEditCardTitle = (e) => {
    e.stopPropagation();
    updateCardByIndex("editTitle", false, index);
  };

  return (
    <>
      <div
        style={{
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
        {(step.outputLoading || step.inprogress) && (
          <CircularProgress size={20} />
        )}
        {(step.outputError || Object.keys(step?.errors ?? {}).length > 0) && (
          <ErrorOutline color="error" size={20} />
        )}
        {!step.outputError &&
          !step.outputLoading &&
          step.showOutput &&
          step.outputs?.data?.length > 0 &&
          Object.keys(step?.errors ?? {}).length === 0 && (
            <CheckCircleOutline color="success" size={20} />
          )}

        {!step.editTitle && (
          <div>
            <b>
              {index + 1}: {step.description || `Step - ${index + 1}`}
            </b>
            {!isPrefetched && (
              <button onClick={editCardTitle}>
                <EditIcon
                  sx={{ zIndex: "10" }}
                  fontSize={"small"}
                  style={{ marginLeft: "5px" }}
                />
              </button>
            )}
          </div>
        )}
      </div>{" "}
      {step.editTitle && (
        <div className="flex items-center">
          <ValueComponent
            placeHolder={`Enter Title`}
            valueType={"STRING"}
            onValueChange={(val) => {
              updateCardByIndex("description", val, index);
            }}
            value={step.description}
            length={200}
          />
          <Check onClick={cancelEditCardTitle} style={{ marginLeft: "8px" }} />
        </div>
      )}
    </>
  );
}

export default PlaybookTitle;
