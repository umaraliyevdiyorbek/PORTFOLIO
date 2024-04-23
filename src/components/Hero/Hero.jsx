import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.heroTitle}>Hi, I`m Diyorbek</h1>
				<p className={styles.description}>I`m a frontend developer with 1 year of experience using React and Next.js. Reach out if you`d like to learn more!</p>
				<a className={styles.contactBtn} href='https://umaraliyevdiyorbek08@gmail.com'>
					Contact Me
				</a>
			</div>
			<img className={styles.heroImg} src={getImageUrl('hero/heroImage.png')} alt='Hero image of me' />
			<div className={styles.topBlur} />
			<div className={styles.bottomBlur} />
		</section>
	);
};

export default Hero;
