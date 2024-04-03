const Reviews = ({ params }: { params: { blogId: string } }) => {
  return (
    <div>Reviews of {params.blogId}</div>
  )
}

export default Reviews