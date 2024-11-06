import { ReactNode } from "react"

function ProductLayout({children,}:{children: ReactNode}) {
  return (
    <div>{children}
    <div><h2>features branch</h2></div>
    </div>
  )
}

export default ProductLayout