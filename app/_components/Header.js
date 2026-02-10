import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className='border-b border-primary-800 bg-primary-950/50 backdrop-blur-sm z-10'>
      <div className='mx-auto max-w-7xl px-4 py-2 flex items-center justify-between'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
