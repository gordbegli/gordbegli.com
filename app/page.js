import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.f_row}>
				<h1>Gabriel Gordbegli</h1>
				<div className={styles.row}>
					<span className={styles.label_left}><Image src="/github.svg" alt="GitHub" width={20} height={20} />&nbsp;GitHub</span>
					<hr className={styles.divider} />
					<Link href="https://github.com/gordbegli" className={`${styles.label_right} ${styles.link}`} target="_blank">github.com/gordbegli</Link>
				</div>
				<div className={styles.row}>
					<span className={styles.label_left}>📚&nbsp;GoodReads</span>
					<hr className={styles.divider} />
					<Link href="https://goodreads.com/gordbegli" className={`${styles.label_right} ${styles.link}`} target="_blank">goodreads.com/gordbegli</Link>
				</div>
				<div className={styles.row}>
					<span className={styles.label_left}>✉️&nbsp;Email</span>
					<hr className={styles.divider} />
					<Link href="mailto:ggordbegli@gmail.com" className={`${styles.label_right} ${styles.link}`}>ggordbegli@gmail.com</Link>
				</div>
				<div className={styles.row}>
					<span className={styles.label_left}>📄&nbsp;Resume</span>
					<hr className={styles.divider} />
					<Link href="resume.pdf" className={`${styles.label_right} ${styles.link}`} target="_blank">resume.pdf</Link>
				</div>
			</div>
		</main>
	)
}