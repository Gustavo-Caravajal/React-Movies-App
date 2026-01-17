import './SearchInput.css'

export const SearchInput = ({ setInputValue, setQuery, inputValue, resetPage }) => {

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPage();
        setQuery(inputValue.trim());
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className='input-search'>
                <input
                    className="search-input"
                    type="text"
                    name="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder='Search'
                />
            </div>
            <img onClick={handleSubmit} className='lupa' src="../../../public/lupa.png" alt="search" />
        </form>
    )
};