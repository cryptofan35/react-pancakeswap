import React, { useState } from 'react'
import { Heading } from '@spacegrimeswap/uikit'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { useTranslation } from 'contexts/Localization'
import Page from './components/Page'
import EarningWalletTab from './components/EarningWalletTab'
import WalletCardItem from './components/WalletCardItem'
import BaseLayout from '../../../components/BaseLayout'
import { BottomGradient, BottomGradientDark } from '../../../components/BottomGradient'

const StyledFlexLayout = styled(BaseLayout)`
  justify-content: center;
  margin: 24px;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

const cardValues = [
  { id: 1, stake: 'Bake', earn: 'WSG', roi: '24.16%' },
  { id: 2, stake: 'WSGBNBBLP', earn: 'WSG', roi: '300.44%' },
  { id: 3, stake: 'GAT', earn: 'WSG', roi: '85.98%' },
  { id: 4, stake: 'GAT', earn: 'TLM', roi: '71.83%' },
  { id: 5, stake: 'GATBNB BLP', earn: 'BAKE', roi: '180%' },
  { id: 6, stake: 'DOGGY-BNB BLP', earn: 'BAKE', roi: '110%' },
  { id: 7, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 8, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 9, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 10, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 11, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 12, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 13, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 14, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
]

const EarningWalletConnected = () => {
  const { t } = useTranslation()
  const [newArray, setnewArray] = useState(cardValues)

  const callback = (cnt) => {
    const temp = cardValues.slice(0, cnt)
    setnewArray(temp)
  }
  const { theme } = useTheme()
  return (
    <Page>
      <StyledContent>
        <Heading as="h1" scale="xxl" fontFamily="Akira Expanded" color="white" mb="24px">
          {t('Earning')}
        </Heading>

        <EarningWalletTab getCardCount={callback} />

        <StyledFlexLayout>
          {newArray.map((card) => (
            <WalletCardItem key={card.id} status={card.id} stake={card.stake} earn={card.earn} roi={card.roi} />
          ))}
        </StyledFlexLayout>
      </StyledContent>
      {theme.isDark ? (
        <BottomGradientDark style={{ height: '100px', width: '100%', position: 'fixed', bottom: '0' }} />
      ) : (
        <BottomGradient style={{ height: '100px', width: '100%', position: 'fixed', bottom: '0' }} />
      )}
    </Page>
  )
}

export default EarningWalletConnected
