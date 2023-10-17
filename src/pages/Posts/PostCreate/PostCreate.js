import React, { useContext, useState } from 'react';
import PostModal from './PostModal';
import { AuthContext } from '../../../contexts/AuthProvider';

const PostCreate = () => {
    const {user} = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);

    // if(loading){
    //     return <Loader></Loader>
    // }

    const handleModal = () =>{
        setOpenModal(true);
    }
    return (
        <div>
            <div className='w-[350px] md:w-[550px] mx-auto py-7 , rounded-sm shadow-xl'>
            <div className="flex items-center mx-auto px-5">
                <div className=''>
                    <img src={user?.photoURL} alt="" className='w-[50px] rounded-full' />
                </div>
                <div className='w-full ml-3'>
                <label onClick={handleModal} htmlFor="post-create-modal" className="btn btn-active btn-ghost btn-block rounded-3xl">What's on your mind?</label>
                </div>
            </div>
            <div className="divider"></div>

            {
                openModal === true &&
                <PostModal
                    setOpenModal = {setOpenModal}
                ></PostModal>
            }
           
        </div>
        </div>
    );
};

export default PostCreate;