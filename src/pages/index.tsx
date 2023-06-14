import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const session = useSession()

  function LogInWithGitHub() {
    signIn('github')
  }

  async function LogInWithGoogle() {
    await signIn('google')
  }

  function LogInAsvisitor() {
    router.push('/home')
  }

  useEffect(() => {
    async function createUser() {
      if (session.status === 'authenticated') {
        try {
          await api.post('/users', {
            name: session.data?.user?.name,
            email: session.data?.user?.email,
            avatar_url: session.data?.user?.image,
          })

          router.push('/home')
        } catch (error) {
          if (error instanceof AxiosError && error?.response?.data?.message) {
            router.push('/home')
            return
          }

          console.error(error)
        }
      }
    }

    createUser()
  }, [session, router])

  return (
    <div className="h-screen w-screen flex p-5 items-center ">
      <div className="h-full flex items-center  justify-center w-2/5 relative ">
        <Image
          className="absolute h-full w-full opacity-75 rounded-2xl "
          src="/Login-image.png"
          alt="Login Image"
          width={600}
          height={600}
        />
        <Image
          className="absolute"
          src="/logo.svg"
          alt="Logo"
          width={232}
          height={48}
        />
      </div>
      <div className="  h-full w-3/5 -mt-28  flex items-center justify-center">
        <div className="w-80">
          <h2 className="text-2xl font-bold">Boas Vindas !</h2>
          <span className="text-base text-gray-200 ">
            Faça login ou acesse como visitante
          </span>
          <div className="mt-10 flex flex-col  gap-4 ">
            <button
              onClick={LogInWithGoogle}
              className=" bg-gray-600 px-6 py-5 flex gap-5 rounded-lg"
            >
              <Image src="google-icon.svg" alt="" width={32} height={32} />
              <span className="text-lg font-bold text-gray-200">
                Entrar com Google
              </span>
            </button>
            <button
              onClick={LogInWithGitHub}
              className=" bg-gray-600 px-6 py-5 flex gap-5 rounded-lg"
            >
              <Image src="github-icon.svg" alt="" width={32} height={32} />
              <span className="text-lg font-bold text-gray-200">
                Entrar com GitHub
              </span>
            </button>
            <button
              onClick={LogInAsvisitor}
              className=" bg-gray-600 px-6 py-5 flex gap-5 rounded-lg"
            >
              <Image src="RocketLaunch.svg" alt="" width={32} height={32} />
              <span className="text-lg font-bold text-gray-200">
                Entrar como visitante
              </span>
            </button>
          </div>
          {JSON.stringify(session)}
          {session.data?.user.image && (
            <img src={session.data?.user.image} alt="" />
          )}
        </div>
      </div>
    </div>
  )
}
