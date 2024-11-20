// hooks/useFriend.js

import { useState } from 'react';

export default function useFriend() {
    const [friend, setFriend] = useState("");

    // Function to get the current friend
    const getFriend = () => {
        return friend;
    }

    // Function to set a new friend
    const updateFriend = (newFriend) => {
        setFriend(newFriend);
    };

    return { friend, getFriend, updateFriend };
}
