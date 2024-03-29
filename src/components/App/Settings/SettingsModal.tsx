import React, { useState } from 'react'
import {
  Button,
  Text,
  SpacegrimeToggle,
  Flex,
  Message,
  Modal,
  ModalBody,
  InjectedModalProps,
} from '@spacegrimeswap/uikit'
import styled from 'styled-components'
import {
  useAudioModeManager,
  useExpertModeManager,
  useUserTransactionTTL,
  useUserSlippageTolerance,
  useUserSingleHopOnly,
} from 'state/user/hooks'
import { useTranslation } from 'contexts/Localization'

import { useSwapActionHandlers } from 'state/swap/hooks'
import { AutoColumn } from '../../Layout/Column'
import QuestionHelper from '../../QuestionHelper'
import { RowBetween, RowFixed } from '../../Layout/Row'
import TransactionSettings from './TransactionSettings'

const SettingsModal: React.FC<InjectedModalProps> = ({ onDismiss }) => {
  const [showConfirmExpertModal, setShowConfirmExpertModal] = useState(false)
  const [userSlippageTolerance, setUserslippageTolerance] = useUserSlippageTolerance()
  const [ttl, setTtl] = useUserTransactionTTL()
  const [expertMode, toggleExpertMode] = useExpertModeManager()
  const [singleHopOnly, setSingleHopOnly] = useUserSingleHopOnly()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()
  const { onChangeRecipient } = useSwapActionHandlers()

  const { t } = useTranslation()

  const BodyWrapper = styled.div`
  transform: scale(0);
  z-index: 1;
  &.fade-in {
    opacity: 1;
    /* transition: opacity linear 0.15s; */
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    transition: all 0.3s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }
`



  if (showConfirmExpertModal) {
    return (

      <Modal
        title={t('Are you sure?')}
        onBack={() => setShowConfirmExpertModal(false)}
        onDismiss={onDismiss}
        style={{ maxWidth: '420px' }}
      >
        <ModalBody>
          <Message variant="warning" mb="24px">
            <Text>
              {t(
                "Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.",
              )}
            </Text>
          </Message>
          <Text mb="24px">{t('Only use this mode if you know what you’re doing.')}</Text>
          <Button
            variant="danger"
            id="confirm-expert-mode"
            onClick={() => {
              // eslint-disable-next-line no-alert
              if (window.prompt(`Please type the word "confirm" to enable expert mode.`) === 'confirm') {
                toggleExpertMode()
                setShowConfirmExpertModal(false)
              }
            }}
          >
            {t('Turn On Expert Mode')}
          </Button>
        </ModalBody>
      </Modal>
    )
  }

  return (
    <BodyWrapper>
      <Modal title={t('Settings')} headerBackground="gradients.cardHeader" onDismiss={onDismiss}>
        <ModalBody>
          <AutoColumn gap="md" style={{ padding: '1rem' }}>
            <Text bold fontSize="20px">
              {t('Transaction Settings')}
            </Text>
            <TransactionSettings
              rawSlippage={userSlippageTolerance}
              setRawSlippage={setUserslippageTolerance}
              deadline={ttl}
              setDeadline={setTtl}
            />
            <Text bold fontSize="20px" mt="32px">
              {t('Interface Settings')}
            </Text>
            <RowBetween>
              <RowFixed>
                <Text fontSize="14px">{t('Toggle Expert Mode')}</Text>
                <QuestionHelper
                  text={t('Bypasses confirmation modals and allows high slippage trades. Use at your own risk.')}
                  ml="4px"
                />
              </RowFixed>
              <SpacegrimeToggle
                id="toggle-expert-mode-button"
                checked={expertMode}
                onChange={
                  expertMode
                    ? () => {
                      onChangeRecipient(null)
                      toggleExpertMode()
                    }
                    : () => setShowConfirmExpertModal(true)
                }
              />
            </RowBetween>
            <RowBetween>
              <RowFixed>
                <Text fontSize="14px">{t('Disable Multihops')}</Text>
                <QuestionHelper text={t('Restricts swaps to direct pairs only.')} ml="4px" />
              </RowFixed>
              <SpacegrimeToggle
                id="toggle-disable-multihop-button"
                checked={singleHopOnly}
                onChange={() => {
                  setSingleHopOnly(!singleHopOnly)
                }}
              />
            </RowBetween>
            <Flex justifyContent="space-between" alignItems="center" mb="8px">
              <RowFixed>
                <Text fontSize="14px">{t('Audio')}</Text>
                <QuestionHelper text={t('🐰 Turn down your volume a bit before you swap')} ml="4px" />
              </RowFixed>
              <SpacegrimeToggle checked={audioPlay} onChange={toggleSetAudioMode} />
            </Flex>
          </AutoColumn>
        </ModalBody>
      </Modal>
    </BodyWrapper>
  )
}

export default SettingsModal
