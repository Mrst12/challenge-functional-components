import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";
import PostItem from './PostItem';


export class Content extends Component {
    constructor(props) {
      super(props)
    }
  render() {
    return (
      <div>
          <div className={css.TitleBar}>
            <h1>My Photos</h1>
          </div>
          <div className={css.SearchResults}>
            {savedPosts.map((posts) => {
                return <div className={css.SearchItem} key={posts.title}>
                            <p>{posts.title}</p>
                            <p>{posts.name}</p>
                            <img src={posts.image} alt="picture"></img>
                            <p>{posts.description}</p>
                        </div>
            })
            }

            <PostItem savedPosts={savedPosts} />
          </div>
      </div>
    )
  }
}

export default Content