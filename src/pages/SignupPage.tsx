import {
  useState,
  type FormEvent,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Eye, EyeOff, ArrowRight, Check } from "lucide-react";

type FieldName = "name" | "email" | "password" | "confirm";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState<FieldName | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const mismatch = confirm.length > 0 && confirm !== password;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (mismatch || !agreed) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1400);
  };

  const field = (
    name: FieldName,
    label: string,
    value: string,
    onChange: (v: string) => void,
    type: string = "text",
    trailing?: ReactNode,
    danger?: boolean
  ) => (
    <div style={styles.fieldWrap}>
      <label
        style={{
          ...styles.label,
          ...(focused === name || value ? styles.labelActive : {}),
        }}
      >
        {label}
      </label>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type={type}
          className="field-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          required
          style={{
            paddingRight: trailing ? "28px" : "2px",
          }}
        />

        {trailing && (
          <div
            style={{
              position: "absolute",
              right: 0,
            }}
          >
            {trailing}
          </div>
        )}

        <div className="underline-track" />

        <div
          className={
            danger ? "underline-fill danger" : "underline-fill"
          }
          style={
            danger
              ? { width: "100%", left: "0%" }
              : focused === name
                ? { width: "100%", left: "0%" }
                : { width: "0%", left: "50%" }
          }
        />
      </div>

      {danger && (
        <p style={styles.errorText}>Passwords don't match</p>
      )}
    </div>
  );

  return (
    <div style={styles.page}>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .field-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.14);
          color: #f2f1ed;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 400;
          padding: 10px 2px;
          outline: none;
          letter-spacing: 0.01em;
          transition: border-color 0.35s ease;
        }

        .field-input::placeholder {
          color: transparent;
        }

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
          transition:
            width 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            left 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .underline-fill.danger {
          background: linear-gradient(90deg, #c9584f, #e08a83);
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

        .eye-btn:hover {
          color: #2fa876;
        }

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
          transition:
            background 0.3s ease,
            transform 0.2s ease,
            box-shadow 0.3s ease;
        }

        .submit-btn:hover:not(:disabled) {
          background: #7fe0b3;
          box-shadow: 0 0 24px rgba(47,168,118,0.25);
        }

        .submit-btn:active:not(:disabled) {
          transform: scale(0.985);
        }

        .submit-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .ghost-link {
          color: #8c8b87;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          transition: color 0.25s ease;
          border-bottom: 1px solid transparent;
        }

        .ghost-link:hover {
          color: #f2f1ed;
          border-bottom-color: rgba(255,255,255,0.25);
        }

        .check-box {
          width: 16px;
          height: 16px;
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition:
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .check-box.checked {
          background: #2fa876;
          border-color: #2fa876;
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-2%, 1%);
          }

          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>

      <div style={styles.vignette} />
      <div style={styles.grain} />

      <div style={styles.card}>
        <p style={styles.eyebrow}>Create account</p>

        <h1 style={styles.heading}>
          Start your{" "}
          <span style={styles.headingItalic}>ledger</span>.
        </h1>

        <p style={styles.subtitle}>
          Set up your account in under a minute.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {field("name", "Full name", name, setName)}

          {field("email", "Email", email, setEmail, "email")}

          {field(
            "password",
            "Password",
            password,
            setPassword,
            showPassword ? "text" : "password",
            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </button>
          )}

          {field(
            "confirm",
            "Confirm password",
            confirm,
            setConfirm,
            showPassword ? "text" : "password",
            undefined,
            mismatch
          )}

          <label style={styles.checkboxRow}>
            <div
              className={agreed ? "check-box checked" : "check-box"}
              onClick={() => setAgreed((a) => !a)}
            >
              {agreed && (
                <Check
                  size={11}
                  color="#0b0b0c"
                  strokeWidth={3}
                />
              )}
            </div>

            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: "#8c8b87",
                lineHeight: 1.5,
              }}
            >
              I agree to the{" "}
              <a
                href="#"
                className="ghost-link"
                style={{ fontSize: 13 }}
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="ghost-link"
                style={{ fontSize: 13 }}
              >
                Privacy Policy
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading || !agreed || mismatch}
            style={{ marginTop: 8 }}
          >
            {loading ? "Creating account" : "Create account"}

            {!loading && <ArrowRight size={14} />}
          </button>
        </form>

        <p style={styles.footer}>
          Already have an account?{" "}
          <a
            href="/login"
            className="ghost-link"
            style={{ color: "#7fe0b3" }}
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
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

  errorText: {
    marginTop: 6,
    marginBottom: 0,
    fontFamily: "'Inter', sans-serif",
    fontSize: 12,
    color: "#c9584f",
  },

  checkboxRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    cursor: "pointer",
    marginTop: -8,
  },

  footer: {
    marginTop: 36,
    textAlign: "center",
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    color: "#6f6e6a",
  },
};