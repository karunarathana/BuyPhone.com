
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function SearchBar() {
    return (
        <div> 
            <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{ width: 700 }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        /></div>
    )
}

export default SearchBar