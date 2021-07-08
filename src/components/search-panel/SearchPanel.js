import React, { useState } from 'react';
import './SearchPanel.css';
import { connect } from 'react-redux';
import { searchItem, showingSearchItem, selectedSearchItem} from '../../actions';

const SearchPanel = ({searchItem, showingSearchItem, activeMenu, search, selectedSearchItem}) => {

    const foo = (e) => {
        searchItem(e.target.value)
        showingSearchItem();
    }

    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className='search-panel'>
            {/* <span>Поиск блюд:</span> */}
            <input
                type='text' 
                placeholder='Поиск блюд'
                onChange={foo}
                value={search}
                onFocus={() => setIsOpen(true)}
            />
            <ul className='autocomplete'>
                {
                    search && isOpen ?
                        activeMenu.map(item => {
                            return (
                                <li key={item.id} className='autocomplete__item' onClick={()=> {selectedSearchItem(item.id); setIsOpen(false)}}>{item.title}</li>
                            )                        
                        })
                    : null
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        activeMenu: state.infoReducer.activeMenu,
        search: state.infoReducer.search
    }
};

const mapDispatchToProps = {
    searchItem,
    showingSearchItem,
    selectedSearchItem
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);