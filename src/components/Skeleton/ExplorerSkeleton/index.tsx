/* eslint-disable react/jsx-key */
export function ExplorerSkeleton() {
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <div className="flex flex-wrap gap-7">
      {skeletonArray.map((item) => (
        <div className="flex cursor-pointer animate-pulse bg-gray-700 relative rounded-lg">
          <div className="flex gap-5 p-5">
            <div className={'w-[7.375rem] h-[6.5rem] bg-gray-600 '} />
            <div className="flex flex-col justify-between">
              <div className="flex w-64 flex-col gap-2 items-start">
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
