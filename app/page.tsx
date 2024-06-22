// "use client"

import * as React from "react"
import Link from "next/link"

// import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Dashboard } from "./components/dashboard"

export default function Home() {
  return <main>
    <Dashboard />
    {/* <div className="flex items-center p-4 gap-4">
      <h5 className="font-extrabold text-xl">
        Movie Mania
      </h5>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div> */}
  </main>
}