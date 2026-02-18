import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image'
import { Analytics } from "@vercel/analytics/next";
import NotificationsLayer from "@/Components/Notifications";
import { BackToTop } from "@/Components/animate-ui/back-to-top";

export const metadata: Metadata = {
  title: { default: 'Elevon Studios', template: '%s | Elevon Studios' },
  description: "Elevating the next generation of Metaverse experiences",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/elevon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.elevon.gg" />
      </head>
      <body className="antialiased bg-[#000000]">
        <Analytics />
        <NotificationsLayer />

        <div className="relative z-10">
          {children}
        </div>

        <footer className="relative z-10 border-t border-white/[0.04] py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Image src={"/elevon-transparent.svg"} width={100} height={100} quality={100} alt="elevon logo" className="size-5 opacity-40" />
              <span className="text-zinc-500 text-sm">© 2026 Elevon. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
            </div>
          </div>
        </footer>
        <BackToTop />
      </body>
    </html>
  );
}
