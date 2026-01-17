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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
};