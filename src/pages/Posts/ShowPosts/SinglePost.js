import React from 'react';
import { FaShareAlt, FaThumbsUp, FaUser } from 'react-icons/fa';
import ShowComments from './ShowComments';
import AddComment from './AddComment';
import { Link } from 'react-router-dom';

const SinglePost = ({ post, refetch }) => {
    const { _id, author, img, description, comments } = post;
    const reverseComment = [...comments].reverse();
    return (
        <div className='w-[100%] mx-auto my-7 p-7 border rounded-xl'>
            <div className="flex items-center">
                {
                    img ?
                        <img src={img} alt="" className='w-12 h-12 rounded-full' />
                        :
                        <FaUser className='text-4xl rounded-full'></FaUser>

                }

                <p className="text-lg ml-2">{author}</p>
            </div>
            <Link>
                <div className='my-5'>
                    {
                        description &&
                        <p className="text-sm text-justify">{description}</p>
                    }

                </div>
                <p></p>
            </Link>
            <hr />

            <div className="grid grid-cols-3 text-center">
                <div>

                </div>
                <div>
                    <button className="btn btn-ghost"><p className='text-md mr-2'>({comments.length})</p> comments</button>
                </div>
                <div>

                </div>
            </div>
            <hr />
            <div>
                <div>
                    {
                        comments &&
                        reverseComment.slice(0, 3).map((singleComment, i) => <ShowComments
                            key={i}
                            singleComment={singleComment}
                        ></ShowComments>)
                    }
                </div>
                <div>
                    <AddComment
                        post={post}
                        refetch={refetch}
                    ></AddComment>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;