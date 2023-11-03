import Link from "./Link";
import '../../src/App.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link text={"Page 1"} url={"#"} />
      <Link text={"Page 2"} url={"##"} />
      <Link text={"Page 3"} url={"###"} />
    </div>
  );
}
