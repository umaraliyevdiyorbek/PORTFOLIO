import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

const Contact = () => {
	return (
		<footer id='contact' className={styles.container}>
			<div className={styles.text}>
				<h2>Contact</h2>
				<p>Feel free to reach out!</p>
			</div>
			<ul className={styles.links}>
				<li className={styles.link}>
					<img className={styles.emailIcon} src={getImageUrl('contact/emailIcon.png')} alt='Email Icon' />
					<a href='https://umaraliyevdiyorbek08@gmail.com'>My email.com</a>
				</li>
				<li className={styles.link}>
					<img className={styles.linkedInIcon} src={getImageUrl('contact/linkedInIcon.png')} alt='LinkedIn Icon' />
					<a href='mailto:https://www.linkedin.com/in/diyorbek-umaraliyev-48811a299/'>My LinkedIn Profile</a>
				</li>

				<li className={styles.link}>
					<img className={styles.githubIcon} src={getImageUrl('contact/githubIcon.png')} alt='GitHub Icon' />
					<a href='mailto:https://github.com/umaraliyevdiyorbek'>My GitHub Profile</a>
				</li>
			</ul>
		</footer>
	);
};

export default Contact;
