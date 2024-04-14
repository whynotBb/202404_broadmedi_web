import React from "react";
import "./SearchBox.style.css";

const SearchBox = () => {
    return (
        <div className="searchBoxWrap">
            <div className="searchBox">
                <input type="text" placeholder="검색어를 입력해 주세요." />
                <button>검색</button>
            </div>
        </div>
    );
};

export default SearchBox;
