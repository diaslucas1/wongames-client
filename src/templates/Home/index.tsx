import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighligth: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighligth,
  upcomingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <S.SectionMostPopular>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </Container>
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcoming
        </Heading>

        <GameCardSlider items={upcomingGames} />
        <Highlight {...upcomingHighligth} />
        <GameCardSlider items={upcomingMoreGames} />
      </Container>
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>

        <Highlight {...freeHighligth} />
        <GameCardSlider items={freeGames} />
      </Container>
    </S.SectionFreeGames>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
