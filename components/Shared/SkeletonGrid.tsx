import { Skeleton } from '../ui/skeleton';

export default function SkeletonGrid({ tiles = 3 }) {
  return (
    <div className='grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3'>
      {[...Array(tiles)].map((_, i) => (
        <div className='flex flex-col gap-6' key={i}>
          <Skeleton
            className='h-24'
            style={{ animationDelay: i * 100 + 'ms' }}
          />
          <div className='flex flex-col gap-2' key={i}>
            <Skeleton
              className='h-4'
              style={{ animationDelay: i * 100 + 'ms' }}
            />
            <Skeleton
              className='h-4'
              style={{ animationDelay: i * 100 + 'ms' }}
            />
            <Skeleton
              className='h-4 w-2/3'
              style={{ animationDelay: i * 100 + 'ms' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
