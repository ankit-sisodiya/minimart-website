export default function Layout({ children }) {
    return (
      <>
      <h2>Private Layout</h2>
        <main>{children}</main>
        <h2>Private Footer</h2>
      </>
    );
  }