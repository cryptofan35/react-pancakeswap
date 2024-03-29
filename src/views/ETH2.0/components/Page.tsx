import React from 'react'
import styled from 'styled-components'
import { Flex } from '@spacegrimeswap/uikit'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
   width: 100%;
   height:100%;
  padding: 20px;
  min-height: calc(100vh - 64px);
  background: ${({ theme }) => theme.colors.gradients.bubblegum};

  ${({ theme }) => theme.mediaQueries.xs} {
    background-image: url('/images/ether2/etherBack.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    min-height: calc(100vh - 64px);
  }
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <StyledPage {...props}>
      {children}
      <Flex flexGrow={1} />
    </StyledPage>
  )
}

export default Page
