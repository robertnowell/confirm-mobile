import React from "react";
import styled from "styled-components";
import { RobotoNormalPinkSwan12px, RobotoNormalMediumPurple8px } from "../../styledMixins";


function X2OutlinedcFocused(props) {
  const { inputText, label2 } = props;

  return (
    <X2OutlinedcFocused1>
      <OverlapGroup>
        <Label src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f997678ab6210ac568c00/img/label@2x.svg" />
        <InputText>{inputText}</InputText>
        <Label1>
          <Label2>{label2}</Label2>
          <UpperSurface src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/upper-surface-7@2x.svg" />
        </Label1>
      </OverlapGroup>
    </X2OutlinedcFocused1>
  );
}

const X2OutlinedcFocused1 = styled.div`
  height: 60px;
  align-self: center;
  margin-top: 129px;
  margin-left: 0.55px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 266px;
`;

const OverlapGroup = styled.div`
  width: 268px;
  height: 50px;
  position: relative;
  margin-top: -7px;
`;

const Label = styled.img`
  position: absolute;
  width: 268px;
  height: 44px;
  top: 6px;
  left: 0;
`;

const InputText = styled.div`
  ${RobotoNormalPinkSwan12px}
  position: absolute;
  top: 23px;
  left: 17px;
  letter-spacing: 0.15px;
`;

const Label1 = styled.div`
  position: absolute;
  height: 14px;
  top: 0;
  left: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 243px;
`;

const Label2 = styled.div`
  ${RobotoNormalMediumPurple8px}
  min-height: 16px;
  margin-top: -1px;
  min-width: 52px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

const UpperSurface = styled.img`
  width: 189px;
  height: 2px;
  align-self: center;
  margin-left: 2px;
`;

export default X2OutlinedcFocused;
