import { useState } from "react"
import { heroSectionData } from "../assets/assets"
import { Link } from "react-router-dom"
import { BikeIcon, LockIcon, UserIcon, MailIcon, Loader2Icon} from "lucide-react"
function Login() {
  const [isLoginState, setIsLoginState] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const handleSubmot = async ()=> (e: React.SubmitEvent)=>{
    e.preventDefault()
    setLoading(true)
    setTimeout(()=> window.location.href = '/', 999)
  }
  return (
    <div className="min-h-screen flex">
        <div className="flex-1 flex-center px-4 py-12 bg-app-cream">
          <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <Link className="inline-flex items-center gap-2 mb-6" to={'/'}>
                  <BikeIcon className="size-8 text-green-800"></BikeIcon>
                  <span className="text-green-800 text-2xl font-semibold">GreenBite Delivery</span>
                </Link>
                <h1 className="text-2xl font-semibold text-app-green mb-2">
                  {isLoginState ? "Sign in to your account" : 'Sign up for an account'}
                </h1>
                <p className="text-sm text-app-text-light">
                  {isLoginState ? "Don't have an account" : 'Already have an account'}
                  <button className="text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors" onClick={()=>setIsLoginState(!isLoginState)}>{isLoginState ? 'Create one': 'Sign in'}</button>
                </p>
              </div>
              <form onSubmit={handleSubmot} className="space-y-5">
                {!isLoginState && (
                  <label className="text-sm flex flex-col gap-1">
                      Name
                      <div className="relative">
                        <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"></UserIcon>
                        <input type="text"
                        placeholder="Your name"
                        value={name}
                        required
                        onChange={(e)=>setName(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                        />
                      </div>
                  </label>
                )}
                <label className="text-sm flex flex-col gap-1">
                      E-Mail
                      <div className="relative">
                        <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"></MailIcon>
                        <input type="email"
                        placeholder="Your name"
                        value={email}
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                        />
                      </div>
                  </label>
                  <label className="text-sm flex flex-col gap-1">
                      Password    
                      <div className="relative">
                        <LockIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"></LockIcon>
                        <input type="password"
                        placeholder="******"
                        value={password}
                        required
                        onChange={(e)=>setPassword(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                        />
                      </div>
                  </label>
                  <button type="submit" disabled={loading} className="flex-center w-full py-3 bg-green-950 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50">
                    {loading ? <Loader2Icon className="animate-spin" /> : isLoginState ? 'Sign in' : 'Sign up'}
                  </button>
              </form>
          </div>
        </div>

                <div className="hidden lg:flex lg:w-1/2 bg-app-green relative items-center justify-center">
          <img src={heroSectionData.hero_image} alt="" className="absolute inset-0 object-cover h-full bg-center opacity-10" />

          <div className="relative text-center px-12">
            <h2 className="text-4xl font-semibold text-white mb-4">
             {isLoginState ? " Welcome Back" : ' Welcome'}
            </h2>
          </div>
        </div>


    </div>
  )
}

export default Login