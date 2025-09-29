import { Input} from "@/components/ui/input"
import type { IInput } from "@/types/IInput"
import { Textarea } from "./ui/textarea"

export function InputDemo({placeholder,type,className}:IInput) {
  return <Input className={className} 
  type={type} placeholder={placeholder} />
}

export function TextArea({className,placeholder}:IInput){
  return <Textarea  className={className}
      placeholder={placeholder}
      
      />
}