import { useRouter } from 'next/router';

const PortFoliodetail = () => {

  const router = useRouter();
  const { id } = router.query;

  return(
  <h1>Eu sou a página de detalhes com ID: {id}</h1>
  )
}

export default PortFoliodetail;