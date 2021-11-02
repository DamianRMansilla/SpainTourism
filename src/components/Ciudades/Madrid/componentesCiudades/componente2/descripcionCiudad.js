import "./descripcionCiudad.css"

export default function DescripcionCiudad(){
    return(
        <>
            <div className="cityMain">
                <div className="cityDescription">
                    <h2>Madrid, ciudad cosmopolita</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="cityButtons">
                    <div className="cityButton">
                        <i class="fas fa-hotel"></i><button><p>¿DONDE ALOJARME?</p></button>
                    </div>
                    <div className="cityButton">
                        <i class="fas fa-hotel"></i><button><p>¿QUE VISITAR?</p></button>
                    </div>
                    <div className="cityButton">
                        <i class="fas fa-utensils"></i><button><p>¿DONDE COMER?</p></button>
                    </div>
                    <div className="cityButton">
                        <i class="fas fa-plane"></i><button><p>¿COMO LLEGAR?</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}