import { NavLink } from "react-router-dom";
import twetterLogo from "../assets/logo-twitter.svg";
import "./Sidebar.css";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from "phosphor-react";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twetterLogo} alt="" />
      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          Home
        </NavLink>
        <a href="">
          <Hash />
          Explorer
        </a>
        <a href="">
          <Bell />
          Notifications
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href="">
          <FileText />
          Lists
        </a>
        <a href="">
          <User />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>
      <button className="new-tweet" type="button">
        Tweet
      </button>
    </aside>
  );
}
