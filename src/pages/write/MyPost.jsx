import "./write.css";
import React from 'react'
import axios from "axios";

export default class MyPost extends React.Component {

    state = {
        title: '',
        content:''
      }
    
      handleTitle = event => {
        this.setState({ title: event.target.value });
      }
      
      handleContent = event => {
        this.setState({ content: event.target.value });
      }


      handleSubmit = (event) => {
        // event.preventDefault();
      const posts = {
        title: this.state.title,
        content: this.state.content
    };

    axios.post(`http://localhost:3000/posts`, { posts })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  
    render(){
        return (
            <div className="write">
              <form className="writeForm" onSubmit={this.handleSubmit}>
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
                    onChange={this.handleTitle}
                  />
                </div>
                <div className="writeFormGroup">
                  <textarea
                    className="writeInput writeText"
                    placeholder="Tell your story..."
                    type="text"
                    autoFocus={true}
                    onChange={this.handleContent}
                  ></textarea>
                </div>
                <button className="writeSubmit"  type="submit">
                  Publish
                </button>
              </form>
            </div>
          );
    }
}