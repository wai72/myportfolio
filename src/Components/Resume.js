import React, { useState } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Yin_Wai_Naing_Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const Resume = () => {
  const[wid, setwid]=useState(window.innerWidth);

  const handleResize=()=>{
    setwid(window.innerWidth);
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview">
          <Page pageNumber= {1} scale={wid<700 ? ( wid>475? 0.7: 0.5): 1}/>
          <br/>
          <Page pageNumber= {2} scale={wid<700 ? ( wid>475? 0.7: 0.5): 1}/>
          <br/>
          <Page pageNumber= {3} scale={wid<700 ? ( wid>475? 0.7: 0.5): 1}/>
      </Document>

      <a href={pdf} target='_blank' download="Grace's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload/>&nbsp; Download </h3>
        </button>
      </a>

    </div>
  )
}

export default Resume