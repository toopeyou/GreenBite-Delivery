import { XIcon } from "lucide-react"
import { useState } from "react"

function Banner() {

    const [bannerVisible, setBannerVisible] = useState(() => {
        return sessionStorage.getItem("banner_dismissed") !== "true";
    });
    const dismissBanner = () =>{
        setBannerVisible(false)
        sessionStorage.setItem('banner_dismissed', 'true')
    }
 
    return (
    <div>{bannerVisible && (
        <div className="bg-linear-to-r from-app-green via-emerald-800 to-app-green text-white text-xs sm:text-sm relative overflow-hidden">
            <div className="flex items-center justify-between gap-2 max-w-7xl mx-auto px-4 lg:px-8 py-2">
                <span className="font-medium">
                    This is a sample UI platform designed exclusively for testing and demo.
                </span>
                <button onClick={dismissBanner}>
                    <XIcon className="size-3.5"/>
                </button>
            </div>

        </div>
    )}</div>

  )
}

export default Banner