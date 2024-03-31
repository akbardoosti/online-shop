import CategoryItem from "./category-item";
import losion1 from '../../../public/images/losion1.webp';
const items: Array<{id: string, label: string, image: any, url: string}> = [
    {
        id: 'losion',
        label: 'لوسیون',
        image: losion1,
        url: 'link1'
    },
    {
        id: 'shampoo',
        label: 'شامپو',
        image: losion1,
        url: 'link1'
    },
    {
        id: 'soup',
        label: 'صابون',
        image: losion1,
        url: 'link1'
    },
    {
        id: 'soup3',
        label: 'صابون',
        image: losion1,
        url: 'link1'
    },
    {
        id: 'soup4',
        label: 'صابون',
        image: losion1,
        url: 'link1'
    },
    {
        id: 'soup5',
        label: 'صابون',
        image: losion1,
        url: 'link1'
    },
    {
        id: 'soup6',
        label: 'صابون',
        image: losion1,
        url: 'link1'
    },
    {
        id: 'soup7',
        label: 'صابون',
        image: losion1,
        url: 'link1'
    }
]
const CategoryItemsList = () => {
    return (
        <>
            <div className="flex flex-wrap gap-3 columns-4">
                {
                    items.map((item, index)=>{
                        return <CategoryItem key={item.id} name={item.label} image={item.image} url={item.url}/>
                    })
                }
            </div>
        </>
    )
}
export default CategoryItemsList;