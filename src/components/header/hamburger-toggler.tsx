interface IHamburgerTogglerProps {
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void;
}

export default function HamburgerToggler({ openMenu, setOpenMenu }: IHamburgerTogglerProps) {
    return (
        <div className="d-xl-none ms-2">
            <button className="toggler-menu" onClick={() => setOpenMenu(!openMenu)}>
                <span />
            </button>
        </div>
    );
}
