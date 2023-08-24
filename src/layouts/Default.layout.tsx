import { PropsWithChildren } from "react";

export function DefaultLayout({
  children
}: PropsWithChildren): JSX.Element {
  return(
    <main className="flex flex-col justify-center px-8">
      {children}
    </main>
  )
}