// import React from 'react'; // незнаю нужна ли эта строчка (в обучение была но не увидел когда добавилась)
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag='h1'>Title</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<P size='l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, provident?</P>
			<P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, provident?</P>
			<P size='s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, provident?</P>
			<Tag size='s'>Small</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>green</Tag>
			<Tag color='primary'>primary</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<Input placeholder='test'/>
			<Textarea placeholder='test'/>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}