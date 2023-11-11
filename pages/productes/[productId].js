import { useRouter } from "next/router";
function producetDetalies() {
  const router = useRouter();
  const producetId = router.query.productId;

  return <div>producet detalies {producetId}</div>;
}

export default producetDetalies;
