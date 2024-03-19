import Card from '../components/Card';

function Home({
    items: initialItems,
    cartItems,
    searchValue, 
    setSearchValue, 
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading,
   }) {
      const renderItems = () => {
        const filtredItems = initialItems.filter((item => 
          item.title.toLowerCase().includes(searchValue.toLowerCase())),
        );
        return (isLoading ? [...Array(4)].map((_, index) => <Card key={index} loading={isLoading} />) : filtredItems.map((item, index) => (
          <Card
            key={index}
            added={cartItems.some(obj => Number(obj.id) !== Number(item.id))}
            loading={isLoading}
            {...item}
            onFavorite={() => onAddToFavorite(item)}
            onPlus={() => onAddToCart(item)}
          />
        )));
      };

    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex align-center">
            <img width={14} height={14} src="/img/search.png" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск" />
          </div>
        </div>
        <div className="d-flex">
          {renderItems()}
        </div>
      </div>
    );
}

export default Home;
