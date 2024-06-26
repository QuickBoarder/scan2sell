import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import "@uploadthing/react/styles.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600","700","800","900"],
});

export const metadata: Metadata = {
    title: "Scan2Sell",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={poppins.className}>
                <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)}
                />
                    {children}
                    </body>
            </html>
        </ClerkProvider>
    );
}
