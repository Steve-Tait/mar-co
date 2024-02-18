import Link from 'next/link';

async function NotFoundPage() {
  return (
    <div className='flex grow flex-col items-center justify-center py-10'>
      <h1>Page not found</h1>
      <Link className='btn btn--pink mt-6' href='/'>
        Back to home
      </Link>
    </div>
  );
}
export default NotFoundPage;
