import logo from "./assets/logo.png";

export default function Header() {
  return (
    <div className="flex justify-between px-10 bg-slate-100">
      <div className="flex-none w-14 h-14">
        <img src={logo} />
      </div>
      <div>
        <ul className="flex space-x-10 my-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
