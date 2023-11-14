import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader/Loader'

const BlogCards = () => {

    const {data: diseases = [] , isLoading} = useQuery({
        queryKey: ['diseases'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/blogs');
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loader/>
    }

    

    return (
        <div>
            {diseases.map(disease => <BlogCard key={disease._id} disease={disease}/>)}
        </div>
    );
};

export default BlogCards;