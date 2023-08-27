import { useState, useMemo } from 'react';

export const useSortItems = (items = []) => {
    const [isDescSort, setIsDescSort] = useState(false);

    const sortedItems = useMemo(() => {
        const sortableItems = [...items]

        sortableItems.sort((a, b) => {
            if (+a.price < +b.price) return isDescSort ? 1 : -1
            if (+a.price > +b.price) return isDescSort ? -1 : 1

            return 0
        })

        return sortableItems
    }, [isDescSort, items])

    return {
        isDescSort,
        setIsDescSort,
        sortedItems
    }
}