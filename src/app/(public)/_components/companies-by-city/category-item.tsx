'use client'

import { useIsFetching } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type CategoryItemProps = {
  category: {
    name: string
    id: string
    icon: string | null
    _count: {
      companies: number
    }
  }
}

export function CategoryItem({ category }: CategoryItemProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const currentCategoriesIds = searchParams.getAll('categories')
  const currentQuery = searchParams.get('query')

  const isSelected = currentCategoriesIds.includes(category.id)

  const isFetching = useIsFetching({ queryKey: ['companies-by-city'] }) > 0
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    // Quando terminar o fetch, reseta o estado de carregamento do botão
    if (!isFetching) {
      setIsPending(false)
    }
  }, [isFetching])

  function handleOnSelectCategories() {
    setIsPending(true)

    const url = queryString.stringifyUrl(
      {
        url: pathname,
        query: {
          query: currentQuery,
          categories: isSelected ? currentCategoriesIds.filter(id => id !== category.id) : [...currentCategoriesIds, category.id],
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    )

    router.push(url)
  }

  return (
    <Button
      key={category.id}
      size="sm"
      variant={isSelected ? 'default' : 'outline'}
      className="flex shrink-0 cursor-pointer! select-none items-center gap-2 whitespace-nowrap transition-all duration-300 hover:border-primary/70"
      onClick={handleOnSelectCategories}
    >
      <span>{category.icon}</span>
      <p>{category.name}</p>
      {isPending ? (
        <Badge variant="secondary" className="ml-2 px-1.5 py-0.5">
          <Loader2 className="size-3.5 animate-spin" />
        </Badge>
      ) : (
        category._count?.companies > 0 && (
          <Badge variant="secondary" className="ml-2">
            {category._count?.companies}
          </Badge>
        )
      )}
    </Button>
  )
}
