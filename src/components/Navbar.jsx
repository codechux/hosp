import React from 'react'
import './css/nav.css'
import { BsChatDots } from 'react-icons/bs'
import * as Ionicons5 from 'react-icons/io5'

const Navbar = ({ openCreateForm }) => {
    return (
        <nav>
            <div className="search-area">
                <Ionicons5.IoSearchOutline />
                <input type="text" placeholder='Search Anything...' />
            </div>

            <button>
                <BsChatDots />
            </button>
            <button>
                <Ionicons5.IoNotificationsOutline />
            </button>
            <button onClick={() => openCreateForm(true)}>
                + New Patient
            </button>
        </nav>
    )
}

export default Navbar
