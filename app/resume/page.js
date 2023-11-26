import { BodyTitle } from "../components/BodyTitle";
import MarkdownComponent from "../components/MarkdownComponent";
import React from 'react';



async function ResumePage() {
  return (
    <>
      <BodyTitle>Resume</BodyTitle>
      <MarkdownComponent url="/data/resume.md" maxHeight={'65vh'}/>
    </>
    
  );
}


export default ResumePage;