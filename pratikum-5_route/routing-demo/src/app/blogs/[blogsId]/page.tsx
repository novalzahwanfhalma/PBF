type Props = {
    params: {
        blogsId: string
    }
}

export default function BlogsDetails({ params }: Props) {
    return (
        <h1>Detail blogs {params.blogsId}</h1>
    )
}
