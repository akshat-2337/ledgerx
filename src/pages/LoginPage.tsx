import { useState } from "react";
import type { FormEvent } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState<"email" | "password" | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1400);
  };

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500&family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        .field-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.14);
          color: #f2f1ed;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 400;
          padding: 10px 2px 10px 2px;
          outline: none;
          letter-spacing: 0.01em;
          transition: border-color 0.35s ease;
        }
        .field-input::placeholder { color: transparent; }
        .field-input:-webkit-autofill {
          -webkit-text-fill-color: #f2f1ed;
          -webkit-box-shadow: 0 0 0px 1000px #0b0b0c inset;
          transition: background-color 5000s ease-in-out 0s;
        }

        .underline-track {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 100%;
          background: rgba(255,255,255,0.14);
        }
        .underline-fill {
          position: absolute;
          bottom: 0;
          left: 50%;
          height: 1px;
          background: linear-gradient(90deg, #2fa876, #7fe0b3);
          transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1), left 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .eye-btn {
          background: none;
          border: none;
          color: #6f6e6a;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          transition: color 0.25s ease;
        }
        .eye-btn:hover { color: #2fa876; }

        .submit-btn {
          width: 100%;
          background: #f2f1ed;
          color: #0b0b0c;
          border: none;
          border-radius: 2px;
          padding: 14px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }
        .submit-btn:hover {
          background: #7fe0b3;
          box-shadow: 0 0 24px rgba(47,168,118,0.25);
        }
        .submit-btn:active { transform: scale(0.985); }
        .submit-btn:disabled { opacity: 0.6; cursor: default; }

        .ghost-link {
          color: #8c8b87;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          transition: color 0.25s ease;
          border-bottom: 1px solid transparent;
        }
        .ghost-link:hover { color: #f2f1ed; border-bottom-color: rgba(255,255,255,0.25); }

        @keyframes drift {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-2%, 1%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>

      {/* ambient background texture */}
      <div style={styles.vignette} />
      <div style={styles.grain} />

      <div style={styles.card}>
        <p style={styles.eyebrow}>Sign in</p>
        <h1 style={styles.heading}>
          Welcome <span style={styles.headingItalic}>back</span>.
        </h1>
        <p style={styles.subtitle}>Enter your details to continue.</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fieldWrap}>
            <label
              style={{
                ...styles.label,
                ...(focused === "email" || email ? styles.labelActive : {}),
              }}
            >
              Email
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                className="field-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                required
              />
              <div className="underline-track" />
              <div
                className="underline-fill"
                style={
                  focused === "email"
                    ? { width: "100%", left: "0%" }
                    : { width: "0%", left: "50%" }
                }
              />
            </div>
          </div>

          <div style={styles.fieldWrap}>
            <label
              style={{
                ...styles.label,
                ...(focused === "password" || password ? styles.labelActive : {}),
              }}
            >
              Password
            </label>
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <input
                type={showPassword ? "text" : "password"}
                className="field-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
                required
                style={{ paddingRight: "28px" }}
              />
              <button
                type="button"
                className="eye-btn"
                style={{ position: "absolute", right: 0 }}
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
              <div className="underline-track" />
              <div
                className="underline-fill"
                style={
                  focused === "password"
                    ? { width: "100%", left: "0%" }
                    : { width: "0%", left: "50%" }
                }
              />
            </div>
          </div>

          <div style={styles.rowBetween}>
            <label style={styles.checkboxRow}>
              <input type="checkbox" style={styles.checkbox} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#8c8b87" }}>
                Remember me
              </span>
            </label>
            <a href="#" className="ghost-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="submit-btn" disabled={loading} style={{ marginTop: 8 }}>
            {loading ? "Signing in" : "Sign in"}
            {!loading && <ArrowRight size={14} />}
          </button>
        </form>

        <p style={styles.footer}>
          Don't have an account? <a href="#" className="ghost-link" style={{ color: "#7fe0b3" }}>Create one</a>
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "#0b0b0c",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Inter', sans-serif",
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.045), transparent 70%)",
    pointerEvents: "none",
  },
  grain: {
    position: "absolute",
    inset: "-10%",
    opacity: 0.035,
    pointerEvents: "none",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
    animation: "drift 14s ease-in-out infinite",
  },
  card: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: 380,
    padding: "0 32px",
  },
  eyebrow: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#2fa876",
    margin: "0 0 20px 0",
  },
  heading: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 500,
    fontSize: 40,
    lineHeight: 1.1,
    color: "#f2f1ed",
    margin: "0 0 10px 0",
    letterSpacing: "-0.01em",
  },
  headingItalic: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: 36,
    color: "#7fe0b3",
    letterSpacing: "-0.01em",
  },
  subtitle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    color: "#6f6e6a",
    margin: "0 0 40px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 26,
  },
  fieldWrap: {
    position: "relative",
    paddingTop: 14,
  },
  label: {
    position: "absolute",
    top: 14,
    left: 2,
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: "#6f6e6a",
    pointerEvents: "none",
    transition: "all 0.25s ease",
  },
  labelActive: {
    top: -6,
    fontSize: 11,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#8c8b87",
  },
  rowBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: -8,
  },
  checkboxRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
  },
  checkbox: {
    width: 14,
    height: 14,
    accentColor: "#2fa876",
    cursor: "pointer",
  },
  footer: {
    marginTop: 36,
    textAlign: "center",
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    color: "#6f6e6a",
  },
};