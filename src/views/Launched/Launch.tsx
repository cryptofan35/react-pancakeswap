import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { Button, useModal, Text, Card } from '@spacegrimeswap/uikit'
import LaunchCard from './components/LaunchCard'
import LaunchModal from './LaunchModal'
import Page from './components/Page'
import LaunchIdoModal from './components/LaunchIdoModal'
import BaseLayout from '../../components/BaseLayout'
import { BottomGradient, BottomGradientDark } from '../../components/BottomGradient'

const StyledTitle = styled.div`
  font-size: 48px;
  font-family: 'Akira Expanded';
  font-weight: bold;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#212052')};
`

const NowLive = styled(Text)`
  background-color: ${({ theme }) => (theme.isDark ? 'white' : '#212052')};
  font-size: 48px;
  font-weight: 200;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
  font-family: 'Poppins';
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#414076')};
`

const LoremText = styled(Text)`
  background-color: #fa1db6;
  font-size: 48px;
  font-weight: 200;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
  font-family: 'Poppins';
`

const CardImageInfo = styled.div`
  max-width: 1360px;
  display: flex;
  flex-direction: column;
  font-size: 30px;
  text-align: center;
  @media screen and (min-width: 1300px) {
    flex-direction: row;
    text-align: left;
  }
`

const StyledCardAmount = styled(Card)`
  width: 500px;
  border-radius: 30px;
  background-image: 'linear-gradient(180deg, #ebedee, #fdfbfb)';
  background-color: ${({ theme }) => (theme.isDark ? '#3a3996' : '#ffffff')};
  ${({ theme }) =>
    theme.isDark
      ? `box-shadow: 0 0 4px rgb(58,57,150), 0 0 8px rgb(58,57,150), 0 0 12px rgb(58,57,150);`
      : `box-shadow: 0 0 4px white, 0 0 8px white, 0 0 12px white;`}
  margin-bottom: 12px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1440px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`

const CardAmountTime = styled.div`
  flex-direction: row;
  display: flex;
  text-align: center;
  // @media screen and (min-width: 1650px) {
  //   flex-direction: row;
  //   text-align: left;
  // }
`

const LeftWrapper = styled.div`
  padding: 10px;
  flex: 22%;
`

const RightWrapper = styled.div`
  padding: 10px;
  flex: 78%;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardScrollScope = styled(BaseLayout)`
  justify-content: left;
  padding: 16px 24px 0px 24px;
  max-width: 1500px;
  overflow: auto;
  height: 420px;
  ::-webkit-scrollbar {
    display: none;
  }
`

const StyledIdoTime = styled(Text)`
  color: ${({ theme }) => (theme.isDark ? 'white' : '#222055')};
  font-family: 'Barlow';
`

const launchCardData = [
  {
    id: 1,
    imgurl: '/images/launchpad/card_img1.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 2,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 3,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 4,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 5,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 6,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 7,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 8,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 9,
    imgurl: '/images/launchpad/card_img1.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 10,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 11,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 12,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 13,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 14,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 15,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
  {
    id: 16,
    imgurl: '/images/launchpad/card_img2.png',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    title: 'Lorem ipsum dolor sit amet.',
    idoAmount: '300,000 GRIMEX',
    time: '9286652(07.19 7:00 UTC)',
  },
]

const Launch = () => {
  const [onPresent1] = useModal(<LaunchModal showCommonBases />, false)
  const [onIdoBtnClk] = useModal(<LaunchIdoModal />)
  const { t } = useTranslation()
  const { theme } = useTheme()
  return (
    <Page>
      <StyledTitle>{t('LAUNCHPAD')}</StyledTitle>
      <Button
        onClick={onIdoBtnClk}
        scale="sm"
        style={{
          backgroundColor: '#6a76cd',
          padding: '20px 30px',
          margin: '0 8px 12px 8px',
          borderRadius: '20px',
          fontFamily: 'Barlow',
          fontWeight: 100,
          textShadow: '0 0 3px, 0 0 6px, 0 0 9px, 0 0 12px',
        }}
      >
        {t('LAUNCH YOUR OWN IDO')}
      </Button>
      <CardImageInfo>
        <LeftWrapper style={{ textAlign: 'center' }}>
          <Card
            style={{
              padding: '12px',
              backgroundImage: 'linear-gradient(180deg, #19fff4, #abffb0)',
              width: '100px',
              textAlign: 'center',
              marginTop: '-10px',
              marginLeft: '-20px',
              position: 'absolute',
              fontSize: '14px',
              display: 'inline-block',
              zIndex: 1,
              color: '#000000',
            }}
          >
            {t('LIVE NOW!')}
          </Card>
          <video width="400" height="400" controls style={{ borderRadius: '20px' }}>
            <source src="images/launchpad/india app.mp4" type="video/mp4" />
            <source src="images/launchpad/india app.mp4" type="video/ogg" />
            {t('Your browser does not support HTML video.')}
          </video>
        </LeftWrapper>
        <RightWrapper>
          <NowLive>
            <LoremText>{t('Lorem')}</LoremText>
            {t(' ipsum dolor sit amet')}
          </NowLive>
          <Text
            style={{ marginBottom: '24px', textAlign: 'left' }}
            fontWeight={600}
            color="#2594e1"
            fontFamily="Barlow"
          >
            {t(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore manage qliqua.',
            )}
          </Text>
          <Text
            style={{ marginBottom: '24px', textAlign: 'left' }}
            color={theme.isDark ? 'white' : '#414076'}
            fontFamily="poppins light"
          >
            {t(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua.',
            )}
          </Text>
          <StyledCardAmount>
            <CardAmountTime>
              <RightWrapper style={{ margin: '4px' }}>
                <StyledIdoTime mb={12}>{t('IDO Amount:    300,000 GRIMEX')}</StyledIdoTime>
                <StyledIdoTime>{t('Time:    9286652(07.19 7:00 UTC)')}</StyledIdoTime>
              </RightWrapper>
              <LeftWrapper style={{ margin: '4px', padding: '21px', textAlign: 'center' }}>
                <Button
                  onClick={onPresent1}
                  scale="sm"
                  style={{ backgroundImage: 'linear-gradient(180deg, #0dccff, #4662ff)' }}
                >
                  <Text style={{ fontFamily: 'Barlow', color: 'white' }}>{t('PARTICIPATE')}</Text>
                </Button>
              </LeftWrapper>
            </CardAmountTime>
          </StyledCardAmount>
        </RightWrapper>
      </CardImageInfo>
      <StyledContent>
        <CardScrollScope>
          {launchCardData.map((card) => (
            <LaunchCard
              key={card.id}
              imgurl={card.imgurl}
              title={card.title}
              description={card.description}
              idoAmount={card.idoAmount}
              time={card.time}
            />
          ))}
        </CardScrollScope>
      </StyledContent>
      {theme.isDark ? (
        <BottomGradientDark style={{ height: '100px', width: '100%', position: 'fixed', top: '90%' }} />
      ) : (
        <BottomGradient style={{ height: '100px', width: '100%', position: 'fixed', top: '90%' }} />
      )}
    </Page>
  )
}

export default Launch
