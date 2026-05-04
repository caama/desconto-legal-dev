import { Skeleton } from '@/components/ui/skeleton'

export function CategoriesListSkeleton() {
  return (
    <div className="flex gap-2 overflow-hidden pb-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center gap-2 rounded-md border border-slate-200/80 bg-white px-3 py-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-42" />
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>
      ))}
    </div>
  )
}
