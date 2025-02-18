import { Typography } from '@/components/Typography';

interface IPageProps {
  params: Promise<{ id: string }>;
}

const ProductPage = async ({ params }: IPageProps) => {
  const id = (await params).id;

  return (
    <Typography>{`Product #${id}`}</Typography>
  );
};

export default ProductPage;
