import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "New Posts",
      href: "/",
      description:
        "Lorem ipsum.",
    },
    {
      title: "New Profile Posts",
      href: "/",
      description:
        "Lorem ipsum.",
    },
    {
      title: "Your News Feed",
      href: "/",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Latest Activity",
      href: "/",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]

export function Navbar() {
return (
    
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Forums
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>What's New</NavigationMenuTrigger>
                            <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <ListItem href="/docs" title="New posts">
                                    [TODO]
                                </ListItem>
                                <ListItem href="/docs/installation" title="New profile posts">
                                    [TODO]
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Your news feed">
                                    [TODO]
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Latest activity">
                                    [TODO]
                                </ListItem>
                            </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Members</NavigationMenuTrigger>
                            <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <ListItem href="/docs" title="Member list">
                                    [TODO]
                                </ListItem>
                                <ListItem href="/docs/installation" title="Current visitors">
                                    [TODO]
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="New profile posts">
                                    [TODO]
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Search profile posts">
                                    [TODO]
                                </ListItem>
                            </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        </div>
    </nav> 
);}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"