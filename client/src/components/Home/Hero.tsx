import { ArrowRightIcon, Broccoli } from "lucide-react"
import { heroSectionData } from "../../assets/assets"
import { Link } from "react-router-dom"
function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[540px] mb-10 rounded-3xl flex items-center">
        <img src={heroSectionData.hero_image} alt="Hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-app-green via-app-green/65 to-transparent"/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="max-w-xl xl:pl-10">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-orange-300 bg-orange-300/10 rounded-full mb-5">
                    <Broccoli/>
                     Fresh from the Fields & Organic
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
                    Bring nature’s best into your home
                </h1>
                <p className="text-base text-white/70 leading-relaxed mb-8 max-w-md">Farm-fresh organic essentials, delivered straight to your door. Taste the quality, enjoy the convenience.</p>
                <div className="flex flex-wrap gap-3">
                    <Link className="px-7 py-3 bg-green-400 text-white font-semibold rounded-full hover:bg-green-600 transition-all flex-center gap-2 active:scale-[0.98]" to={'/products'}>
                        Shop now <ArrowRightIcon className="size-4"/>
                    </Link>
                    <Link className="px-7 py-3 text-white font-semibold rounded-full hover:bg-green-600 transition-all flex-center gap-2 active:scale-[0.98]" to={'/products'}>
                    Browse Categories <ArrowRightIcon className="size-4"/>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero