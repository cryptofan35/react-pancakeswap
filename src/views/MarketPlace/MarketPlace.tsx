import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import BaseLayout from '../../components/BaseLayout'
import MarketPlaceBanner from './components/MarketPlaceBanner'
import NewCardItem from '../Home/components/NewCardItem'

const ContentBody = styled.div`
  background: ${({ theme }) =>
    theme.isDark ? `url('/images/marketplace/market_back_dark.png')` : `url('/images/marketplace/market_back.png')`};
  background-repeat: round;
`

const CustomBaseLayout = styled(BaseLayout)`
  padding: 20px;
`

const CarouselBody = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1540px) {
    margin-top: -30px;
  }
`

const ButtonBox = styled.div`
  margin-left: 80px;
  margin-top: 20px;
`

const ContentButton = styled.button<{ buttonbg: string }>`
  height: 35px;
  border-radius: 18px;
  border: none;
  background-color: ${({ buttonbg }) => `${buttonbg}`};
  padding: 11px 15px;
  font-size: 11px;
  font-family: 'Barlow', sans-serif;
  color: white;
  margin-right: 15px;
  letter-spacing: -0.3px;
  cursor: pointer;
  text-shadow: 0 0 6px, 0 0 6px;
`

const cardValues = [
  {
    id: 1,
    backgroundUrl: '/images/nfts/stormy-easter-21-lg.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: true,
  },
  {
    id: 2,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: false,
  },
  {
    id: 3,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: false,
  },
  {
    id: 4,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: true,
  },
  {
    id: 5,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: false,
  },
  {
    id: 6,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: false,
  },
  {
    id: 7,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: true,
  },
  {
    id: 8,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: false,
  },
]

const MarketPlace: React.FC = () => {
  return (
    <>
      <ContentBody>
        <MarketPlaceBanner />
        <CarouselBody>
          <ButtonBox>
            <ContentButton buttonbg="#ff00bc" to="/myartwork" as={Link}>
              MY ARTWORKS
            </ContentButton>

            <ContentButton buttonbg="#4d95df" to="/mintartworks" as={Link}>
              MINT ARTWORKS
            </ContentButton>
          </ButtonBox>

          <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <CustomBaseLayout>
              {cardValues.map((card) => (
                <NewCardItem
                  key={card.id}
                  cardBackgroundUrl={card.backgroundUrl}
                  cardTitle={card.title}
                  priceValue={card.price}
                  starValue={card.star}
                  isDark={card.isDark}
                />
              ))}
            </CustomBaseLayout>
          </div>
        </CarouselBody>
      </ContentBody>
    </>
  )
}

export default MarketPlace
