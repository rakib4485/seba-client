import React, { useContext } from 'react';
import { BsSend } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddComment = ({post, refetch}) => {

    const {_id} = post;

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleComment = event => {
        event.preventDefault();

        const form = event.target;
        const message = form.comment.value;

        const newComment = {
            name: user.displayName,
            img: user.photoURL,
            comment: message
        }

        console.log(newComment)

        if(!user){
            navigate('/login');
        }

        else{
            fetch(`http://localhost:5000/posts/${_id}/comments`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify(newComment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset()
            refetch();
        })

        console.log(newComment);
        }
    }
    return (
        <div className='my-2'>
        <form onSubmit={handleComment} className='flex items-center'>
        <input type="text" placeholder="Type here" name='comment' className="input input-bordered input-accent w-full max-w-md rounded-3xl" />
        <button type='submit'><BsSend className='text-2xl -ml-10'/></button>
        </form>
    </div>
    );
};

export default AddComment;