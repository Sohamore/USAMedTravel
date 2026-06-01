import { MessageCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg text-white">
              <span className="size-8 rounded-xl gradient-sky flex items-center justify-center">✚</span>
              USAMedTravel
            </div>
            <p className="text-sm mt-4 leading-relaxed">
              Access America's top doctors without leaving home. AI-powered, concierge-led, globally available.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="size-9 rounded-full glass-dark flex items-center justify-center hover:bg-white/10">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display font-semibold text-white mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              {["About", "Services", "Specialities", "Hospitals", "How It Works", "Pricing", "FAQ", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(/\s/g, "")}`} className="hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display font-semibold text-white mb-4">Services</div>
            <ul className="space-y-2 text-sm">
              {["Second Opinions", "Radiology Review", "Oncology Navigation", "Teleconsultation", "Treatment Planning", "Medical Travel"].map((l) => (
                <li key={l}><a href="#services" className="hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display font-semibold text-white mb-4">Trust & Legal</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">HIPAA-Style Privacy</a></li>
              <li><a href="#" className="hover:text-white">GDPR Notice</a></li>
            </ul>
            <a href="https://wa.me/919821629786" target="_blank" rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] text-sm font-semibold transition-all duration-300 shadow-md">
              <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.816 9.816 0 0 0 4.73 1.206h.005c5.46 0 9.908-4.448 9.913-11.913a9.807 9.807 0 0 0-2.902-7.008zM11.992 20.15h-.005a8.093 8.093 0 0 1-4.135-1.132l-.297-.176-3.078.807.82-3.003-.192-.306A8.094 8.094 0 0 1 3.88 11.91c0-4.469 3.639-8.106 8.117-8.106a8.077 8.077 0 0 1 5.732 2.378 8.074 8.074 0 0 1 2.373 5.733c-.005 4.47-3.644 8.106-8.11 8.106zm4.446-6.07c-.244-.122-1.44-.71-1.662-.792-.222-.082-.383-.122-.544.122-.162.244-.627.792-.768.953-.142.162-.283.183-.527.061a6.634 6.634 0 0 1-3.268-2.857c-.25-.43-.037-.663.18-.88.196-.195.438-.51.657-.765.07-.082.13-.153.176-.214.1-.143.14-.245.204-.388.064-.143.033-.265-.015-.367-.049-.102-.433-1.04-.593-1.428-.156-.378-.328-.327-.45-.333l-.384-.007c-.244 0-.643.092-.98.47a2.827 2.827 0 0 0-.88 2.09c0 1.233.897 2.428 1.02 2.592.122.163 1.764 2.693 4.274 3.778.597.258 1.064.412 1.428.528.6.19 1.145.163 1.576.099.48-.072 1.44-.588 1.642-1.155.202-.567.202-1.053.141-1.155-.06-.102-.222-.163-.466-.285z" fill="white" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs space-y-3">
          <p className="italic">
            USAMedTravel facilitates access to medical expertise and healthcare navigation services.
            Final diagnosis and treatment decisions remain the responsibility of licensed medical professionals.
          </p>
          <p className="text-white/60">
            For medical emergencies, contact your local emergency services immediately. This site does not provide emergency care.
          </p>
          <p className="text-white/50">© {new Date().getFullYear()} USAMedTravel. All rights reserved.</p>
          {/* BUILD v18 — 2026-05-31 */}
          <p className="text-white/20 text-[10px]">v18</p>
        </div>
      </div>
    </footer>
  );
}
