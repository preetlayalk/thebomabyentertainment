import Image from "next/image";
import logo from "../assets/brand/bombay-logo.png";

export default function ComingSoon() {
  return (
    <main className="stage">
      <Image className="logo" src={logo} alt="The Bombay Entertainment" priority />
      <h1>
        Coming <em>soon.</em>
      </h1>
      <p className="lead">We&apos;re putting the finishing touches on something new. Check back shortly.</p>
    </main>
  );
}
