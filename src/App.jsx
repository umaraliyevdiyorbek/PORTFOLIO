import styles from './App.module.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<>
			<h1 className={styles.title}>
				<Navbar />
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Contact/>
			</h1>
		</>
	);
}

export default App;
