import './App.css';


function Field(props){
    return (<div class="filter__elem card_closed">
    <h2>{props.name}</h2>
    <span> &#62; </span>
</div>);
}
function Search() {
    return (
        <div class="filter">
            <Field name="Сортировать" />
            <Field name="Фильтры" />
            <Field name="Где посмотреть" />
        </div>
    );
}


export default Search;
