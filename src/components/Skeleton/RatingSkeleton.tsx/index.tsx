export function RatingSkeleton() {
  const skeletonArray = [1, 2, 3]

  return (
    <div className="flex mt-9 flex-wrap gap-7">
      {skeletonArray.map((item) => (
        <div
          className="flex w-full cursor-pointer animate-pulse bg-gray-700 relative rounded-lg"
          key={item}
        >
          <div className="flex gap-5 p-5">
            <div className={'h-48 w-44 bg-gray-600 '} />
            <div className="flex flex-col justify-between">
              <div className="flex w-96 flex-col gap-2 items-start">
                <div className="w-2/3 h-6 bg-gray-600" />
                <div className="w-1/2 h-6 bg-gray-600" />
              </div>
              <div className="w-1/2 h-6 bg-gray-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
