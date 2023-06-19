import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'

export function SignInModal() {
  const session = useSession()

  function LogInWithGitHub() {
    signIn('github')
  }

  async function LogInWithGoogle() {
    await signIn('google')
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <h4 className="font-bold cursor-pointer text-purple-100">Avaliar</h4>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" bg-black/60 data-[state=open]:animate-overlayShow  fixed inset-0">
          <Dialog.Content className="data-[state=open]:animate-contentShow bg-gray-700 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px] py-14 px-16">
            <div className="flex flex-col items-center gap-10 w-full">
              <span className="text-gray-200 font-bold">
                Faça login para deixar sua avaliação
              </span>
              <div className="flex flex-col gap-4 w-96 ">
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
              </div>
            </div>
            <Dialog.Close>
              <button
                className=" absolute right-4 top-4 appearance-none "
                aria-label="Close"
              >
                <X size={24} color="#8381D9" className="  rounded-lg " />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
