const Blog = ({ params }: { params: { blogId: string } }) => {
    return (
        <div>Blog {params.blogId}</div>
    )
}

export default Blog