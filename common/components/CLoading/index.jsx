import styles from './style.module.scss'

import React from 'react'

import { Spinner } from 'react-bootstrap'

function CLoading() {
	return (
		<div className={`${styles.loading}`}>
			<Spinner animation='border' />
		</div>
	)
}

export default CLoading
