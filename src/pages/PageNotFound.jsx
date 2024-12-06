import { MagneticButton } from "../components/Aboutme";
import {ArrowUpRight} from "lucide-react"

function PageNotFound() {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-9xl font-bold text-primarytext">404</h1>
          <p className="text-bline">Page not found</p>

          <a href="/">
          <MagneticButton className={"mt-3"}>
            Go to Home Page <ArrowUpRight/>
          </MagneticButton>
          </a>
        </div>
      </div>
    )
  }
  
  export default PageNotFound