import "./globals.css"

const PageLayout = ({ children }) => {

  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}

export default PageLayout;