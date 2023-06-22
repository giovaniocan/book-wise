import { Binoculars, ChartLineUp, SignIn, User } from '@phosphor-icons/react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import { SignOut } from 'phosphor-react'

export function Navigator() {
  const router = useRouter()
  const { pathname } = router
  const { data: session } = useSession()
  const user = session?.user
  if (user) {
    setCookie(null, '@bookwise:userEmail', user.email, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/', // all routes can access this cookie
    })
  }

  async function handleSignIn() {
    await signIn('google')
  }

  async function handleSignOut() {
    await signOut()
  }

  return (
    <aside className="  h-full flex p-5 ">
      <div className=" bg-[url('/sidebar.png')] flex rounded-2xl px-14 h-full flex-col  items-center justify-between ">
        <div className="pt-10 flex flex-col gap-16">
          <Image src="/logo.svg" alt="Logo" width={128} height={48} />

          <div className="flex flex-col gap-4">
            <Link
              href="/home"
              className={`flex gap-3 pl-4 hover:text-gray-100  ${
                pathname === '/home'
                  ? 'border-l-4 border-x-purple-100'
                  : 'pl-5 text-gray-400'
              } `}
            >
              <ChartLineUp size={24} />
              <span className="text-base font-bold">Início</span>
            </Link>
            <Link
              href="/explorer"
              className={`flex gap-3 pl-4 hover:text-gray-100 ${
                pathname === '/explorer'
                  ? 'border-l-4 border-x-purple-100'
                  : 'pl-5 text-gray-400'
              } `}
            >
              <Binoculars size={24} />
              <span className="text-base font-bold">Explorar</span>
            </Link>
            {user && (
              <Link
                href="/profile"
                className={`flex gap-3 pl-4 hover:text-gray-100 ${
                  pathname === '/profile'
                    ? 'border-l-4 border-x-purple-100'
                    : 'pl-5 text-gray-400'
                } `}
              >
                <User size={24} />
                <span className="text-base font-bold">Perfil</span>
              </Link>
            )}
          </div>
        </div>
        {!user ? (
          <div className=" flex pb-6 items-center gap-4 ">
            <h3>Fazer Login</h3>
            <button onClick={handleSignIn}>
              <SignIn size={20} color="#50B2C0" />
            </button>
          </div>
        ) : (
          <div className="flex gap-3  pb-6 items-center ">
            <Image
              src={user.image || user.avatar_url}
              height={40}
              width={40}
              alt="capa do livro"
              className=" rounded-full p-[2px]  bg-gradient-horizontal"
            />
            <span className="text-sm text-gray-200 whitespace-nowrap overflow-hidden">
              <span className="text-truncate">{user.name}</span>
            </span>
            <button onClick={handleSignOut}>
              <SignOut size={20} color="#F75A68" />
            </button>
          </div>
        )}
      </div>
    </aside>
  )
}
