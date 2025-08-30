import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Activities",
  };

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          suppressHydrationWarning
        >
          {children}
        </body>
      </html>
    );
  }