
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { LogIn, Map, PlusCircle } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

export const Navbar = () => {
  const loggedUser = localStorage.getItem("logged_user");
  const navigate = useNavigate();

  return (
    <div className="w-full border-b bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-primary">trip</span>
          <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">er</span>
          <span className="text-sm animate-bounce mt-1 text-amber-400">★</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/explorar">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Map className="mr-2 h-4 w-4" />
                  Explorar
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/criar-roteiro">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Criar Roteiro
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {loggedUser ? (
          <Button onClick={() => navigate("/dashboard")} variant="default">
            Dashboard
          </Button>
        ) : (
          <Link to="/login">
            <Button className="flex items-center gap-2">
              <LogIn size={18} /> Entrar
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
