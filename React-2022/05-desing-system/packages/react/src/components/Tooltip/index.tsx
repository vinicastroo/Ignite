import * as React from 'react'

import {
  TooltipContent,
  TooltipContainer,
  TooltipTrigger,
  TooltipPortal,
  StyledArrow,
} from './styles'
// import { User } from 'phosphor-react'
// import { ComponentProps } from 'react'

export interface TooltipProps {
  children: React.ReactNode
  content: string
}
export function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipTrigger asChild>{children}</TooltipTrigger>

      <TooltipPortal>
        <TooltipContent>
          {content}
          <StyledArrow />
        </TooltipContent>
      </TooltipPortal>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
