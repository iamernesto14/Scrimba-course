import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';

const myContext = createContext();
function UserContext({children}) {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    async function fetchData(url) {
        try {
            setLoading(true)
            const apiRequest = await fetch(url);
        const response = await apiRequest.json();
        if (response?.ok) throw new Error(response.status)
        } catch (error) {
            console.error(error)
            setLoading(false)
            setError(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    function handleClick() {
        setCount(e => e + 1)
    }


  return (
    <myContext.Provider value={{count, setCount, handleClick}}>
        {children}
    </myContext.Provider>
  )
}

export const user = () => useContext(myContext);

export default UserContext;
