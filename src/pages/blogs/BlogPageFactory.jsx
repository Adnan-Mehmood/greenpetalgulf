import { useParams } from 'react-router-dom';
import { blogPages } from '../../content';
import BlogPage from '../../components/BlogPage';

const BlogPageFactory = () => {
  const { blogSlug } = useParams();
  const data = blogPages[blogSlug];

  if (!data) return null;

  return <BlogPage {...data} />;
};

export default BlogPageFactory;

