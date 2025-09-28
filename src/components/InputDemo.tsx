import { Input } from "@/components/ui/input"
import type { IInput } from "@/types/IInput"

export function InputDemo({placeholder,type}:IInput) {
  return <Input className="w-[244] h-[37]" 
  type={type} placeholder={placeholder} />
}
