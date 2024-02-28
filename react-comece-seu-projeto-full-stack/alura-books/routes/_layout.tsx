import type { PageProps } from "$fresh/server.ts";
import Footer from "$root/components/common/footer/Footer.tsx";
import Header from "$root/components/common/header/Header.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <body
      style="background-image: linear-gradient(90deg, #002F52 35%, #326589);"
      class="flex flex-col min-h-screen overflow-x-hidden "
    >
      <Header />
      <Component />
      <Footer />
    </body>
  );
}
