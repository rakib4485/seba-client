import React, { useEffect, useState } from 'react';

const useUser = (email) => {
    const [isUser, setIsUser] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/isUser/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.isUser);
                    setIsUser(data.isUser);
                    setIsUserLoading(false);
                })
        }
    }, [email])
    return [isUser, isUserLoading]
};

export default useUser;