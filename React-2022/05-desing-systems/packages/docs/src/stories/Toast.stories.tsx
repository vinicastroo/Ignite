import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@vini-ignite-ui/react'

import { ToastProvider, ToastViewport } from '@radix-ui/react-toast'
export default {
  title: 'Form/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      return (
        <ToastProvider swipeDirection="right">
          {Story()}
          <ToastViewport />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    open: true,
  },
}
