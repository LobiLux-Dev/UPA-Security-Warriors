'use client'

import { useEffect, useState } from 'react'

import { Title } from '@/components'

enum Message {
	'Cargando' = 'Cargando.',
	'Cargando.' = 'Cargando..',
	'Cargando..' = 'Cargando...',
	'Cargando...' = 'Cargando',
}

const RootLoading: React.FC = () => {
	const [msg, setMsg] = useState<Message>(Message.Cargando)

	useEffect(() => {
		const interval = setInterval(() => {
			setMsg(msg => Message[msg])
		}, 500)

		return () => clearInterval(interval)
	})

	return <Title title={msg} />
}

export default RootLoading
