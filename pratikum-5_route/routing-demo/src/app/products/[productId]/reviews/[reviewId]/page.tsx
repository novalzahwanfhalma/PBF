type Props = {
    params: {
        reviewsId: string
    }
}

export default function ReviewsDetails({ params }: Props) {
    return (
        <h1>Detail about riviews {params.reviewsId}</h1>
    )
}
