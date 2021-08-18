import React from 'react'
import styled from 'styled-components'
// import { useWeb3React } from '@web3-react/core'
import BaseLayout from '../../components/BaseLayout'
import ArtWorkBanner from './components/ArtWorkBanner'

import NewCardItem from '../Home/components/NewCardItem'

const ContentBody = styled.div`
  background: ${({ theme }) =>
    theme.isDark
      ? `url('/images/marketplace/market_artwork_back_dark.png')`
      : `url('/images/marketplace/market_artwork_back.png')`};
  min-height: calc(100vh - 64px);
  background-repeat: round;
`

const CustomBaseLayout = styled(BaseLayout)`
  padding: 20px;
`
const CardPanel = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const NFTMyArtworks: React.FC = () => {
  // const { account } = useWeb3React()

  return (
    <>
      <ContentBody>
        <ArtWorkBanner />

        <CardPanel>
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
        </CardPanel>
      </ContentBody>
    </>
  )
}

export default NFTMyArtworks
