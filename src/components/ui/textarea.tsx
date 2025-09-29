import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-w-0 px-3 py-2 text-base md:text-sm",
        "bg-transparent border transition-colors outline-none shadow-xs resize-none",
        "placeholder:opacity-70 selection:bg-primary selection:text-primary-foreground",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:ring-[3px] focus-visible:outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
