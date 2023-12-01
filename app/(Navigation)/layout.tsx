import ScrollToTopButton from "../_components/ScrollToTopButton"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <main>{children}</main>
        <ScrollToTopButton />
      </>
    )
  }