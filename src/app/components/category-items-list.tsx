import CategoryItem from "./category-item";

const items: Array<{id: string, label: string, image: string}> = [
    {
        id: 'losion',
        label: 'لوسیون',
        image: 'jfkdjfk'
    },
    {
        id: 'shampoo',
        label: 'شامپو',
        image: 'jfkdjfk'
    },
    {
        id: 'soup',
        label: 'صابون',
        image: 'jfkdjfk'
    },
    {
        id: 'soup3',
        label: 'صابون',
        image: 'jfkdjfk'
    }
]
const CategoryItemsList = () => {
    return (
        <>
            <div className="flex gap-3.5">
                {
                    items.map((item, index)=>{
                        return <CategoryItem key={item.id} name={item.label} image={item.image}/>
                    })
                }
            </div>
        </>
    )
}
export default CategoryItemsList;