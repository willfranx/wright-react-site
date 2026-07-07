import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare module 'react' {
  interface ButtonHTMLAttributes<T> {
    command?: string
    commandfor?: string
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'el-disclosure': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

export {}
