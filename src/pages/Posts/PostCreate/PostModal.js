import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const PostModal = ({setOpenModal}) => {
    const { user, loading } = useContext(AuthContext);
    const { displayName, photoURL, email } = user;
  
    // if(loading){
    //   return <Loader></Loader>
    // }

    const handlePostCreate = event =>{
        event.preventDefault();
    
        const form = event.target;
        const description = form.description.value;
        
        const post = {
            author: displayName,
            email: email,
            img: photoURL,
            description: description,
            comments: []
            }
    
            console.log(post);
    
            fetch('http://localhost:5000/posts', {
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json',
                  },
                  body: JSON.stringify(post)
                })
                .then(res => res.json())
                .then(result => {
                  console.log(result);
                  setOpenModal(false);
                })
        
      
      }
  
    return (
        <div>
      <input type="checkbox" id="post-create-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <div>
            <h3 className="text-center text-lg font-bold">Create Post</h3>
            <label
              htmlFor="post-create-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
          <form onSubmit={handlePostCreate}>
          <div className="flex items-center">
            <img src={photoURL} alt="" className="w-[50px] rounded-full" />
            <p className="text-lg ml-2">{displayName}</p>
          </div>
          <input
            type="text"
            placeholder="Type here"
            name = "description"
            className="input w-full mt-3"
          />
          {/* <div className=" mt-3 w-full h-20 border-2 rounded-sm flex justify-center items-center">
            <input type="file" name="image" className="w-full h-full pt-7 pl-28" />
          </div> */}
          <button type="submit" className="btn btn-block btn-primary mt-3">Post</button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default PostModal;