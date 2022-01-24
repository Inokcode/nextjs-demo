import { useRouter } from 'next/router';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log('Placing your order');
    router.push('./product');
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Home;
