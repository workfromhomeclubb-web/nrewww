import { Instagram, Youtube, Twitter, Facebook } from "lucide-react";

export default function SocialBar() {
  return (
    <div className="hidden lg:flex flex-col items-center gap-3 fixed right-4 top-1/2 -translate-y-1/2 z-40">
      <a
        href="#"
        aria-label="Twitter"
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <Twitter className="h-4 w-4" />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <Instagram className="h-4 w-4" />
      </a>
      <a
        href="#"
        aria-label="Facebook"
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <Facebook className="h-4 w-4" />
      </a>
      <a
        href="#"
        aria-label="YouTube"
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <Youtube className="h-4 w-4" />
      </a>
    </div>
  );
}
