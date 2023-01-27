import { X } from 'phosphor-react'

import {
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastContainer,
} from './styles'

export interface ToastProps {
  title: string
  open: boolean
}
export function Toast({ title, open }: ToastProps) {
  return (
    <ToastContainer open={open}>
      <div>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription asChild>
          <time dateTime={new Date().toISOString()}>
            {new Intl.DateTimeFormat('pt-BR', {
              dateStyle: 'full',
              timeStyle: 'short',
            }).format(new Date())}
          </time>
        </ToastDescription>
      </div>

      <ToastClose>
        <X />
      </ToastClose>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
