import React from "react";
import styled from "styled-components";
import img from "./img.jpg";

const Navbar = () => {
  return (
    <Nav>
      <Logo src="/images/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/images/home-icon.svg" alt="home icon" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/images/search-icon.svg" alt="search icon" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/images/watchlist-icon.svg" alt="watch icon" />
          <span>WatchList</span>
        </a>
        <a>
          <img src="/images/images/original-icon.svg" alt="original icon" />
          <span>Originals</span>
        </a>
        <a>
          <img src="/images/images/movie-icon.svg" alt="movie icon" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/images/series-icon.svg" alt="series icon" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src={img} />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  height: 70px;
  background: #141b29;
  display: flex;
  align-items: center;
  padding: 0 35px;
  overflow-x:hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  // margin-left:25px
  align-items: center;

  // targetting the a tag in navmenu
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    //for img tag

    img {
      height: 25px;
    }

    span {
      font-size: 15px;
      letter-spacing: 1.42px;
      position: relative;

      //& act like a div
      &:after {
        content: "";
        height: 3px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        //transition on the under line
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s; 
        transform: scaleX(0);
      }
    }
    &:hover{
      
      span:after{
        transform:scaleX(1);
        opacity:1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
