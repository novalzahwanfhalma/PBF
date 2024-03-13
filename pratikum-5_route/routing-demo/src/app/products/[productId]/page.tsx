type Props = {
    params: {
        productId: string
    }
}

export default function ProductDetails({ params }: Props) {
    return (
        <h1>Detail about product {params.productId}</h1>
    )
}
