import { useTheme } from "@/provider/ThemeProvider"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function ModeToggle() {
  const { theme, setTheme } = useTheme()
const themeToggle = () =>{
  setTheme(theme === "light" ? "dark" : "light")
}
  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
         
          
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <button
    onClick={themeToggle}>
      {
      theme === "light" ?
       <Sun className="h-[1.2rem] w-[1.2rem] " />
       :<Moon className=" h-[1.2rem] w-[1.2rem]" />
      }
      </button>
  )
}
