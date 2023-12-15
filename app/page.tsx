import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1 className="m-4">Hi Next.</h1>
      <Link href="/users">Users</Link>
    </main>
  )
}
