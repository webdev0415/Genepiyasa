import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import styled from "styled-components";

import Logo from "../../svgs/Logo";
import SearchIcon from "../../svgs/SearchIcon";
import SearchBar from "../utility/SearchBar";

const css = require("styled-components").css;

const menus = [
  {
    name: "Adakedmi",
    url: "/",
    subLinks: [
      {
        name: "Kurslar",
        url: "/",
      },
      {
        name: "Forex",
        url: "/",
      },
      {
        name: "Kripto Paralar",
        url: "/",
      },
      {
        name: "Viop",
        url: "/",
      },
      {
        name: "Özel Ders",
        url: "/",
      },
    ],
  },
  {
    name: "Analiz",
    url: "/",
    subLinks: [
      {
        name: "Alt Başlık",
        url: "/",
      },
      {
        name: "Ligler",
        url: "/",
      },
    ],
  },
  {
    name: "Blog",
    url: "/",
  },
  {
    name: "Araçlar",
    url: "/",
    subLinks: [
      {
        name: "Kriptop 30 Endeksi",
        url: "/",
      },
      {
        name: "Kripto Risk Yönetimi",
        url: "/",
      },
      {
        name: "Forex Risk Yönetimi",
        url: "/",
      },
      {
        name: "Hisse Senedi Araçları",
        url: "/",
      },

      {
        name: "VIOP Araçları",
        url: "/",
      },
    ],
  },
  {
    name: "Topuluk",
    url: "/",
    subLinks: [
      {
        name: "Ödül Programı",
        url: "/",
      },
      {
        name: "Bağış",
        url: "/",
      },
      {
        name: "Alt Başlık",
        url: "/",
      },
    ],
  },
  {
    name: "Hakkımızda",
    url: "/",
    subLinks: [
      {
        name: "İletişim",
        url: "/",
      },
      {
        name: "Gizlilik Politikası",
        url: "/",
      },
      {
        name: "Kullanım Koşulları",
        url: "/",
      },
    ],
  },
];

const Navigation = () => {
  const [searchBarVisibility, setSearchBarVisibility] = useState(false);
  const searchToggle = () => {
    setSearchBarVisibility(!searchBarVisibility);
  };
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [subMenus, setSubMenus] = useState([]);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);

  const activeRef = useRef(null);

  useEffect(() => {
    const handleNavigation = () => {
      setSelectedMenu(null);
    };

    window.addEventListener("click", handleNavigation);

    return () => {
      window.removeEventListener("click", handleNavigation);
    };
  }, []);

  useEffect(() => {
    if (selectedMenu) {
      setSubMenus(menus.find((menu) => menu.name === selectedMenu).subLinks);
    }
  }, [selectedMenu]);

  return (
    <NavigationWrapper
      onMouseLeave={() => {
        setSelectedMenu(null);
        setSelectedSubMenu(null);
      }}
    >
      <NavigationContainer>
        {!searchBarVisibility && <Logo />}
        {!searchBarVisibility && (
          <NavItemsContainer>
            {menus.map((menu) => (
              <Link key={menu.name} href={menu.url}>
                <NavLink
                  {...(menu.name === selectedMenu ? { ref: activeRef } : {})}
                  active={menu.name === selectedMenu}
                  onMouseOver={() => {
                    if (menu.subLinks) {
                      setSelectedMenu(menu.name);
                    } else {
                      setSelectedMenu(null);
                    }
                  }}
                >
                  <NavItem>{menu.name}</NavItem>
                </NavLink>
              </Link>
            ))}
          </NavItemsContainer>
        )}
        <NavigationButtonsContainer
          style={searchBarVisibility ? { width: "100%" } : {}}
        >
          <NavigationButton onClick={searchToggle}>
            <SearchIcon />
          </NavigationButton>
          {searchBarVisibility && (
            <SearchBar
              // value="   "
              placeholder="Bir şeyler arayın..."
              onClose={searchToggle}
              onSearch={searchToggle}
            />
          )}
          {!searchBarVisibility && (
            <>
              <Link href="/signup">
                <a>
                  <NavigationButton>Kayıt Ol</NavigationButton>
                </a>
              </Link>
              <Link href="/login">
                <a>
                  <NavigationButton>Giriş Yap</NavigationButton>
                </a>
              </Link>
            </>
          )}
        </NavigationButtonsContainer>
      </NavigationContainer>
      <SecondaryNavigation show={selectedMenu ? true : false}>
        <Marker
          style={{
            left: activeRef.current
              ? activeRef.current.getBoundingClientRect().x +
                activeRef.current.clientWidth / 2
              : -200,
          }}
        />
        {subMenus.map((subLink) => (
          <Link key={subLink.name} href={subLink.url}>
            <NavLink
              titleColor
              active={subLink.name === selectedSubMenu}
              onMouseOver={() => {
                setSelectedSubMenu(subLink.name);
              }}
            >
              <NavItem>{subLink.name}</NavItem>
            </NavLink>
          </Link>
        ))}
      </SecondaryNavigation>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  transition: 0.2s all;
  position: relative;
  &:hover {
    box-shadow: ${({ theme }) => theme.navigationBoxShadow};
  }
`;

const NavigationContainer = styled.nav`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120rem;
  margin: 0 auto;
`;

const NavItemsContainer = styled.ul`
  align-self: stretch;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.li``;

const activeNavLinkCSS = css`
  border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
  background-color: ${({ theme }) => theme.navigationBackgroundColor};
  color: ${({ theme }) => theme.navigationBorderColor};
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  color: ${({ theme, titleColor }) =>
    titleColor ? theme.titleColor : theme.navItemText};
  font-weight: 500;
  padding: 1rem 2rem;
  border: 0.1rem solid transparent;
  cursor: pointer;

  transition: all 0.2s;
  outline: none;

  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
    background-color: ${({ theme }) => theme.navigationBackgroundColor};
    color: ${({ theme }) => theme.navigationBorderColor};
  }

  ${({ active }) => active && activeNavLinkCSS}
`;

const NavigationButtonsContainer = styled.div`
  background-color: none;
  display: flex;
  align-items: stretch;
`;

const NavigationButton = styled.button`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.navigationBorderColor};
  font-weight: 500;
  padding: 1rem 2rem;
  border: 0.1rem solid transparent;
  cursor: pointer;
  background-color: transparent;
  height: 100%;
  transition: all 0.2s;

  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
    outline: none;
  }

  &:active {
    border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
    outline: none;
  }

  &:focus {
    border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
    outline: none;
  }
`;

const SecondaryNavigation = styled.ul`
  position: absolute;
  display: ${({ show }) => (show ? "flex" : "none")};
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: ${({ theme }) => theme.secondaryNavigationBackground};
  z-index: 8;
`;

const Marker = styled.div`
  position: absolute;
  top: 0%;
  width: 1.6rem;
  height: 1.6rem;
  background: ${({ theme }) => theme.secondaryNavigationBackground};
  transform: rotate(45deg) translateY(-50%);
  z-index: 8;
`;

export default Navigation;
