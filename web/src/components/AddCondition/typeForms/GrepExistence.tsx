import React from "react";
import { useSelector } from "react-redux";
import { additionalStateSelector } from "../../../store/features/drawers/drawersSlice.ts";
import useEdgeConditions from "../../../hooks/playbooks/useEdgeConditions.ts";
import { HandleTypesPropTypes } from "../HandleTypes.tsx";
import Checkbox from "../../common/Checkbox/index.tsx";
import { addConditionToEdgeByIndex } from "../../../utils/conditionals/addConditionToEdgeByIndex.ts";
import CustomInput from "../../Inputs/CustomInput.tsx";
import { InputTypes } from "../../../types/inputs/inputTypes.ts";
import useIsPrefetched from "../../../hooks/playbooks/useIsPrefetched.ts";

function GrepExistence({
  condition,
  conditionIndex,
  rule,
}: HandleTypesPropTypes) {
  const { id } = useSelector(additionalStateSelector);
  const { handleCondition, edgeIndex } = useEdgeConditions(id);
  const keyValue = condition?.type?.toLowerCase();
  const isPrefetched = useIsPrefetched();

  const handleChange = (val: string, type: string) => {
    handleCondition(`${keyValue}.${type}`, val, conditionIndex);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <CustomInput
        inputType={InputTypes.TEXT}
        value={rule.pattern}
        handleChange={(val: string) => handleChange(val, `pattern`)}
        placeholder={"Enter pattern to evaluate"}
        className="!w-[200px]"
        disabled={!!isPrefetched}
      />
      <Checkbox
        id="case_sensitive"
        isChecked={rule.case_sensitive}
        onChange={() => {
          addConditionToEdgeByIndex(
            `${keyValue}.case_sensitive`,
            !rule.case_sensitive,
            edgeIndex,
            conditionIndex,
          );
        }}
        label="Pattern is Case Sensitive"
        isSmall={true}
        disabled={!!isPrefetched}
      />
    </div>
  );
}

export default GrepExistence;
