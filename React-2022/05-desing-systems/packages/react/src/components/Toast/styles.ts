import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  padding: '$3 $5',
  borderRadius: '$sm',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  marginBottom: '$1',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  background: 'transparent',
  border: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  svg: {
    width: '$5',
    height: '$5',
    color: '$gray200',
    cursor: 'pointer',

    '&:hover': {
      color: '$gray100',
    },
  },
})
