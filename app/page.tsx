import Card from "@/components/card";

export default function Home() {
  const img = 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card name="Pizza Italiana Matgheritta" price={32.99} discount={24.99} img={img} />
    </main>
  );
}
