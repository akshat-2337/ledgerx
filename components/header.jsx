import { Button } from "@base-ui/react";
import { SignInButton, UserButton, SignUpButton, Show, SignedIn } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b" >

      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src={"/logo.png"} alt="ledgerx logo" height={60} width={200} 
           className="h-12 w-auto object-contain"/>
        </Link>
      

         <div>        
         <Show when="signed-in">
          <Link href={"/dashboard"}>
            <Button variant="outline">
             <LayoutDashboard size={18} /> 
             <span className="hidden md:inline">Dashboard</span> 
            </Button>
          </Link>
        </Show>
        </div>


       <div> 
       <Show when="signed-out">
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline">Login</Button>
              </SignInButton>
        </Show>
        </div>

        

        
      </nav>
    </div>
  )
}

export default Header;
