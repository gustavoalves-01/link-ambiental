'use client'

import { useModal } from './ModalProvider'

export default function OpenModalButton({ className, style, children, tag = 'button' }) {
  const { openModal } = useModal()
  const Tag = tag
  return (
    <Tag className={className} style={style} onClick={openModal}>
      {children}
    </Tag>
  )
}
