import RegularShelf, {
  ProductDetails,
} from "$root/components/common/regular-shelf/RegularShelf.tsx";
import { asset } from "$fresh/runtime.ts";

const livroImg = "images/livro.png";

const LANCAMENTOS_PRODUCT: ProductDetails[] = [
  { name: "Liderança em Design", id: "1", srcImg: asset(livroImg), url: "#" },
  { name: "JavaScript Assertivo", id: "2", srcImg: asset(livroImg), url: "#" },
  {
    name: "Cangaceiro em JavaScript",
    id: "3",
    srcImg: asset(livroImg),
    url: "#",
  },
  { name: "Aventureiros do Java", id: "4", srcImg: asset(livroImg), url: "#" },
  { name: "Liderança em Design", id: "1", srcImg: asset(livroImg), url: "#" },
  { name: "JavaScript Assertivo", id: "2", srcImg: asset(livroImg), url: "#" },
  {
    name: "Cangaceiro em JavaScript",
    id: "3",
    srcImg: asset(livroImg),
    url: "#",
  },
  { name: "Aventureiros do Java", id: "4", srcImg: asset(livroImg), url: "#" },
];

export default function Home() {
  return (
    <main class="flex items-center flex-col flex-grow">
      <RegularShelf productDetail={LANCAMENTOS_PRODUCT} />
    </main>
  );
}
