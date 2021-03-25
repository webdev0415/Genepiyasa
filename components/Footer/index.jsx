import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import GreenButton from "../utility/GreenButton";
import DayLight from "../../svgs/DayLight";
import Logo from "../../svgs/Logo";
import Facebook from "../../svgs/Facebook";
import Instagram from "../../svgs/Instagram";
import Twitter from "../../svgs/Twitter";
import { ThemeContext } from "../../contexts/themeContext";

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const switchTheme = () => {
    setTheme({
      ...theme,
      dark: false,
      rootBackground: "#ffffff",
      navigationBoxShadow: "0px 7.8rem 5.6rem rgba(169, 178, 194, 0.1)",
      titleColor: "#17113D",
      homeLighterColor: "#F8F8F9",
    });
  };

  return (
    <FooterContainer>
      <FooterNavigationContainer>
        <FooterNavigation>
          <FooterNavigationTitle>AKADEMİ</FooterNavigationTitle>
          <FooterNavigationItems>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Kurslar</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Forex</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Kripto Paralar</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Viop</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Özel Ders</FooterNavigationItem>
              </NavLink>
            </Link>
          </FooterNavigationItems>
        </FooterNavigation>
        <FooterNavigation>
          <FooterNavigationTitle>ANALİZ</FooterNavigationTitle>
          <FooterNavigationItems>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Alt Başlık</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Ligler</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Alt Başlık</FooterNavigationItem>
              </NavLink>
            </Link>
          </FooterNavigationItems>
        </FooterNavigation>
        <FooterNavigation>
          <FooterNavigationTitle>TOPLULUK</FooterNavigationTitle>
          <FooterNavigationItems>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Blog</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Ödül Programı</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Bağış</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Alt Başlık</FooterNavigationItem>
              </NavLink>
            </Link>
          </FooterNavigationItems>
        </FooterNavigation>
        <FooterNavigation>
          <FooterNavigationTitle>ARAÇLAR</FooterNavigationTitle>
          <FooterNavigationItems>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Kriptop 30 Endeksi</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>
                  Kripto Risk Yönetimi
                </FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Forex Risk Yönetimi</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>
                  Hisse Senedi Araçları
                </FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>VIOP Araçları</FooterNavigationItem>
              </NavLink>
            </Link>
          </FooterNavigationItems>
        </FooterNavigation>
        <FooterNavigation>
          <FooterNavigationTitle>HAKKIMIZDA</FooterNavigationTitle>
          <FooterNavigationItems>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>İletişim</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Gizlilik Politikası</FooterNavigationItem>
              </NavLink>
            </Link>
            <Link href="/">
              <NavLink>
                <FooterNavigationItem>Kullanım Koşulları</FooterNavigationItem>
              </NavLink>
            </Link>
          </FooterNavigationItems>
        </FooterNavigation>
        <FooterNavigation>
          <FooterNavigationTitle>
            Haber Bültenimize Abone Ol
          </FooterNavigationTitle>
          <SubscribeByEmailContainer>
            <Input placeholder="Mail adresinizi giriniz." />
            <SubscribeButton>Abone Ol</SubscribeButton>
          </SubscribeByEmailContainer>
          {/*<GreenButton*/}
          {/*  onClick={switchTheme}*/}
          {/*  title={*/}
          {/*    <>*/}
          {/*      <DayLight /> Gündüz Modu*/}
          {/*    </>*/}
          {/*  }*/}
          {/*/>*/}
        </FooterNavigation>
      </FooterNavigationContainer>
      <FooterII>
        <Link href="/"><a><Logo /></a></Link>
        <Copyright>© 2020 Genel Piyasa. All rights reserved.</Copyright>
        <ButtonsContainer>
          <Facebook />
          <Instagram />
          <Twitter />
        </ButtonsContainer>
      </FooterII>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  max-width: 111.6rem;
  margin: 0 auto;
  margin-top: 13rem;
  color: ${({ theme }) => theme.breadcrumInactiveColor};
`;

const FooterNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FooterNavigation = styled.div``;

const FooterNavigationTitle = styled.h3`
  color: #5d5877;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
`;

const FooterNavigationItems = styled.ul`
  margin-top: 1.2rem;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const FooterNavigationItem = styled.li``;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.titleColor};
  font-weight: normal;
  padding: 1.2rem 0;
  cursor: pointer;
  display: inline-block;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.subscribeInputBackground};
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-family: inherit;
  padding: 2.2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.titleColor};

  &::placeholder {
    color: ${({ theme }) => theme.titleColor};
    font-family: inherit;
  }
`;

const SubscribeByEmailContainer = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 4.8rem;
  display: flex;
  align-items: stretch;
`;

const SubscribeButton = styled.button`
  padding: 1.8rem 2rem;
  color: ${({ theme }) => theme.buttonColor};
  font-size: 1.6rem;
  letter-spacing: -0.04em;
  background-color: ${({ theme }) => theme.subscribeButtonBackground};
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: none;
  margin-left: 1rem;
`;

const FooterII = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #2a2359;
  padding: 3rem 0;
  margin-top: 9rem;
`;

const Copyright = styled.p`
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: #7b88a8;
`;

const ButtonsContainer = styled.div`
  & > * {
    margin-left: 3rem;
  }
`;

export default Footer;
