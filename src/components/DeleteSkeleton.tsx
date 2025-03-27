import React from 'react'

const  DeleteSkeleton = () => (
    <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
      {/* Header - Skeleton */}
      <div className="flex items-center justify-between mb-3">
        <div className="w-2/3 h-5 bg-gray-300 rounded animate-pulse"></div>

        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-12 h-3 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Info - Skeleton */}
      <div className="mb-3">
        <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 mb-2">
          <div className="w-1/3 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 mb-2">
          <div className="w-1/3 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 mb-2">
          <div className="w-1/3 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Buttons - Skeleton */}
      <div className="flex items-center gap-3">
        <div className="w-1/3 h-8 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-1/3 h-8 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );

export default DeleteSkeleton
