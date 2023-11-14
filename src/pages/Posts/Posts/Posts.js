import React from 'react';
import PostCreate from '../PostCreate/PostCreate';
import ShowPosts from '../ShowPosts/ShowPosts';

const Posts = () => {
    return (
        <div>
            <PostCreate/>
            <ShowPosts/>
        </div>
    );
};

export default Posts;