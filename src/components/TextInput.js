import React from "react";
import styled from "styled-components";

const ControlRoot = styled.div`
  border: 0;
  margin: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
  width: 25ch;
  margin: 8px;
  box-sizing: inherit;
`;

const Label = styled.label`
  color: rgba(0, 0, 0, 0.54);
  padding: 0;
  font-size: 1rem;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.00938em;
  display: block;
  top: 0;
  left: 0;
  position: absolute;
  transform: translate(0, 1.5px) scale(0.75);
  transform-origin: top left;
`;

const InputRoot = styled.div`
  color: rgba(0, 0, 0, 0.87);
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  box-sizing: border-box;
  align-items: center;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;
  position: relative;
  margin-top: 16px;
`;

const Input = styled.input`
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: 0 0;
  box-sizing: content-box;
  letter-spacing: inherit;
  animation-duration: 10ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
`;

export default function TextInput({ label, onChange, ...rest }) {
  return (
    <ControlRoot>
      <Label>{label}</Label>
      <InputRoot>
        <Input onChange={onChange} {...rest} />
      </InputRoot>
    </ControlRoot>
  );
}
