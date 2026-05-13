import React, { Children } from 'react'
import Link from 'next/link'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
    </div>
  )
}