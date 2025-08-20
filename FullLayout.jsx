import Image from 'next/image';
import styles from './custom-full-layout.module.css';

/*
 * This component renders a static version of the MakerIM Resources page
 * based on the provided screenshot. It uses a combination of flexbox and
 * CSS Grid to arrange the header, search bar, filter chips, sidebar
 * categories, card grid, and footer. The resource data is hard‑coded to
 * match the entries shown in the image (titles and placeholder text).
 */

const resources = [
  { id: 1,  title: 'Exactly',            description: 'Advanced AI artwork creation platform for artists that understands your style, creates inspiring images…', img: '/placeholder.png' },
  { id: 2,  title: 'D&AD Awards',        description: 'Recognized globally, this award celebrates excellence in design and advertising, covering categories like UX/UI…', img: '/placeholder.png' },
  { id: 3,  title: 'Grid System',        description: 'Josef Müller‑Brockmann’s classic grid system book and philosophy on clarity and order in graphic design.', img: '/placeholder.png' },
  { id: 4,  title: 'Oto256',             description: 'Colour tool for finding lighter and darker colours based on any base tone. Great for gradients and borders.', img: '/placeholder.png' },
  { id: 5,  title: 'Memorisely',         description: 'Immersive UX/UI design training through Figma, video classes and live bootcamps.', img: '/placeholder.png' },
  { id: 6,  title: 'Leif Podhajsky',     description: 'Multidisciplinary visual artist and creative director producing cutting‑edge imagery.', img: '/placeholder.png' },
  { id: 7,  title: 'Pentagram',          description: 'World’s largest independent design consultancy owned and run by its partners.', img: '/placeholder.png' },
  { id: 8,  title: 'Brandfetch',         description: 'Makes it easy to manage your brand identity across the internet.', img: '/placeholder.png' },
  { id: 9,  title: 'Reshot',             description: 'Instant downloads of curated SVG icons and vector illustrations, free with commercial licensing.', img: '/placeholder.png' },
  { id: 10, title: 'Open Doodles',       description: 'Library of sketchy doodles of people free for personal and commercial use.', img: '/placeholder.png' },
  { id: 11, title: 'Book Cover Archive', description: 'Archive celebrating excellence in book cover design.', img: '/placeholder.png' },
  { id: 12, title: 'Gumroad',            description: 'Simple platform to sell digital products and memberships online.', img: '/placeholder.png' },
  { id: 13, title: 'BLK Market',         description: 'One‑stop shop for digital artists with plugins, textures and more.', img: '/placeholder.png' },
  { id: 14, title: 'Unsplash',           description: 'Beautiful, free images and photos you can use for any project.', img: '/placeholder.png' },
  { id: 15, title: 'Brand New',          description: 'Division of UnderConsideration displaying opinions on corporate and brand identity work.', img: '/placeholder.png' },
  { id: 16, title: 'Figma',              description: 'Leading collaborative design tool for building meaningful products.', img: '/placeholder.png' },
  { id: 17, title: 'Ukiyo‑e',            description: 'Contemporary adaptation of the traditional Japanese art style with bold outlines and flat colours.', img: '/placeholder.png' },
  { id: 18, title: 'Another Graphic',    description: 'Archive of graphic design focused on typographic treatment.', img: '/placeholder.png' },
  { id: 19, title: 'Dinamo',             description: 'Swiss type design agency offering retail and bespoke typefaces.', img: '/placeholder.png' },
  { id: 20, title: 'Vecteezy',           description: 'Resource for downloading free and paid vectors, illustrations and clip art.', img: '/placeholder.png' },
  { id: 21, title: 'Motion Array',       description: 'Subscription‑based platform with templates, motion graphics, stock footage and sound effects.', img: '/placeholder.png' },
];

{/* Sidebar Categories */}
<aside className={styles.sidebar}>
  <ul>
    <li>All</li>
    <li>Artificial Intelligence</li>
    <li>Awards Application</li>
    <li>Books & Magazines</li>
    <li>Colors</li>
    <li>Courses & Tutorials</li>
    <li>Designers Archive</li>
    <li>Design Studios</li>
    <li>Extensions & Plugins</li>
    <li>Icons</li>
    <li>Illustrations</li>
    <li>Inspiration</li>
    <li>Marketplaces</li>
    <li>Mockups</li>
    <li>Photography</li>
    <li>Pro Guide Lines</li>
    <li>Programs</li>
    <li>Trends</li>
    <li>Typography</li>
    <li>Type Foundry</li>
    <li>Ux / Ui</li>
    <li>Vectors</li>
    <li>Video & Motion</li>
  </ul>
</aside>
];

export default function CustomFullLayout() {
  return (
    <main className={styles.container}>
      {/* Top navigation */}
      <header className={styles.header}>
        <div className={styles.logo}>
          MAKEROOM</span>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.active}>Resources</a>
          <a href="#">Feature</a>
          <a href="#">Community</a>
          <a href="#">Creative Block</a>
        </nav>
        <div className={styles.controls}>
          <div className={styles.searchBar}><input type="text" placeholder="Search…" /></div>
          <button className={styles.cta}>MAKE IT PRO</button>
        </div>
      </header>

      {/* Filter chips */}
      <div className={styles.filterRow}>
        {['Free', 'Freetrial', 'Freemium', 'Paid', 'Staff Pick'].map((label) => (
          <button key={label}>{label}</button>
        ))}
        {/* placeholder for star rating chip */}
        <button className={styles.ratingChip}></button>
      </div>

      {/* Notice bar */}
      <div className={styles.notice}>
        Just a heads up! Every site comes with its own set of rules. You’ll want to follow those to make the most out of their content, trust me!
      </div>

      <div className={styles.content}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h4>All</h4>
          <ul>
            {categories.map((cat) => (
              <li key={cat}><a href="#">{cat}</a></li>
            ))}
          </ul>
        </aside>

        {/* Cards grid */}
        <section className={styles.grid}>
          {resources.map(({ id, title, description, img }) => (
            <div key={id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.spacer}></div>
                {/* optional “SP” badge could go here */}
                <button className={styles.bookmarkBtn}></button>
              </div>
              <Image src={img} alt={title} width={80} height={80} className={styles.cardImage} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Footer with resources list and submit form */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            MAKER<span>IM</span>
          </div>
          <div className={styles.footerInfo}>
            All the websites you need to know to get started & beyond, curated by creatives like you.
          </div>
          <div className={styles.footerLinks}>
            <a href="#">About</a>
            <a href="#">Resources</a>
            <a href="#">Feature</a>
            <a href="#">Community</a>
            <a href="#">Creative Block</a>
            <a href="#">Pricing</a>
          </div>
          <div className={styles.submitSection}>
            <h4>Submit</h4>
            <input type="email" placeholder="Your email" />
            <input type="text" placeholder="Share your web, book, design studio…" />
            <button>Send</button>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} MAKEROOM</p>
          <p>
            SUBMIT A RESOURCES | SPONSOR US | PRIVACY POLICY | LEGAL NOTICE | TERMS
          </p>
        </div>
      </footer>
    </main>
  );
}
