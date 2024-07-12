import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#tutorials",
    label: "Tutorials",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:border-b dark:border-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-medium flex items-center">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-medium text-xl flex items-center"
            >
              <div className="flex items-center">
                <LogoIcon />
                <span className="ml-2 ">The Script App</span>
              </div>
            </a>
          </NavigationMenuItem>

          {/* Mobile Menu Trigger */}
          <span className="flex md:hidden items-center">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>
            
              {/* Mobile Menu Content */}
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="text-xl">The Script App</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:text-green-500"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-12 items-center">
            {routeList.map((route: RouteProps, i) => (
              <a
                key={i}
                href={route.href}
                className="text-lg text-black-700 dark:text-gray-300 transition-colors duration-200 hover:text-green-500"
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* Mode Toggle Button */}
          <div className="hidden md:flex items-center">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
