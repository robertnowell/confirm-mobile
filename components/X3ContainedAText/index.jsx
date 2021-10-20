import React from "react";
import styled from "styled-components";
import { InterBoldWhite12px, ValignTextMiddle } from "../../styledMixins";


function X3ContainedAText(props) {
  const { children } = props;

  return (
    <X3ContainedAText1>
      <Label>{children}</Label>
    </X3ContainedAText1>
  );
}

const X3ContainedAText1 = styled.div`
  height: 32px;
  margin-top: 12px;
  margin-right: 21px;
  display: flex;
  padding: 7px 14px;
  align-items: flex-end;
  min-width: 72px;
  background-color: var(--eerie-black);
  border-radius: 4px;
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite12px}
            height: 15px;
  min-width: 42px;
  letter-spacing: 0;
`;

export default X3ContainedAText;
