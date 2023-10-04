import { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function About() {

    const [user,setUser] = useState('lugi')

  if(!user) {
    return <Navigate to='/' replace={true}/>
  }


    return (
        <div className="about">
               <h2>About us</h2>
               <p>The function takes in an integer n, which represents the number of versions. We start by initializing left to 1 and right to n.

In the while loop, we calculate the midpoint mid using Math.floor((left + right) / 2) and call isBadVersion(mid) to determine whether the midpoint is bad or not.

If the midpoint is bad, we know that all versions after mid are also bad, so we update right to mid. Otherwise, we know that all versions before mid are good, so we update left to mid + 1.

We continue updating left and right until they converge to a single version, at which point we know that we have found the first bad version.

Note that the implementation assumes that the isBadVersion API function is already provided and returns a boolean indicating whether a given version is bad or not.</p>
        <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}