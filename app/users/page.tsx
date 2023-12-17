import React from "react"

interface User {
  id: number
  name: string
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  console.log("data", data)
  const users: User[] = data

  // .then((response) => response.json())
  // .then((json) => console.log(json))

  return (
    <div>
      <div className="users">
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  )
}

export default UsersPage
