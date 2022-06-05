import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './post.css';

const API_URL = 'http://localhost:3000/posts';

class Post extends Component {
  state = {
    users: []
  }

  // For Get Request 
  
  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      // console.log(this.state.users)
     })
  }

  // For Delete Request

  deleteRow(id, e){  
    e.preventDefault();
    axios.delete(`http://localhost:3000/posts/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
        const posts = this.state.posts.filter(item => item.id !== id);  
        this.setState({ posts });  
      })  
    
  }  

  render() {

    return (
       <div className='posts'>
         <div className="container">
        {this.state.users.map((user) => (
            <div className="post">
            <img
              className="postImg"
              src={user.image}
              alt="image"
            />
            <div className="postInfo">
              <div className="postCats">
                <span className="postCat">
                  <Link className="link" to="/posts?cat=Music">
                    Music
                  </Link>
                </span>
                <span className="postCat">
                  <Link className="link" to="/posts?cat=Music">
                    Life
                  </Link>
                </span>
              </div>
              <span className="postTitle">
                <Link to="/post/abc" className="link">
                  {user.title}
                </Link> 
              </span>
              <hr />
              <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
            {user.content}
            </p>
            <center>
            <div className="button">
              <span>
                <button className="delete" onClick={(e) => this.deleteRow(user.id, e)}>Delete</button>
              </span>
            </div>
            </center>
        </div>
        ))}
       </div>
       </div>
    );
  }
}
export default Post;