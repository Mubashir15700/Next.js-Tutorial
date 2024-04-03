import { notFound } from "next/navigation";

const Review = ({ params }: { params: { reviewId: string, blogId: string } }) => {
    if (parseInt(params.reviewId) >= 100) {
        notFound();
    }
    return (
        <div>Review {params.reviewId} of blog {params.blogId}</div>
    )
}

export default Review