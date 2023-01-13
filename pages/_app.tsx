import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';


Router.events.on('routeChangeComplete', (url: string) => {
	if (typeof window !== 'undefined') {
		// тут мы оперделяем то что мы находимся в клиенте а не на сервере
		// удалил строку можно посмотреть какую на гите
	}
});

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>MyTop - наш лучший топ</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;