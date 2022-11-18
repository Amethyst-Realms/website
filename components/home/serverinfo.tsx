"use client";

import useSWR from "swr"
import { fetcher } from "../../lib/fetcher"
import styles from "../../app/page.module.css"
import { useState } from "react";

export default function Players() {
  const { data, error } = useSWR('https://api.mcsrvstat.us/2/hypixel.net', fetcher)

  if (error) return <div className={styles.offline}>An Unknown Error Occcured</div>
  if (!data) return <div className={styles.loading}>Loading...</div>

	if (data.online) {
		return <div className={styles.online}>
			{data.players.online} Online
		</div>
	}
	return <div className={styles.offline}>Server offline</div>
	
}

export function CopyIP({ ip }: { ip: string }) {
	const [clicked, setClicked] =  useState(false)
	const onClick = () => {
		navigator.clipboard.writeText(ip)
		if (!clicked) {
			setClicked(true)
			setTimeout(() => setClicked(false), 700)
		}
	}
	return (
		<div className={styles.copy + " " + styles.loading} onClick={onClick}>
			{ip}
			<div className={styles.copyInside}>
				<p style={{ marginTop: `0.1rem`}}>{clicked ? "Copied!" : "Click to copy"}</p></div>
		</div>
	)
}