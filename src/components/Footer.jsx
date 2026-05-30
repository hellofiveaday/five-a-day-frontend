import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-dark py-5 text-center text-sm text-white/60">
      <p>
        © 2026 Joaquín, Sílvia and Penélope — Built with great care, love and the best intentions{" "}
        <span className="text-accent-pink">♥</span>
      </p>
      <Link
        to="/aviso-legal"
        className="underline hover:text-white text-xs mt-1 inline-block transition-colors"
      >
        Aviso Legal
      </Link>
    </footer>
  );
}
