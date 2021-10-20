import React from "react";
import X2OutlinedcFocused from "../X2OutlinedcFocused";
import X3ContainedAText from "../X3ContainedAText";
import styled from "styled-components";
import "./SignUpPopUp1.css";

function SignUpPopUp1(props) {
  const { x2OutlinedcFocusedProps, x3ContainedATextProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sign-up-pop-up-1 screen">
        <FAB>
          <Navigationclose24px src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/navigation-close-24px@2x.svg" />
        </FAB>
        <AlmostThere src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/almost-there--1@2x.svg" />
        <X2OutlinedcFocused inputText={x2OutlinedcFocusedProps.inputText} label2={x2OutlinedcFocusedProps.label2} />
        <X3ContainedAText>{x3ContainedATextProps.children}</X3ContainedAText>
      </div>
    </div>
  );
}

const FAB = styled.div`
  height: 40px;
  margin-top: -20px;
  display: flex;
  padding: 0 11px;
  align-items: center;
  min-width: 40px;
  background-color: var(--eerie-black);
  border-radius: 50px;
  box-shadow: 0px 2px 4px #00000033, 0px 1px 10px #0000001f, 0px 4px 5px #00000024;
`;

const Navigationclose24px = styled.img`
  width: 18px;
  height: 18px;
`;

const AlmostThere = styled.img`
  width: 106px;
  height: 13px;
  align-self: center;
  margin-top: 53px;
`;

export default SignUpPopUp1;
