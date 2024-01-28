import React, { useEffect, useState } from 'react'





function Home() {
    const [backendData, setBackendData] = useState('')

    useEffect(() => {
       
        fetch('/api')
            .then((response) => {
                const res = response.json();
                return res;
            })
            .then((data) => {
                console.log(data)
                setBackendData(data);
            })
    }, [])
    return (
        <div>

            {/* {backendData && backendData.map(({users})=>{
    <h1>{users.userone}</h1>

})} */}

            {/* {(typeof backendData.users === 'undefined') ? (
                <p>Loading...</p>
                ) : (
                        backendData.users.map((user, i) => {
                            <p key={i}>{user.userone}</p>
                        })
                    )} */}
            {(typeof backendData.users === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                backendData.users.map((user, i) => (
                    <p key={i}>{user}</p>
                ))
            )}

        </div>
    )
}

export default Home
