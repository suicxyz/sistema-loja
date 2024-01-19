import { MainSection, H2Title, Subtitle, GroupSection, HSOverlay, KROverlay, PPOverlay, GroupLink } from "./styles"

import hotshop from "../assets/hs.jpg"
import krcomp from "../assets/kr.jpg"
import pontoaponto from "../assets/pp.jpg"


export default function Home() {
  return (
    <MainSection>
      <GroupLink href={"/hotshop"}>
      <GroupSection $image={hotshop}>
        <HSOverlay />
        <H2Title>Hot Shop</H2Title>
        <Subtitle>Celulares</Subtitle>
      </GroupSection>
      </GroupLink>
      <GroupLink href={"/krcomp"}>
      <GroupSection $image={krcomp}>
        <KROverlay />
        <H2Title>KR</H2Title>
        <Subtitle>Componentes Eletrônicos</Subtitle>
      </GroupSection>
      </GroupLink>
      <GroupLink href={"/pontoaponto"}>
      <GroupSection $image={pontoaponto}>
        <PPOverlay />
        <H2Title>Ponto a Ponto</H2Title>
        <Subtitle>Armarinhos & Aviamentos</Subtitle>
      </GroupSection>
      </GroupLink>
    </MainSection>
  )
}
