import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function CompanyCardSkeleton() {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-slate-200/80 bg-white p-0">
      <div className="relative flex min-h-[14px] items-center justify-center border-slate-100 border-b bg-white px-5 py-5 sm:min-h-[14px] sm:px-6 sm:py-6">
        <Skeleton className="h-[72px] w-[140px] rounded-md sm:h-[82px] sm:w-[160px]" />
      </div>

      <CardHeader className="space-y-1 px-4 sm:px-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <Skeleton className="h-3 w-24" />
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col px-4 pb-4 sm:px-5 sm:pb-5">
        <div className="mb-4 space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>

        <Skeleton className="mt-auto h-10 w-full rounded-xl sm:h-11" />

        <div className="mt-2.5 flex justify-end">
          <Skeleton className="h-3 w-20" />
        </div>
      </CardContent>
    </Card>
  )
}
