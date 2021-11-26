/*<![CDATA[*/
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0])
        .appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'rivas-web-designs.myshopify.com',
            storefrontAccessToken: 'eba450e181f5ca6b7aadf60935318801',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('collection', {
                id: '263681605680',
                node: document.getElementById('collection-component-1637816485183'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "text": {
                            "button": "View Item",
                            "regularPriceAccessibilityLabel": "Starting at"
                        },
                        "buttonDestination": "modal",

                    },
                    "productSet": {
                        iframe: false,
                        contents: {
                            title: false,
                            products: true,
                            pagination: false,
                        },
                    },
                    "modalProduct": {
                        "contents": {
                            img: false,
                            imgWithCarousel: true,
                            button: true,
                            buttonWithQuantity: false,
                            quantityIncrement: true,
                            quantityDecrement: true,
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 0)": {
                                    "max-width": "100%",
                                }
                            },
                            "button": {
                                "background-color": "black"
                            }
                        },
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "option": {},
                    "cart": {
                        "text": {
                            "total": "Subtotal",
                            "button": "Checkout"
                        },
                        "styles": {
                            "background-color": "#a4a4a4",
                            "button": {
                                "background-color": "black",
                                "border-radius": "unset"
                            }
                        }
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "background-color": "black",
                            }
                        }
                    }
                },
            });
        });
    }
})();
/*]]>*/