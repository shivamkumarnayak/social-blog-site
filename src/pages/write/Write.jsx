import "./write.css";
import axios from "axios";

const API_URL = '  http://localhost:3000/posts';

export default function Write() {

  return (
    <div className="write">
      
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          ></textarea>
        </div>
        <button className="writeSubmit"  type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}