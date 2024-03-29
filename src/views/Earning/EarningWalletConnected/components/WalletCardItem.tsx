// eslint-disable-next-line

import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Button, useModal } from '@spacegrimeswap/uikit'
import CardSelectedModal from './CardSelectedModal'

const StyledCard = styled.div`
  position: relative;
  background: rgba(200, 205, 255, 0.63);
  border: 2px solid #c6c9ec;
  border-radius: 30px;
  box-shadow: 0 0 30px 5px rgba(99, 107, 222);
  width: 240px;
  min-width: 200px;
  padding: 24px;
  justify-content: center;
  font-family: 'Barlow';
  margin: 0 12px 32px 12px;
  & Button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 61px !important;
    height: 61px !important;
    margin-bottom: 12px;
  }
  // opacity: 0.4;
  &:hover {
    background: rgba(200, 205, 255, 1);
  }
`

const StyledCardTitle = styled.div`
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  margin-bottom: 4px;
  padding: 12px;
`

const ColLeft = styled.div`
  width: 65%;
  text-align: left;
`
const ColRight = styled.div`
  width: 35%;
  text-align: left;
`

const WalletCardItem: React.FC<{ stake: string; earn: string; roi: string; status: number }> = ({
  stake,
  earn,
  roi,
  status,
}) => {
  const { t } = useTranslation()
  // roi={roi}
  const [onCardClick] = useModal(<CardSelectedModal stake={stake} earn={earn} status={status} />)
  return (
    <StyledCard>
      <img src="/images/earning/cardlogo.png" alt="card-logo" />
      <br />
      <StyledCardTitle>{t('GRIMEX to X2')}</StyledCardTitle>
      <Row>
        <ColLeft>{t('Stake:')}</ColLeft>
        <ColRight>{t(`${stake}`)}</ColRight>
      </Row>
      <Row>
        <ColLeft>{t('Earn:')}</ColLeft>
        <ColRight>{t(`${earn}`)}</ColRight>
      </Row>
      <Row>
        <ColLeft>{t('ROI:')}</ColLeft>
        <ColRight>{t(`${roi}`)}</ColRight>
      </Row>
      <Button
        onClick={onCardClick}
        style={{ color: 'black', backgroundImage: 'linear-gradient(180deg, #19fff4, #abffb0)' }}
        scale="sm"
      >
        {t('SELECT')}
      </Button>
    </StyledCard>
  )
}

export default WalletCardItem
