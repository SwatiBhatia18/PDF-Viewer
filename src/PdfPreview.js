import React, { useState } from "react";

function PdfPreview() {
  const [file, setFile] = useState(null);

  function onFileChange(event) {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);

    if (selectedFile.type !== "application/pdf") {
      console.log("Please select a PDF file to upload.");
      return;
    }

    setFile(selectedFile);
  }

  return (
    <div>
      <input type="file" accept=".pdf" onChange={onFileChange} />
      {file && (
        <div>
          <object
            data={`${URL.createObjectURL(file)}#page=2&toolbar=0`}
            type="application/pdf"
            width="100%"
            height="500px"
          >
            <p>Unable to display PDF file</p>
          </object>
        </div>
      )}
    </div>
  );
}

export default PdfPreview;
