import React from "react"

interface User {
  id: number
  name: string
  email: string
}

const UsersPage = async () => {
  // Only fetch has access to Next.js cache functionality
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
    // cache: "no-store",
  })
  const data = await response.json()
  console.log("data", data)
  const users: User[] = data

  // .then((response) => response.json())
  // .then((json) => console.log(json))

  return (
    <div>
      <div className="users">
        {users.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersPage
