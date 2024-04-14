import React from "react";
import "./FileInput.style.css";

const FileInput = ({ handleFileChange, fileName }) => {
    return (
        <div className="fileInputWrap">
            <input
                type="file"
                onChange={handleFileChange}
                className="fileInput"
                id="fileInput"
            />
            <label htmlFor="fileInput">Choose a file</label>

            <div className="fileName">{fileName}</div>
        </div>
    );
};

export default FileInput;
