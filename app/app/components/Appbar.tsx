"use-client"

import { useSession, signOut, signIn} from "next-auth/react"


export function Appbar() {
    const session = useSession(); 
    return (
    <div>
        <div className="flex justify-between">
        Musically
    </div>
    <div>
    {session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={() => signOut()}> LogOut </button>}
    {!session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}> Login </button>}
    </div>
    </div> )
}