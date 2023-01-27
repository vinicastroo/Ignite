import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',
  padding: '$3 $4',
  fontFamily: '$default',
  borderRadius: '$sm',
  fontSize: '$sm',
  lineHeight: '$short',
  fontWeight: '$medium',
})

export const StyledArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
