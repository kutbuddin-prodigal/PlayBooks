import React from "react";
import { useSelector } from "react-redux";
import { currentWorkflowSelector } from "../../../store/features/workflow/workflowSlice.ts";
import { useGetTriggerOptionsQuery } from "../../../store/features/triggers/api/getTriggerOptionsApi.ts";
import { CircularProgress } from "@mui/material";
import SelectComponent from "../../SelectComponent/index.jsx";
import { handleInput } from "../utils/handleInputs.ts";

function HandleNotificationOption() {
  const currentWorkflow = useSelector(currentWorkflowSelector);
  const { data: options, isFetching } = useGetTriggerOptionsQuery();

  switch (currentWorkflow.notification) {
    case "slack_message":
      return (
        <div className="flex items-center gap-2 mt-2">
          <p className="text-xs font-bold text-gray-500">Select Channel</p>
          {isFetching && <CircularProgress size={20} />}
          <SelectComponent
            data={options?.active_channels?.map((e) => {
              return {
                id: e.channel_id,
                label: e.channel_name,
                channel: e,
              };
            })}
            placeholder="Select Channel"
            onSelectionChange={(_, val) => {
              handleInput("channel", val.channel);
            }}
            selected={
              currentWorkflow?.channel?.channel_id ||
              currentWorkflow?.trigger?.channel?.channel_id ||
              ""
            }
            error={currentWorkflow?.errors?.channel ?? false}
            searchable={true}
          />
        </div>
      );
    default:
      return;
  }
}

export default HandleNotificationOption;
