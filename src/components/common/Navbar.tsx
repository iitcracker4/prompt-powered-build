
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useUser, useThemeStore } from '@/store/store';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const { user, isLoggedIn, logout } = useUser();
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">Ultimate AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-codebase-600 transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-sm font-medium hover:text-codebase-600 transition-colors">
            Features
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-codebase-600 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-codebase-600 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <span className="hidden sm:inline">{user?.name}</span>
                  <div className="w-8 h-8 rounded-full bg-codebase-100 flex items-center justify-center text-codebase-600 font-medium">
                    {user?.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/projects">My Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button className="bg-gradient-to-r from-codebase-600 to-purple-500 hover:from-codebase-700 hover:to-purple-600" asChild>
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          )}
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
