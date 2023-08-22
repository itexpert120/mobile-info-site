"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { FiSearch, FiSmartphone } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // const menuItems = ["Home", "Brands", "About", "Contact Us"];
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Brands", href: "/brands" },
    { label: "About", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBlurred
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <FiSmartphone className="text-xl mr-2" />
          <p className="font-bold text-inherit">Mobile Info Site</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/brands" color="foreground">
            Brands
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent as="div" className="items-center" justify="end">
        <Button
          variant="faded"
          startContent={<FiSearch />}
          onPress={() => router.push("/search")}
        >
          Search devices...
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
