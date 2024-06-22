import Link from "next/link"
import {
    // CircleUser,
    Search,
    Heart,
    Clapperboard
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

export function Dashboard() {
    return (
        <div className="grid min-h-screen w-full">
            <div className="border-r bg-muted/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <Clapperboard className="h-6 w-6" />
                            <span className="">Movie Mania</span>
                        </Link>
                        <div className="ml-auto">
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                <Heart className="h-4 w-4" />
                                <span className="sr-only">Toggle notifications</span>
                            </Button>
                            {/* <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="secondary" size="icon" className="rounded-full">
                                        <CircleUser className="h-5 w-5" />
                                        <span className="sr-only">Toggle user menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu> */}
                        </div>
                    </div>
                    <div className="flex-1">
                        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">

                            <div className="w-full flex-1">
                                <form>
                                    <div className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="search"
                                            placeholder="Search movies..."
                                            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                        />
                                    </div>
                                </form>
                            </div>

                        </header>
                        {/* <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                            <div className="flex items-center">
                                <h1 className="text-lg font-semibold md:text-2xl">Oops!</h1>
                            </div>
                            <div
                                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
                            >
                                <div className="flex flex-col items-center gap-1 text-center p-4">
                                    <h3 className="text-2xl font-bold tracking-tight">
                                        You have no movies
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        You can start searching as you add a movie.
                                    </p>
                                    <Button className="mt-4">Add Product</Button>
                                </div>
                            </div>
                        </main> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
