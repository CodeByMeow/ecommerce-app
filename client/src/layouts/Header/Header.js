import * as React from "react";
import { Fragment, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import authContext from "../../contexts/AuthContext/AuthContext.js";
import { useStoreContext } from "../../contexts/StoreContext.js";
import actionCreator from "../../utils/actionCreator.js";

import SearchBar from "../../components/SearchBar/SearchBar.js";

import { SIGN_OUT } from "../../contexts/types";

import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { MdLogout } from "react-icons/md";
import {
    Bars3Icon,
    XMarkIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/outline";

// style
import "./Header.css";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Header = () => {
    const { state, dispatch } = useContext(authContext);
    const { user } = state;
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // context
    const { products, category } = useStoreContext();
    const randomProducts = products
        ? products.filter((item) => item.price > 25000000)
        : [];
    randomProducts.length = 3;
    const categoryItems = category
        ? category.map((cate) => ({
              name: cate.title,
              path: cate.slug,
          }))
        : [];
    const navigation = {
        categories: [
            {
                id: "shop",
                name: "Shop",
                featured: randomProducts,
                sections: [
                    {
                        id: "mobile",
                        name: "mobile",
                        items: categoryItems,
                    },
                ],
            },
        ],
        pages: [
            { name: "About Us", path: "/about-us" },
            { name: "Policy", path: "/policy" },
        ],
    };

    const onHandleSignOut = () => {
        dispatch(actionCreator(SIGN_OUT));
    };

    const onResizeMobile = () => {
        if (window.innerWidth <= 480) {
            setIsMobile(true);
        } else if (window.innerWidth > 480) {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", onResizeMobile);

        return () => {
            window.removeEventListener("resize", onResizeMobile);
        };
    }, []);

    return (
        <div className="bg-white h-44 md:h-28">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 lg:hidden"
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pt-5 pb-2">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        {/* <div> */}
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map(
                                                (item) => (
                                                    <Tab
                                                        key={item.name}
                                                        className={({
                                                            selected,
                                                        }) =>
                                                            classNames(
                                                                selected
                                                                    ? "text-indigo-600 border-indigo-600"
                                                                    : "text-gray-500 border-transparent",
                                                                "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                                                            )
                                                        }
                                                    >
                                                        {item.name}
                                                    </Tab>
                                                )
                                            )}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map(
                                            (category) => (
                                                <Tab.Panel
                                                    key={category.name}
                                                    className="space-y-0 lg:space-y-10 px-4 pt-10 pb-8 divide-y-2"
                                                >
                                                    <div className="mobile-feature grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-2 lg:gap-x-4">
                                                        {category.featured.map(
                                                            (item) => (
                                                                <div
                                                                    key={
                                                                        item.id
                                                                    }
                                                                    className="group relative text-sm"
                                                                >
                                                                    <Link
                                                                        to={`/products/${item.slug}`}
                                                                        className="block text-base font-semibold text-indigo-600 line-clamp-2"
                                                                    >
                                                                        <div className="mx-auto w-60 overflow-hidden rounded-lg group-hover:scale-110 transition-all py-2">
                                                                            <img
                                                                                src={
                                                                                    item.image_url
                                                                                }
                                                                                alt={
                                                                                    item.title
                                                                                }
                                                                                className="object-cover object-center"
                                                                            />
                                                                        </div>
                                                                        <span
                                                                            className="absolute inset-0 z-10"
                                                                            aria-hidden="true"
                                                                        />
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </Link>
                                                                    <p
                                                                        aria-hidden="true"
                                                                        className="mt-1"
                                                                    >
                                                                        Shop now
                                                                    </p>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                    {category.sections.map(
                                                        (section) => (
                                                            <div
                                                                key={
                                                                    section.name
                                                                }
                                                            >
                                                                <ul
                                                                    role="list"
                                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                                    className="grid grid-cols-2 mt-6 lg:flex lg:flex-col"
                                                                >
                                                                    {section.items.map(
                                                                        (
                                                                            item
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    item.name
                                                                                }
                                                                                className="flow-root"
                                                                            >
                                                                                <Link
                                                                                    to={`/products?category=${item.path}`}
                                                                                    // to={`${item.path}`}
                                                                                    className="block p-2 text-gray-500"
                                                                                >
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        )
                                                    )}
                                                </Tab.Panel>
                                            )
                                        )}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                    {navigation.pages.map((page) => (
                                        <div
                                            key={page.name}
                                            className="flow-root"
                                        >
                                            <Link
                                                to={page.path}
                                                className="-m-2 block p-2 font-medium text-gray-500"
                                            >
                                                {page.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                    <div className="flow-root">
                                        {user ? (
                                            <Link
                                                to="profile"
                                                className="text-indigo-600 font-semibold capitalize"
                                            >
                                                <Avatar
                                                    src={user.avatar}
                                                    name={user.fullname}
                                                    size={50}
                                                    round={true}
                                                />
                                                <span className="px-2">
                                                    {user.fullname}
                                                </span>
                                            </Link>
                                        ) : (
                                            <Link
                                                to="/signin"
                                                className="text-base font-medium text-gray-500 hover:text-indigo-700"
                                            >
                                                Sign in
                                            </Link>
                                        )}
                                    </div>
                                    <div className="flow-root">
                                        {user ? (
                                            <>
                                                <button
                                                    className="md:hidden text-base md:text-xl cursor-pointer text-gray-400 hover:text-inherit transition-all"
                                                    onClick={() => {
                                                        onHandleSignOut();
                                                    }}
                                                >
                                                    Sign out
                                                </button>
                                                <MdLogout
                                                    className="hidden md:block text-base md:text-xl cursor-pointer text-gray-400 hover:text-inherit transition-all"
                                                    onClick={() => {
                                                        onHandleSignOut();
                                                    }}
                                                />
                                            </>
                                        ) : (
                                            <Link
                                                to="/signup"
                                                className="text-base font-medium text-gray-500 hover:text-indigo-700"
                                            >
                                                Create account
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 py-6 px-4">
                                    <a
                                        href="#"
                                        className="-m-2 flex items-center p-2"
                                    >
                                        <img
                                            src="/assets/vietnam-flag-icon.png"
                                            alt="VND currency"
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-base font-medium text-gray-500">
                                            VND
                                        </span>
                                        <span className="sr-only">
                                            , change currency
                                        </span>
                                    </a>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                <p className="flex h-10 text-center items-center justify-center bg-indigo-600 px-4 text-xs md:text-base font-bold text-white sm:px-6 lg:px-8">
                    Get free delivery on orders over $100
                </p>

                <nav
                    aria-label="Top"
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                    {/* <div className="border-b border-gray-200"> */}
                    <div>
                        <div className="flex h-16 items-center">
                            {/* toggle button to open menu on small devices */}
                            <button
                                type="button"
                                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link
                                    to="/"
                                    className="tooltip"
                                    data-text="ECommerce website"
                                >
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </Link>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover
                                            key={category.name}
                                            className="flex"
                                        >
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex">
                                                        <Popover.Button
                                                            className={classNames(
                                                                open
                                                                    ? "border-indigo-600 text-indigo-600"
                                                                    : "border-transparent text-gray-500 hover:text-indigo-700",
                                                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                                            )}
                                                        >
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 z-10">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div
                                                                className="absolute inset-0 top-1/2 bg-white shadow"
                                                                aria-hidden="true"
                                                            />

                                                            <div className="relative bg-white">
                                                                <div className="mx-auto max-w-7xl px-8">
                                                                    <div className="flex flex-wrap gap-y-4 py-4">
                                                                        {category.sections.map(
                                                                            (
                                                                                section
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        section.name
                                                                                    }
                                                                                    className="basis-1/5"
                                                                                >
                                                                                    <ul
                                                                                        role="list"
                                                                                        aria-labelledby={`${section.name}-heading`}
                                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                    >
                                                                                        {section.items.map(
                                                                                            (
                                                                                                item
                                                                                            ) => (
                                                                                                <li
                                                                                                    key={
                                                                                                        item.name
                                                                                                    }
                                                                                                    className="flex"
                                                                                                >
                                                                                                    <Link
                                                                                                        to={`/products?category=${item.path}`}
                                                                                                        className="hover:text-indigo-700"
                                                                                                    >
                                                                                                        {
                                                                                                            item.name
                                                                                                        }
                                                                                                    </Link>
                                                                                                </li>
                                                                                            )
                                                                                        )}
                                                                                    </ul>
                                                                                </div>
                                                                            )
                                                                        )}
                                                                        <div className="basis-3/4 grid grid-cols-3">
                                                                            {category.featured.map(
                                                                                (
                                                                                    item
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            item.title
                                                                                        }
                                                                                        className="group relative text-base sm:text-sm px-6"
                                                                                    >
                                                                                        <Link
                                                                                            to={`/products/${item.slug}`}
                                                                                            className="block text-base font-semibold text-indigo-600 line-clamp-1"
                                                                                        >
                                                                                            <div className="w-60 mx-auto overflow-hidden rounded-lg group-hover:scale-110 transition-all px-6 py-2">
                                                                                                <img
                                                                                                    src={
                                                                                                        item.image_url
                                                                                                    }
                                                                                                    alt={
                                                                                                        item.title
                                                                                                    }
                                                                                                    className="object-cover object-center"
                                                                                                />
                                                                                            </div>

                                                                                            <span
                                                                                                className="absolute inset-0 z-10 "
                                                                                                aria-hidden="true"
                                                                                            />
                                                                                            {
                                                                                                item.title
                                                                                            }
                                                                                        </Link>
                                                                                        <p
                                                                                            aria-hidden="true"
                                                                                            className="mt-1"
                                                                                        >
                                                                                            Shop
                                                                                            now
                                                                                        </p>
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <Link
                                            key={page.name}
                                            to={page.path}
                                            className="flex items-center text-sm font-medium text-gray-500 hover:text-indigo-700"
                                        >
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? (
                                        <Link
                                            to="/profile"
                                            className="text-indigo-600 font-semibold capitalize"
                                        >
                                            <Avatar
                                                src={user.avatar}
                                                name={user.fullname}
                                                size={50}
                                                round={true}
                                            />
                                            <span className="px-2">
                                                {user.fullname}
                                            </span>
                                        </Link>
                                    ) : (
                                        <Link
                                            to="/signin"
                                            className="text-base font-medium text-gray-500 hover:text-indigo-700"
                                        >
                                            Sign in
                                        </Link>
                                    )}
                                    <span
                                        className="h-6 w-px bg-gray-200"
                                        aria-hidden="true"
                                    />
                                    {user ? (
                                        <MdLogout
                                            className="text-base md:text-xl cursor-pointer text-gray-400 hover:text-inherit transition-all"
                                            onClick={() => {
                                                onHandleSignOut();
                                            }}
                                        >
                                            Sign out
                                        </MdLogout>
                                    ) : (
                                        <Link
                                            to="/signup"
                                            className="text-base font-medium text-gray-500 hover:text-indigo-700"
                                        >
                                            Create account
                                        </Link>
                                    )}
                                </div>

                                <div className="hidden lg:ml-8 lg:flex">
                                    <a
                                        href="#"
                                        className="flex items-center text-gray-500 hover:text-indigo-700"
                                    >
                                        <img
                                            src="/assets/vietnam-flag-icon.png"
                                            alt="VND currency"
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-sm font-medium">
                                            VND
                                        </span>
                                        <span className="sr-only">
                                            , change currency
                                        </span>
                                    </a>
                                </div>

                                {/* Desktop Search */}
                                {!isMobile && <SearchBar />}

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link
                                        to="/cart"
                                        className="group -m-2 flex items-center p-2"
                                    >
                                        <ShoppingBagIcon
                                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-2 text-base font-medium text-gray-500 group-hover:text-indigo-700">
                                            0
                                        </span>
                                        <span className="sr-only">
                                            items in cart, view bag
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Search */}
                        {isMobile && <SearchBar />}
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
