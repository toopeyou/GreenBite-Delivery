import { BikeIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { footerData } from "../assets/assets"
function Footer() {
  return (
    <footer className="bg-app-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <Link to='/' className="flex items-center gap-2 mb-4">
                    <BikeIcon></BikeIcon>
                </Link>
                <p className="text-sm text-white/70 mb-4">{footerData.brand.description}</p>
            </div>
            {footerData.sections.map((section, i)=>(
                <div key={i}>
                    <h3 className="">{section.title}</h3>
                    <ul className="space-y-2.5">
                        {section.links.map((link,i)=> (
                            <li key={i}>
                                {link.to ? (
                                    <Link to={`${link.href}`} className="text-sm text-white/70 hover:text-white">
                                        {link.label}
                                    </Link>
                                ): (
                                    <a className="text-sm text-white/70 hover:text-white" href="#">
                                        {link.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <div>
                <h3 className="text-sm font-semibold uppercase mb-4">Contact With developer site</h3>
                <ul className="space-y-3">
                    {footerData.contact.map((item,i)=>{
                        const Icon = item.icon
                        return(
                         <li key={i} className="flex gap-3 text-sm text-white/70">
                            <Icon className="size-4 text-white " /> {item.text}
                        </li>
                        )

                    })}

                </ul>
            </div>


            <div></div>
            <div></div>

            </div>

            <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

                <p className="text-xs text-white/50">
                    © 2026 TOOPEYOU. All rights reserved.
                </p>
                <div className="flex gap-4">
                <Link className="text-xs text-white/50 hover:text-white/70" to={'/'}>Privacy Policy</Link>
                <Link className="text-xs text-white/50 hover:text-white/70" to={'/'}>Terms of Service</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer