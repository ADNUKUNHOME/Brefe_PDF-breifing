import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function HeroSection() {
  return (
    <section>
      <div className="">
        <div className="flex">
          <div className="relative p-1.5 rounded-full text-white animate-gradient-x flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            <Badge className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200">
              <Sparkles className="w-6 h-6 text-violet-700 animate-pulse mr-2" />
              <p>Powered by AI</p>
            </Badge>
          </div>
        </div>
        <h1>Transform PDFs Into Brief Summaries</h1>
        <p>Get an incredible short hands of your documents in seconds</p>
        <Button>Try Brefe</Button>
      </div>
    </section>
  );
}
