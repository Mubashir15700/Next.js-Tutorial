"use client";
import { notFound } from "next/navigation";

const Review = ({ params }: { params: { reviewId: string, blogId: string } }) => {
    if (parseInt(params.reviewId) >= 100) {
        notFound();
    }

    if (parseInt(params.reviewId) === 90) {
        throw new Error("Something went wrong!");
    }

    return (
        <div>Review {params.reviewId} of blog {params.blogId}</div>
    )
}

export default Review