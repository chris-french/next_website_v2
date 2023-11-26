import { BodyTitle } from "../components/BodyTitle";
import MarkdownComponent from "../components/MarkdownComponent";
import React from 'react';



async function CVPage() {
  return (
    <>
      <BodyTitle>Curriculum vitae</BodyTitle>
      <MarkdownComponent url="/data/cv.md" maxHeight={'65vh'}/>
    </>
    
  );
}


export default CVPage;