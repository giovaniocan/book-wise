import { Binoculars, ChartLineUp, SignIn, User } from '@phosphor-icons/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export function Navigator() {
  const router = useRouter()
  const { pathname } = router

  function handleToHomePAge() {
    router.push('/home')
  }
  function handleToExplorePAge() {
    router.push('/explorer')
  }
  function handleToProfilePage() {
    router.push('/profile')
  }

  function handleSignIn() {
    /* router.push('/signin') */
    window.alert('fazendo o login')
  }

  return (
    <div className="  h-full flex p-5 ">
      <div className=" bg-[url('/sidebar.png')] flex rounded-2xl px-14 h-full flex-col  items-center justify-between ">
        <div className="pt-10 flex flex-col gap-16">
          <Image src="/logo.svg" alt="Logo" width={128} height={48} />

          <div className="flex flex-col gap-4">
            <button
              onClick={handleToHomePAge}
              className={`flex gap-3 pl-4 hover:text-gray-100  ${
                pathname === '/home'
                  ? 'border-l-4 border-x-purple-100'
                  : 'pl-5 text-gray-400'
              } `}
            >
              <ChartLineUp size={24} />
              <span className="text-base font-bold">Início</span>
            </button>
            <button
              onClick={handleToExplorePAge}
              className={`flex gap-3 pl-4 hover:text-gray-100 ${
                pathname === '/explorer'
                  ? 'border-l-4 border-x-purple-100'
                  : 'pl-5 text-gray-400'
              } `}
            >
              <Binoculars size={24} />
              <span className="text-base font-bold">Explorar</span>
            </button>
            <button
              onClick={handleToProfilePage}
              className={`flex gap-3 pl-4 hover:text-gray-100 ${
                pathname === '/profile'
                  ? 'border-l-4 border-x-purple-100'
                  : 'pl-5 text-gray-400'
              } `}
            >
              <User size={24} />
              <span className="text-base font-bold">Perfil</span>
            </button>
          </div>
        </div>
        <div className=" flex pb-6 items-center gap-4 ">
          <h3>Fazer Login</h3>
          <button onClick={handleSignIn}>
            <SignIn color="#50B2C0" />
          </button>
        </div>
      </div>
    </div>
  )
}
