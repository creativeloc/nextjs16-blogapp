import type { ReactNode } from "react"

interface AbcLayoutProps {
  children: ReactNode
}

function AbcLayout({ children }: AbcLayoutProps) {
  return (
    <div>
      <h1>Hello from Abc Layout</h1>
      {children}
    </div>
  )
}
export default AbcLayout
