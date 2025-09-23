/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/Brenobn.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Breno Braga</span>
        <span className="truncate text-sm text-zinc-500">brenod@gmail.com</span>
      </div>
      <Button type="button" variant="tertiary">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
