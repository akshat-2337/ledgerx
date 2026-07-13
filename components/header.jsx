import { SignInButton, UserButton, SignUpButton, Show } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
       <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
    </div>
  )
}

export default Header;
