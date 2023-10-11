"use server"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"

export default async function GMCheck({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions)
    const user = await prisma.user.findFirst({where:{email:session?.user?.email}})
    if (user?.role == "GM" || user?.role == "ADMIN" ) {
        return <>{children}</>
    } else {
        return <>Not logged in to see this</>
    }
}