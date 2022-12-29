import "./header.css"
import { CgChevronDown } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
// import Logout from "../logout/logout";


const Header = () => {

    return (
        <>
            <div className='headercontainer'>
                <div className='userid'>USER ID:12345</div>
                <div className='dropdown'><BiUser />Nagaraju<CgChevronDown />
                    <div className="dropdown-content">
                        {/* <Logout /> */}logout
                    </div>
                </div>
            </div>
            <div className="headerbtmline"></div>
        </>
    )
}
export default Header