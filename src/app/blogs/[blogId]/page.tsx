import { Metadata } from "next"

type Props = {
    params: {
        blogId: string
    }
}

export const generateMetaData = async ({ params }: Props): Promise<Metadata> => {
    const title: string = await new Promise(res => {
        setTimeout(() => {
            res(`Blog ${params.blogId}`)
        }, 100);
    })
    return {
        title
    }
}

const Blog = ({ params }: Props) => {
    if (parseInt(params.blogId) === 10) {
        throw new Error("Error while loading blog");
    }

    return (
        <div>Blog {params.blogId}</div>
    )
}

export default Blog