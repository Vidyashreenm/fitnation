"use client";

export default function Home() {

  const whatsapp = "https://wa.me/91XXXXXXXXXX";
  const call = "tel:+91XXXXXXXXXX";
  const instagram = "https://instagram.com/yourgym";
  const map = "https://www.google.com/maps?q=13.1214443,77.622367";

  const features = [
    {
      icon: "🏋️",
      title: "World-Class Equipment",
      desc: "Fully loaded with premium fitness machines and free weights.",
    },
    {
      icon: "🎓",
      title: "Certified Trainers",
      desc: "Expert coaches dedicated to your goals and growth.",
    },
    {
      icon: "✨",
      title: "Spacious & Hygienic",
      desc: "Large open training zones kept spotlessly clean.",
    },
    {
      icon: "🕐",
      title: "Flexible Timings",
      desc: "Open early morning to late night, 7 days a week.",
    },
    {
      icon: "🤝",
      title: "Supportive Community",
      desc: "A motivating tribe that pushes you to be your best.",
    },
  ];

  const recovery = [
    {
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      title: "Ice Bath Recovery",
      highlight: true,
      desc: "Speed up recovery and reduce inflammation with cold immersion.",
    },
    {
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
      title: "Steam Therapy",
      highlight: false,
      desc: "Relax muscles, clear your mind, detox after every session.",
    },
    {
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
      title: "CrossFit Arena",
      highlight: false,
      desc: (
        <>
          <span style={{ color: "#facc15" }}>Among the Largest in Bangalore.</span> Full access, priority support, advanced guidance.
        </>
      ),
    },
    {
      img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&q=80",
      title: "Personalized CrossFit Training",
      highlight: true,
      desc: "CrossFit coaches and dietitian for powerlifting and goals.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Floating WhatsApp */}
      <a
        href={whatsapp}
        target="_blank"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 1000,
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(37,211,102,0.5)",
          fontSize: "28px",
          textDecoration: "none",
        }}
      >
        💬
      </a>

      {/* NAVBAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 32px",
          backgroundColor: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(8px)",
          zIndex: 50,
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/images/logo.png"
            alt="Fit Nation Logo"
            style={{
              width: "72px",
              height: "auto",
              mixBlendMode: "lighten",
            }}
          />
          <div>
            <h1 style={{ fontSize: "20px", fontWeight: 900, color: "#fff", letterSpacing: "2px", margin: 0, lineHeight: 1.1 }}>
              FIT NATION
            </h1>
            <p style={{ fontSize: "9px", color: "#facc15", letterSpacing: "3px", margin: 0, fontWeight: 600, textTransform: "uppercase" }}>
              Inspire Fitness
            </p>
          </div>
        </div>
        <a href={whatsapp}>
          <button
            style={{
              border: "1.5px solid #facc15",
              color: "#facc15",
              backgroundColor: "transparent",
              padding: "8px 22px",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "1px",
              fontSize: "14px",
            }}
          >
            Join Now
          </button>
        </a>
      </div>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={(e) => {
            const el = e.currentTarget as HTMLVideoElement;
            el.style.display = "none";
            const fallback = document.getElementById("hero-fallback");
            if (fallback) (fallback as HTMLImageElement).style.display = "block";
          }}
          style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        >
          {/* ✅ Place your video file at: /public/videos/hero.mp4 */}
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.webm" type="video/webm" />
        </video>

        {/* Fallback image shown automatically if video fails to load */}
        <img
          id="hero-fallback"
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=90"
          alt="Gym hero"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&q=90";
          }}
          style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", display: "none", zIndex: 0 }}
        />

        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5))", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, padding: "0 24px", maxWidth: "760px" }}>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 12px" }}>
            Transform Your <span style={{ color: "#facc15" }}>Body</span>
          </h1>
          <h2 style={{ fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 600, margin: "0 0 8px" }}>
            at Bangalore's <span style={{ color: "#facc15" }}>Most Advanced</span> Fitness Hub
          </h2>
          <p style={{ color: "#d1d5db", fontSize: "16px", marginBottom: "6px" }}>
            Home to <span style={{ color: "#facc15" }}>One of the Largest</span> Personalized{" "}
            <span style={{ color: "#facc15" }}>CrossFit Arenas</span>
          </p>
          <p style={{ color: "#d1d5db", fontSize: "15px", marginBottom: "6px" }}>
            Ice Bath · Steam · Premium Training
          </p>
          <p style={{ color: "#facc15", fontWeight: 600, fontSize: "16px", marginBottom: "28px" }}>
            Train Smarter. Recover Better. Perform Stronger.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={whatsapp}>
              <button
                style={{
                  backgroundColor: "#facc15",
                  color: "#000",
                  padding: "14px 36px",
                  fontWeight: 800,
                  fontSize: "16px",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "1px",
                }}
              >
                Join Now
              </button>
            </a>
            <a href={whatsapp}>
              <button
                style={{
                  border: "2px solid #facc15",
                  color: "#facc15",
                  backgroundColor: "transparent",
                  padding: "14px 36px",
                  fontWeight: 700,
                  fontSize: "16px",
                  cursor: "pointer",
                  letterSpacing: "1px",
                }}
              >
                Book Free Trial
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section style={{ padding: "64px 24px", textAlign: "center", backgroundColor: "#111" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px" }}>
          Welcome to <span style={{ color: "#facc15" }}>Fit Nation</span>
        </h2>
        <p style={{ color: "#9ca3af", maxWidth: "640px", margin: "0 auto", fontSize: "15px", lineHeight: "1.7" }}>
          At Fit Nation, we believe fitness is not just about working out — it's about a stronger, healthier lifestyle.
          Our gym is designed to give you a premium training environment where every visit counts.
        </p>
      </section>

      {/* WHY SECTION */}
      <section style={{ padding: "64px 24px", textAlign: "center", backgroundColor: "#0d0d0d" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "48px" }}>
          Why <span style={{ color: "#facc15" }}>Fit Nation?</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                backgroundColor: "#0a0a0a",
                border: "1px solid #2a2a2a",
                padding: "28px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  border: "2px solid #facc15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                {f.icon}
              </div>
              <p style={{ fontWeight: 700, fontSize: "15px", margin: 0 }}>
                {f.title.split(" ").map((word, i) =>
                  ["Trainers", "Hygienic", "Timings", "Community"].includes(word) ? (
                    <span key={i} style={{ color: "#facc15" }}>{word} </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </p>
              <p style={{ color: "#9ca3af", fontSize: "12px", margin: 0, lineHeight: "1.5" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECOVERY SECTION */}
      <section style={{ padding: "64px 24px", textAlign: "center", backgroundColor: "#111" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "48px" }}>
          Premium <span style={{ color: "#facc15" }}>Recovery & Performance</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {recovery.map((item) => (
            <div key={item.title} style={{ backgroundColor: "#0a0a0a", overflow: "hidden" }}>
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "16px" }}>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "15px",
                    marginBottom: "8px",
                    color: item.highlight ? "#facc15" : "#fff",
                  }}
                >
                  {item.title}
                </p>
                <p style={{ color: "#9ca3af", fontSize: "12px", lineHeight: "1.6", margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BIG BANNER */}
      <section style={{ position: "relative", height: "320px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          alt="CrossFit arena"
          style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.72)" }} />
        <div style={{ position: "relative", zIndex: 10, padding: "0 24px" }}>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 40px)", fontWeight: 900, margin: "0 0 12px" }}>
            Bangalore's <span style={{ color: "#facc15" }}>Largest CrossFit Experience</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "16px", margin: 0 }}>
            Not just workouts — a complete performance system
          </p>
        </div>
      </section>

      {/* RECOVER LIKE A PRO + TESTIMONIALS */}
      <section
        style={{
          padding: "64px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "24px", textAlign: "center" }}>
            Recover Like a Pro
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {[
              "https://images.unsplash.com/photo-1594737625785-cb2d8f6d7f0d?w=400&q=80",
              "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
              "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=400&q=80",
              "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&q=80",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Member"
                style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }}
              />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            "I lost 12kg in 4 months with proper guidance and support.",
            "The environment here keeps me motivated every day.",
            "Best gym in the area with great trainers and equipment.",
          ].map((text) => (
            <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span style={{ color: "#facc15", fontWeight: 900, fontSize: "18px", lineHeight: 1 }}>✔</span>
              <p style={{ margin: 0, fontSize: "15px", color: "#e5e7eb", lineHeight: "1.6" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", textAlign: "center", backgroundColor: "#0d0d0d" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, marginBottom: "12px" }}>
          Start Your Fitness Journey Today
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: "6px" }}>No excuses. No delays. Just results.</p>
        <p style={{ color: "#9ca3af", marginBottom: "28px" }}>Limited memberships available.</p>
        <a href={whatsapp}>
          <button
            style={{
              backgroundColor: "#facc15",
              color: "#000",
              padding: "16px 48px",
              fontWeight: 800,
              fontSize: "17px",
              border: "none",
              cursor: "pointer",
              letterSpacing: "1px",
            }}
          >
            Join Fit Nation Now
          </button>
        </a>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "64px 24px",
          backgroundColor: "#111",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div>
          <h2 style={{ fontSize: "26px", color: "#facc15", fontWeight: 800, marginBottom: "16px" }}>Visit Us</h2>
          <p style={{ color: "#d1d5db", marginBottom: "8px" }}>
            Fit Nation Gym,<br />
            Bagalur Main Road, Bangalore
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "20px", flexWrap: "wrap" }}>

            {/* Call */}
            <a href={call} title="Call Us" style={{ textDecoration: "none" }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "50%",
                backgroundColor: "#1a1a1a", border: "1.5px solid #3a3a3a",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "border-color 0.2s",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
            </a>

            {/* WhatsApp */}
            <a href={whatsapp} target="_blank" title="WhatsApp" style={{ textDecoration: "none" }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "50%",
                backgroundColor: "#1a1a1a", border: "1.5px solid #3a3a3a",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a href={instagram} target="_blank" title="Instagram" style={{ textDecoration: "none" }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "50%",
                backgroundColor: "#1a1a1a", border: "1.5px solid #3a3a3a",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#igGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433"/>
                      <stop offset="25%" stopColor="#e6683c"/>
                      <stop offset="50%" stopColor="#dc2743"/>
                      <stop offset="75%" stopColor="#cc2366"/>
                      <stop offset="100%" stopColor="#bc1888"/>
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="url(#igGrad)" stroke="none"/>
                </svg>
              </div>
            </a>

          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps?q=13.1214443,77.622367&output=embed"
            style={{ width: "100%", height: "260px", border: "none", display: "block" }}
            title="Fit Nation Location"
          />
        </div>
      </section>

      {/* FOOTER */}
      <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#0a0a0a", color: "#4b5563", fontSize: "13px" }}>
        © 2025 Fit Nation. All rights reserved.
      </div>

    </div>
  );
}
