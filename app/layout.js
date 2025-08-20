import '../styles/globals.css';

export const metadata = {
  title: 'MakerIM Resources',
  description: 'A static showcase of design resources',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
