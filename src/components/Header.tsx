import { NavLink, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items configuration
  const navItems = [
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/results", label: "Results" },
    { to: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center space-x-2 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            UpNxt
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center">
          <Link to="/contact">
            <Button
              className="rounded-full px-6 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              Book 15-min Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t">
          <div className="container px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block py-2 text-lg font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 space-y-3">
              <Link to="/contact" className="w-full">
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book 15-min Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
