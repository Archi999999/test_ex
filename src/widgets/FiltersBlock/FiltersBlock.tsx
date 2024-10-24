import {useRouter} from "next/router";
import style from './FiltersBlock.module.scss';
import {useEffect, useState} from "react";

const filters = [
    { label: "women’s clothing", value: 'women\'s clothing' },
    { label: "men’s clothing", value: 'men\'s clothing' },
    { label: "electronics", value: 'electronics' },
    { label: "jewelery", value: 'jewelery' },
];

export const FiltersBlock = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const { replace } = useRouter()

    useEffect(() => {
        if (selectedCategory) {
            replace({query: {category: selectedCategory}});
        } else {
            replace({query: {}});
        }
    }, [selectedCategory]);

    const handleChange = (value: string) => {
        if (selectedCategory === value) {
            setSelectedCategory('');
        } else {
            setSelectedCategory(value);
        }
    };

    return (
        <div className={style.filters_block}>
            <h3>Filters</h3>
            {filters.map(filter => (
                <div className={style.filter} key={filter.value}>
                    <button className={style.button_filter}
                        onClick={()=>handleChange(filter.value)}
                    >
                        <div className={`${style.square} ${filter.value === selectedCategory ? style.active : ''}`}></div>
                        {filter.label}
                    </button>
                </div>
            ))}
        </div>
    );
}
