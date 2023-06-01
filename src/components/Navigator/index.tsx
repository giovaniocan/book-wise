import { Binoculars, ChartLineUp, SignIn, User } from '@phosphor-icons/react'
import Image from 'next/image'

export function Navigator() {
  return (
    <div className="p-5 w-80 h-full flex flex-col justify-between ">
      <div>
        <Image src="/logo.svg" alt="Logo" width={128} height={48} />

        <div>
          <div>
            <ChartLineUp />
            Início
          </div>
          <div>
            <Binoculars />
            Explorar
          </div>
          <div>
            <User />
            Perfil
          </div>
        </div>
      </div>
      <div>
        <h3>Fazer Login</h3>
        <SignIn />
      </div>
    </div>
  )
}
