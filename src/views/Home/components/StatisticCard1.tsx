import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text } from '@spacegrimeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledFarmStakingCard = styled(Card)`
  background-color: #3a3996;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0.5, 0.6), 0 20px 20px 0 rgba(0, 0, 0.3, 0.4);
`

const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  font-family: 'Barlow';
`
const Col = styled.div`
  font-size: 12px;
  justify-content: space-between;
  width: 25%;
  margin-right: 8px;
`

const StyledText = styled(Text)`
  color: white;
  font-family: 'Barlow';
  font-size: 12px;
`

const StatisticCard1 = () => {
  const { t } = useTranslation()

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Row>
          <Col>
            <StyledText small> {t('Your SPACEGRIME balance')} </StyledText>
            <StyledText small> {t('LOCKED')} </StyledText>
          </Col>
          <Col>
            <StyledText small> {t('Pending Harvest')} </StyledText>
            <StyledText small> {t('$ 0.000')} </StyledText>
          </Col>
          <Col>
            <StyledText small> {t('SPACEGRIME price')} </StyledText>
            <StyledText small> {t('$ 0.000')} </StyledText>
          </Col>
          <Col>
            <StyledText small> {t('SPACEGRIME Market Cap')} </StyledText>
            <StyledText small> {t('$ 0.000')} </StyledText>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledText small> {t('SPACEGRIME in Circulation')} </StyledText>
            <StyledText small> {t('LOCKED')}</StyledText>
          </Col>
          <Col>
            <StyledText small> {t('Total Supply')} </StyledText>
            <StyledText small> {t('LOCKED')} </StyledText>
          </Col>
          <Col>
            <StyledText small> {t('TVL')} </StyledText>
            <StyledText small> {t('LOCKED')} </StyledText>
          </Col>
          <Col>
            <StyledText small> {t('Volume(24hr)')} </StyledText>
            <StyledText small> {t('LOCKED')} </StyledText>
          </Col>
        </Row>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default StatisticCard1
