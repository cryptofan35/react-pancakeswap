// eslint-disable-next-line

import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Button, Text } from '@spacegrimeswap/uikit'

const StyledTabBtn = styled.div`
  & Button {
    margin: 4px 20px 4px 20px;
  }
`
const StyledTabBtnTxt = styled(Text)`
  text-shadow: 0px 0px 4px white, 0 0 8px white, 0 0 12px white, 0 0 16px white;
  font-family: 'Barlow';
  font-weight: bold;
  color: white;
  margin-right: 4px;
  font-size: 16px;
`

const tabBtnArray = [
  { btnName: 'Hot' },
  { btnName: 'Earn GRIMEX' },
  { btnName: 'GRIMEX Staking' },
  { btnName: 'Others' },
  { btnName: 'Earn NFT' },
  { btnName: 'NFT Staking' },
  { btnName: 'Ended' },
]

const EarningWalletTab = ({ getCardCount }) => {
  const { t } = useTranslation()

  // const [tabId, setTabIndex] = useState(0)

  const handleTabBtnClk = (tabBtn) => {
    let count = 0
    if (tabBtn.btnName === 'Hot') {
      count = 7
    } else if (tabBtn.btnName === 'Earn GRIMEX') {
      count = 9
    } else if (tabBtn.btnName === 'GRIMEX Staking') {
      count = 6
    } else if (tabBtn.btnName === 'Others') {
      count = 4
    } else if (tabBtn.btnName === 'Earn NFT') {
      count = 8
    } else if (tabBtn.btnName === 'NFT Staking') {
      count = 5
    } else if (tabBtn.btnName === 'Ended') {
      count = 10
    }
    getCardCount(count)
    // setTabIndex(count)
  }

  return (
    <StyledTabBtn>
      {tabBtnArray.map((tabBtn) =>
        tabBtn.btnName === 'Hot' ? (
          <Button key={tabBtn.btnName} p="0" variant="text" onClick={() => handleTabBtnClk(tabBtn)}>
            <img key={tabBtn.btnName} src="/images/earning/fire.png" alt="hot-fire" />
            <StyledTabBtnTxt style={{ marginBottom: '-12px' }}>{t(`${tabBtn.btnName}`)}</StyledTabBtnTxt>
          </Button>
        ) : (
          <Button key={tabBtn.btnName} p="0" variant="text" onClick={() => handleTabBtnClk(tabBtn)}>
            <StyledTabBtnTxt> {t(`${tabBtn.btnName}`)} </StyledTabBtnTxt>
          </Button>
        ),
      )}
    </StyledTabBtn>
  )
}

export default EarningWalletTab
