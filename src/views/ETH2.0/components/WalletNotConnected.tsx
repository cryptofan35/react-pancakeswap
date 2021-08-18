import React from 'react'
import { Heading, Text } from '@spacegrimeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'

const WalletNotConnected = () => {
  const { t } = useTranslation()

  return (
    <div style={{ justifyContent: 'center', textAlign: 'center' }}>
      <Heading scale="xl" mb="8px" color="#6d31cc">
        {t('Oops!')}
      </Heading>
      <Text as="p" mb="16px" color="#39d6e6">
        {t('Please connect your wallet to continue')}
      </Text>
      <ConnectWalletButton />
    </div>
  )
}

export default WalletNotConnected
