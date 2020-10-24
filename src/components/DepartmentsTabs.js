import React, { useState } from "react";
import styled from "styled-components";

const TabsHeader = styled.div`
    text-align: center;
    margin-bottom: 16px;
`;

const Tab = styled.button`
  padding: 6px 12px;
  overflow: hidden;
  position: relative;
  font-size: 0.875rem;
  max-width: 264px;
  min-width: 72px;
  box-sizing: border-box;
  min-height: 48px;
  text-align: center;
  flex-shrink: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  white-space: normal;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  opacity: 0.7;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
`;

export default function DepartmentsTabs({ departments, onDepartmentChange }) {
  const [clicked, setClicked] = useState();

  return (
    <TabsHeader>
      {Array.isArray(departments) ? (
        <>
          {departments.map((department) => (
            <Tab
              key={department.id}
              onClick={() => {
                setClicked(department.id);
                onDepartmentChange(department.id);
              }}
              style={{
                  opacity: clicked === department.id && 1
              }}
            >
              {department.name}
            </Tab>
          ))}
          <Tab
            onClick={() => {
              setClicked(null);
              onDepartmentChange(null);
            }}
            style={{
                opacity: !clicked && 1
            }}
          >
            None
          </Tab>
        </>
      ) : null}
    </TabsHeader>
  );
}
