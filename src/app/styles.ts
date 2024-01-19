"use client";

import Link from "next/link"

import styled from "styled-components"

export const MainSection = styled.main`
  display: flex;
  height: 100%;
`

export const H2Title = styled.h2`
  font-size: 54px;
  font-weight: 800;
  text-transform: uppercase;
  color: #ffffff;
  z-index: 999;
`

export const Subtitle = styled.p`
  font-weight: 300;
  font-size: 28px;
  color: #ffffff;
  z-index: 999;
`

export const GroupSection = styled.section<{ $image?: any }>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background: url(${props => props.$image.src});
  background-size: 120% 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.75s;

  &:hover {
    background-size: 140% 120%;
  }
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2b2b2bcc;
  backdrop-filter: blur(6px);
`

export const HSOverlay = styled(Overlay)`
  background-color: #3f6212cc;
`

export const KROverlay = styled(Overlay)`
  background-color: #0c4a6ecc;
`

export const PPOverlay = styled(Overlay)`
  background-color: #c2410ccc;
`

export const GroupLink = styled(Link)`
  flex: 1 1 0%;
  display: block;
  text-decoration: none;
`