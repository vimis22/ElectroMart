import React, { useEffect, useState } from "react";

interface Product {
    title: string;
    imageUrl: string;
    basePrice: number;
    productType: string;
}

export const ProductRecommendations: React.FC = () => {
    const [recommendations, setRecommendations] = useState<Product[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await fetch("http://localhost:3001/get-product-recommendations");
                if (!response.ok) throw new Error("Server error");

                const data = await response.json();
                setRecommendations(data);
            } catch (err) {
                console.error("Error occured, while fetching. The fallback is...", err);
                setError(true);
                setRecommendations([
                    {
                        title: "Fallback Laptop",
                        imageUrl: "https://via.placeholder.com/150",
                        basePrice: 999,
                        productType: "Laptop",
                    },
                    {
                        title: "Fallback Phone",
                        imageUrl: "https://via.placeholder.com/150",
                        basePrice: 499,
                        productType: "Phone",
                    },
                ]);
            }
        };

        fetchRecommendations();
    }, []);

    return (
        <div>
            <h2>Produktanbefalinger</h2>
            {error && <p style={{ color: "red" }}>Kunne ikke hente anbefalinger – viser fallback.</p>}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {recommendations.map((product, index) => (
                    <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
                        <img src={product.imageUrl} alt={product.title} width={150} height={150} />
                        <h3>{product.title}</h3>
                        <p>Pris: {product.basePrice} DKK</p>
                        <p>Type: {product.productType}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
