import Welcome from '@/app/components/Welcome';

export default function Page({ params }: { params: { name: string } }) {
  return <Welcome name={params.name} />;
}
