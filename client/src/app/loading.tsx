import { FaCircleNotch } from "react-icons/fa";

export default function AppLoading() {
  return (
    <div className="min-h-screen min-w-full bg-zinc-50 flex items-center justify-center">
      <div className="">
        <FaCircleNotch className="animate-spin text-zinc-500 text-5xl"/>
      </div>
    </div>
  )
}