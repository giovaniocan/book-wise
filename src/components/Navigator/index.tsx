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
    /* router.push('/explore') */
    window.alert('explore page')
  }
  function handleToProfilePage() {
    /* router.push('/profile') */
    window.alert('profile page')
  }

  function handleSignIn() {
    /* router.push('/signin') */
    window.alert('fazendo o login')
  }

  return (
    <div className="  h-full relative flex items-start ">
      <Image
        className=" absolute opacity-75  -left-48 h-full   rounded-2xl "
        src="/sidebar-bg.svg"
        alt="Login Image"
        width={600}
        height={600}
      />
      <div className=" absolute flex pl-10 h-full flex-col  items-center justify-between ">
        <div className="pt-10 flex flex-col gap-16">
          <Image src="/logo.svg" alt="Logo" width={128} height={48} />

          <div className="flex flex-col gap-4">
            <button
              onClick={handleToHomePAge}
              className={`flex gap-3 pl-4  ${
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
              className={`flex gap-3 pl-4 ${
                pathname === '/explore'
                  ? 'border-l-4 border-x-purple-100'
                  : 'pl-5 text-gray-400'
              } `}
            >
              <Binoculars size={24} />
              <span className="text-base font-bold">Explorar</span>
            </button>
            <button
              onClick={handleToProfilePage}
              className={`flex gap-3 pl-4 ${
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
