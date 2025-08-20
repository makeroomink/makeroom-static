import Image from 'next/image';
import styles from './page.module.css';

// Sample resource data. In a real application this would come from a CMS or database.
const placeholder = 'https://via.placeholder.com/120';
const resources = [
  {
    id: 1,
    title: 'Exactly',
    description: 'AI artwork creation platform for artists that understands your style.',
    img: placeholder,
  },
  {
    id: 2,
    title: 'D&AD Awards',
    description: 'Celebrating excellence in design and advertising.',
    img: placeholder,
  },
  {
    id: 3,
    title: 'Grid System',
    description: 'Josef Müller-Brockmann’s classic grid system book.',
    img: placeholder,
  },
  {
    id: 4,
    title: 'Oto256',
    description: 'A color tool for finding lighter and darker colors.',
    img: placeholder,
  },
];

export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>MAKER<span>IM</span></div>
        <nav className={styles.nav}>
          <a href="#">Resources</a>
          <a href="#">Feature</a>
          <a href="#">Community</a>
          <a href="#">Creative Block</a>
        </nav>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search…" />
        </div>
        <button className={styles.cta}>Make It Pro</button>
      </header>
      {/* Filters */}
      <section className={styles.filters}>
        <button>Free</button>
        <button>Freemium</button>
        <button>Paid</button>
        <button>Staff Pick</button>
      </section>
      <div className={styles.notice}>Just a heads up! Every site comes with its own set of rules. You’ll want to follow those to make the most out of their content, trust me!</div>
      <div className={styles.content}>
        {/* Sidebar categories */}
        <aside className={styles.sidebar}>
          <ul>
            <li><a href="#">All</a></li>
            <li><a href="#">Illustrations</a></li>
            <li><a href="#">Inspiration</a></li>
            <li><a href="#">Mockups</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">Typography</a></li>
            <li><a href="#">Vectors</a></li>
          </ul>
        </aside>
        {/* Resources grid */}
        <div className={styles.grid}>
          {resources.map(({ id, title, description, img }) => (
            <div key={id} className={styles.card}>
              <Image src={img} alt={title} width={120} height={120} className={styles.cardImage} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} MakerIM — curated resources by creatives like you.</p>
      </footer>
    </main>
  );
}