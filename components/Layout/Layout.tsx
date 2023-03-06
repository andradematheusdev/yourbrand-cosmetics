import { Announcement, Footer, Header, ScrollToTop } from ".."
import Data from "../../fakedata/Data"

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({children}: ILayoutProps) => {
  return (
    <div>
      <Announcement message={Data.announcement} />
      <Header />
        { children }
      <ScrollToTop />
      <Footer />
    </div>
  )
}
