import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@vini-ignite-ui/react'

import { TooltipProvider } from '@radix-ui/react-tooltip'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return <TooltipProvider>{Story()}</TooltipProvider>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <Button>Teste</Button>,
    content: '21 de Outubro - Indisponível',
  },
}
