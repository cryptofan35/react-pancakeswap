import React from 'react'
import styled from 'styled-components'
import { Text, Button, Card, useModal } from '@spacegrimeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import LaunchModal from '../LaunchModal'

const FCard = styled.div`
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.47);
  border: 2px solid white;
  align-self: baseline;
  box-shadow: 0px 0px 3px white, 0 0 6px white, 0 0 9px white;
  min-width: 230px;
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 16px;
  margin-left: 16px;
  position: relative;
`

const CardImage = styled.div<{ imgurl: string }>`
  border-radius: 20px;
  background-image: ${({ imgurl }) => `url(${imgurl})`};
  border: 1px solid white;
  align-self: baseline;
  min-width: 226px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom: 4px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  padding: 0 4px;
  justify-content: space-between;
  margin-bottom: 4px;
`

const CardInfo = styled.div`
  margin: 100px 12px 0 12px;
  background: rgba(180, 180, 180, 0.8);
  border-radius: 10px;
  padding: 8px 12px;
  // filter: blur(4px);
`

const CardProperty = styled.span`
  color: white;
  font-size: 12px;
  font-family: 'Barlow';
  font-weight: 100;
`

const StyledIdoTime = styled(Text)`
  color: #444278;
  font-size: 12px;
  font-family: 'Barlow';
  font-size: bold;
`

const StyledBadge = styled(Card)`
  padding: 8px;
  background-color: #c1bfc3;
  width: 80px;
  text-align: center;
  margin-top: -10px;
  margin-left: -20px;
  position: absolute;
  z-index: 1;
  color: ${({ theme }) => (theme.isDark ? 'black' : 'white')};
`

const StyledCardTitle = styled(Text)`
  width: 75%;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#444278')};
  font-size: 12px;
  font-family: 'Barlow';
  font-size: bold;
`

const StyledCardDescription = styled(Text)`
  padding: 4px;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#444278')};
  font-size: 12px;
  font-family: 'Barlow';
`

const LaunchCard: React.FC<{ imgurl: string; title: string; description: string; idoAmount: string; time: string }> = ({
  imgurl,
  title,
  description,
  idoAmount,
  time,
}) => {
  const { t } = useTranslation()
  const [onPresent1] = useModal(<LaunchModal showCommonBases />, false)
  return (
    <FCard>
      <StyledBadge>{t('ENDED')}</StyledBadge>
      <CardImage imgurl={imgurl}>
        <CardInfo>
          <StyledIdoTime>
            {t('IDO Amount: ')}
            <CardProperty>{t(`${idoAmount}`)}</CardProperty>
          </StyledIdoTime>
          <StyledIdoTime>
            {t('time: ')}
            <CardProperty>{t(`${time}`)}</CardProperty>
          </StyledIdoTime>
        </CardInfo>
      </CardImage>
      <Row>
        <StyledCardTitle>{t(`${title}`)}</StyledCardTitle>
        <Button
          onClick={onPresent1}
          style={{
            width: '25%',
            color: '#fc35cb',
            fontFamily: 'Barlow',
            fontWeight: 900,
            height: '18px',
            fontSize: '12px',
          }}
          variant="text"
        >
          {t('MORE...')}
        </Button>
      </Row>
      <StyledCardDescription>{t(`${description}`)}</StyledCardDescription>
    </FCard>
  )
}

export default LaunchCard
