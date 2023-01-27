import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@vini-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, sed quibusdam iste corrupti atque exercitationem id voluptatum minus autem sit maxime, nihil, beatae tenetur pariatur aliquid. Vitae expedita tenetur qui?',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lgr',
        'xle',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
