import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {logoutUser} from '../../store/action/actions'
import styled, {keyframes} from "styled-components";
import {connect} from "react-redux"
import { slideInDown } from "react-animations"
import Logo from "../../svgs/Logo";
import SearchIcon from "../../svgs/SearchIcon";
import SearchBar from "../utility/SearchBar";
import "./animation.css"
const css = require("styled-components").css;

const menus = [
  {
    name: "Adakedmi",
    url: "/akademi",
    subLinks: [
      {
        name: "Kurslar",
        url: "/akademi/kurslar",
      },
      {
        name: "Forex",
        url: "/akademi/kurslar/Forex",
      },
      {
        name: "Kripto Paralar",
        url: "/akademi/kurslar/Crypto",
      },
      {
        name: "Viop",
        url: "/akademi/kurslar/Viop",
      },
      {
        name: "Özel Ders",
        url: "/akademi/kurslar/Ozel",
      },
      {
        name: "Sinavlar",
        url: "/akademi/sinavlar",
      },
      {
        name: "Liderlik Tablosu​",
        url: "/akademi/liderlik-tablosu​",
      },
    ],
  },
  {
    name: "Analiz",
    url: "/analizler",
    subLinks: [
      
      {
        name: "Ligler",
        url: "/analizer/emtia/tradeidea",
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
    name: "Topluluk",
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

const Navigation = ({auth, logoutUser}) => {
  const [searchBarVisibility, setSearchBarVisibility] = useState(false);
  const searchToggle = () => {
    setSearchBarVisibility(!searchBarVisibility);
  };
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [subMenus, setSubMenus] = useState([]);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);
  const [authButton, setAuthButton] = useState(false)

  const activeRef = useRef(null);
  const profileRef = useRef(null);
  
  useEffect(() => {
    if (auth.isAuthenticated) {
      setAuthButton(true)
      }
  }, [auth]);
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
  const handleLogoutClick = () => {
    logoutUser()
    setAuthButton(false)
  }
  const [showProfile, setShowProfile] = useState(false);
  const handleProfileClick = () => {
    setShowProfile(!showProfile)
  }
  

  return (
    <NavigationWrapper
      onMouseLeave={() => {
        setSelectedMenu(null);
        setSelectedSubMenu(null);
      }}
    >
      <NavigationContainer>
        {!searchBarVisibility && <Link href="/"><a><Logo /></a></Link>}
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
              {
                authButton && (
                  <>

                    <a ref={profileRef} onClick={handleProfileClick}>
                    <NavigationButton>{auth.user.username}<BorderMarker /></NavigationButton>
                    </a>

                    <a>
                    <NavigationButton onClick={handleLogoutClick}>Log Out</NavigationButton>
                    </a>
                    </>
                  )
              }
              {
                !authButton && (
                  <>
                  <Link href="/signup">
                <a>
                  <NavigationButton>Kayıt Ol</NavigationButton>
                </a>
              </Link>
              <Link href="/login">
                <a>
                  <NavigationButton active={true}>Giriş Yap</NavigationButton>
                </a>
              </Link>
                  </>
                  )
              }
              
            </>
          )}
        </NavigationButtonsContainer>
      </NavigationContainer>
      {/*style={{
            left: activeRef.current
              ? activeRef.current.getBoundingClientRect().x +
                activeRef.current.clientWidth / 2 - 50
              : -800,
          }}*/}
      <ProfileSecondaryNav style={{
            left: profileRef.current
              ? profileRef.current.getBoundingClientRect().x +
                profileRef.current.clientWidth / 2 - 50
              : -800,
          }} show={showProfile}>
          <Marker
          style={{ left: 30}}
          />
          <NavItem>
            <Link href="#">
              <SubNavLink>

                  Yayınlarım

              </SubNavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#">
              <SubNavLink>

                  Bildirim

              </SubNavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#">
              <SubNavLink>

                  Profilim

              </SubNavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#">
              <SubNavLink>

                  Çıkış
              </SubNavLink>
            </Link>
          </NavItem>
      </ProfileSecondaryNav>
      <SecondaryNavigation style={{
            left: activeRef.current
              ? activeRef.current.getBoundingClientRect().x +
                activeRef.current.clientWidth / 2 - 50
              : -800,
          }} show={selectedMenu ? true : false} >
        <Marker
          style={{ left: 30}}
        />
        {subMenus.map((subLink, key) => (
          <NavItem key={key}>
          <Link key={subLink.name} href={subLink.url}>
            <SubNavLink
              titleColor
              active={subLink.name === selectedSubMenu}
              onMouseOver={() => {
                setSelectedSubMenu(subLink.name);
              }}
            >
             {subLink.name}
            </SubNavLink>
          </Link>
          </NavItem>
        ))}
      </SecondaryNavigation>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  position: sticky !important;
  top: 0;
  z-index: 999 !important;
  transition: 0.2s all;
  position: relative;
  background-color: ${({ theme }) => theme.rootBackground};
  color: ${({ theme }) => theme.breadcrumInactiveColor}; 
  &:hover {
    box-shadow: 1px 2px 3px rgba(0,0,0,.5);
    transition: .3s box-shadow;
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

const NavItem = styled.li`
  padding: 1rem;
`;

const activeNavLinkCSS = css`
  border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
  background-color: ${({ theme }) => theme.navigationBackgroundColor};
  color: ${({ theme }) => theme.navigationBorderColor};
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.3rem;
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
const SubNavLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  color: ${({ theme, titleColor }) =>
    titleColor ? theme.titleColor : theme.navItemText};
  font-weight: 500;
  opacity: .7;
  transition: all 0.2s;
  outline: none;
  &:hover {
    color: ${({ theme }) => theme.navigationBorderColor};
    cursor: pointer;
  }

`
const NavigationButtonsContainer = styled.div`
  background-color: none;
  display: flex;
  align-items: stretch;
`;

const NavigationButton = styled.button`
  font-size: 1.2rem;
  color: ${({ active, theme }) => (active ? theme.navigationBorderColor : "#0BCE91")};
  border: 0.1rem solid ${({ active, theme }) => (active ? theme.navigationBorderColor : "transparent")};
  font-weight: 500;
  padding: 1rem 2rem;
  // border: 0.1rem solid transparent;
  cursor: pointer;
  background-color: transparent;
  height: 100%;
  transition: all 0.2s;

  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
    outline: none;
    color: ${({ theme }) => theme.navigationBorderColor};
  }
  &:hover div {

    border-bottom: 2px solid ${({ theme }) => theme.navigationBorderColor};
  border-right: 2px solid ${({ theme }) => theme.navigationBorderColor};
  }
  &:active {
    border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
    outline: none;
  }

  &:focus {
    border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
    outline: none;
  }
  position: relative;
`;
const ProfileSecondaryNav = styled.ul`
  position: absolute;
  display: ${({ show }) => (show ? "block" : "none")};
  top: 100%;
  left: 0;
  width: 200px;
  list-style: none;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: ${({ theme }) => theme.secondaryNavigationBackground};
  z-index: 8;
  opacity: 1;
`
const SecondaryNavigation = styled.ul`

  position: absolute;
  display: ${({ show }) => (show ? "block" : "none")};
  top: 100%;
  left: 0;
  width: 200px;
  list-style: none;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: ${({ theme }) => theme.secondaryNavigationBackground};
  z-index: 8;
  opacity: 1;
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
const BorderMarker = styled.div`
  
  float: right;
  width: 1rem;
  height: 1rem;
  background: transparent;
  transform: rotate(45deg) translateY(-50%);
  margin-top: 4px;
  border-bottom: 2px solid #686195;
  border-right: 2px solid #686195;
  margin-left: 3px;
  
`
const mapStateToProps = state=>({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
// export default Navigation;
