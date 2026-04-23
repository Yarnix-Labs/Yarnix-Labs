const WhatsAppButton = () => (
  <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50">
    {/* Ripple rings */}
    <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-[wa-ring_2.5s_ease-out_infinite]" />
    <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-[wa-ring_2.5s_ease-out_0.8s_infinite]" />
    <a
      href="https://wa.me/94758121435"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="relative flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 animate-[wa-bounce_3s_ease-in-out_infinite]"
    >
      <svg viewBox="0 0 32 32" fill="white" className="h-8 w-8 sm:h-9 sm:w-9">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.31 22.606c-.39 1.1-1.932 2.012-3.182 2.278-.856.18-1.974.324-5.738-1.234-4.818-1.994-7.916-6.878-8.158-7.196-.232-.318-1.952-2.6-1.952-4.96s1.234-3.518 1.672-3.998c.39-.428 1.03-.642 1.644-.642.198 0 .376.01.536.018.438.02.658.046.948.732.362.858 1.246 3.038 1.354 3.26.11.222.184.48.036.77-.138.298-.208.484-.414.742-.206.258-.434.576-.618.774-.206.222-.422.464-.182.91.24.444 1.068 1.762 2.294 2.854 1.578 1.404 2.908 1.838 3.32 2.04.412.202.654.17.894-.102.248-.278 1.06-1.234 1.342-1.66.276-.426.558-.356.938-.214.384.138 2.436 1.148 2.852 1.358.416.21.694.316.796.488.1.17.1.998-.29 2.1z" />
      </svg>
    </a>
  </div>
);

export default WhatsAppButton;
