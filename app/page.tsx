import Card from "@/components/card";
import CardRow from "@/components/cardRow";
import Form from "@/components/form";

export default function Home() {
    const img = 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
            {/* <CardRow cardsData={[
                {img, name: 'Peperonii', price: 50, discount: 40},
                {img, name: 'Peperonii', price: 50, discount: 40},
                {img, name: 'Peperonii', price: 50, discount: 40},
                {img, name: 'Peperonii', price: 50, discount: 40},
                {img, name: 'Peperonii', price: 50, discount: 40},
                {img, name: 'Peperonii', price: 50, discount: 40},
                {img, name: 'Peperonii', price: 50, discount: 40},
                {img, name: 'Peperonii', price: 50, discount: 40},
            ]}/> */}
            <Form />
            <Form login />
        </main>
    );
}
