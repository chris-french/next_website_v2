import { BodyTitle } from "../components/BodyTitle";
import MarkdownComponent from "../components/MarkdownComponent";
import React from 'react';



async function EducationPage() {
  return (
    <>
      <BodyTitle>Education</BodyTitle>
      <MarkdownComponent url="/data/education.md" maxHeight={'65vh'}/>
    </>
    
  );
}


export default EducationPage;