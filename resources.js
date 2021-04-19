const abeg = {
    "backgroundColor": "0xff753ff6",
    "dismissIconColor": "0xffffffff",
    "dismissButtonColor": "0xff8a5cf7",
    "shouldShowDismiss": true,
    "isFullScreen": true,
    "size": {
        "height": 400,
        "width": 400
    },
    "type": "listview",
    "children": [
        {
            "type": "verticalSpacer",
            "height": 15.0
        },
        {
            "type": "image",
            "imageUrl": "https://play-lh.googleusercontent.com/Du1MJqGw7EvXrlNZlLWV4YgkJLmqqKWUkx-gtpszAePQo0z-TS4na29lmrlkPFmuNyE3",
            "size": {
                "width": 80.0,
                "height": 80.0
            },
            "borderRadius": 10.0,
            "verticalPadding": 30.0
        },
        {
            "type": "verticalSpacer",
            "height": 20.0
        },
        {
            "type": "text",
            "data": "You made it rain!",
            "textAlignment": "center",
            "style": {
                "fontSize": 28.0,
                "fontWeight": "800",
                "color": "0xffffffff"
            },
            "verticalPadding": 30.0
        },
        {
            "type": "image",
            "imageUrl": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Faa268947-a842-48b3-bf5e-73800690aaf0_1600x1362.jpeg",
            "size": {
                "width": 300.0,
                "height": 300.0
            },
            "borderRadius": 10.0
        },
        {
            "type": "verticalSpacer",
            "height": 30.0
        },
        {
            "type": "center",
            "child": {
                "type": "text",
                "data": "100 Ejikems on their way to Ichtrojan and 5 others",
                "textAlignment": "center",
                "style": {
                    "fontSize": 18.0,
                    "fontWeight": "400",
                    "color": "0xffffffff"
                },
                "width": 250.0,
                "verticalPadding": 30.0
            }
        }
    ]
}

const netflix = {
    "backgroundColor": "0xff000000",
    "dismissIconColor": "0xffffffff",
    "dismissButtonColor": "0xffe30813",
    "shouldShowDismiss": true,
    "isFullScreen": true,
    "size": {
        "height": 400,
        "width": 400
    },
    "type": "listview",
    "children": [
        {
            "type": "verticalSpacer",
            "height": 15.0
        },
        {
            "type": "image",
            "imageUrl": "https://simg.nicepng.com/png/small/151-1510639_netflix-app-icon-png.png",
            "size": {
                "width": 80.0,
                "height": 80.0
            },
            "borderRadius": 10.0,
            "verticalPadding": 30.0
        },
        {
            "type": "verticalSpacer",
            "height": 20.0
        },
        {
            "type": "text",
            "data": "Welcome back Lucky!\nLet's setup your account.",
            "textAlignment": "center",
            "style": {
                "fontSize": 28.0,
                "fontWeight": "800",
                "color": "0xffffffff"
            },
            "verticalPadding": 25.0
        },
        {
            "type": "text",
            "data": "Choose the plan that’s right for you",
            "textAlignment": "center",
            "style": {
                "fontSize": 18.0,
                "fontWeight": "bold",
                "color": "0xffffffff"
            },
            "verticalPadding": 5.0
        },
        {
            "type": "text",
            "data": "Watch anywhere, cancel anytime.",
            "textAlignment": "center",
            "style": {
                "fontSize": 15.0,
                "fontWeight": "400",
                "color": "0xffffffff"
            },
            "verticalPadding": 30.0
        },
        {
            "type": "column",
            "children": [
                {
                    "type": "row",
                    "mainAxisAlignment": "spaceEvenly",
                    "children": [
                        {
                            "type": "inkwell",
                            "splashColor": "0xffef6b72",
                            "child": {
                                "type": "container",
                                "height": 120.0,
                                "width": 120.0,
                                "color": "0xffe50914",
                                "radius": 10.0,
                                "alignment": "center",
                                "child": {
                                    "type": "text",
                                    "data": "Basic",
                                    "textAlignment": "center",
                                    "style": {
                                        "fontSize": 18.0,
                                        "fontWeight": "600",
                                        "color": "0xffffffff"
                                    }
                                }
                            }
                        },
                        {
                            "type": "column",
                            "crossAxisAlignment": "end",
                            "children": [
                                {
                                    "type": "wrap",
                                    "horizontalSpacing": 5.0,
                                    "children": [
                                        {
                                            "type": "text",
                                            "data": "Monthly price: ",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 16.0,
                                                "fontWeight": "700",
                                                "color": "0xffffffff"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "data": "₦2,900",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 14.0,
                                                "fontWeight": "bold",
                                                "color": "0xffffffff"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "verticalSpacer",
                                    "height": 5.0
                                },
                                {
                                    "type": "wrap",
                                    "horizontalSpacing": 5.0,
                                    "children": [
                                        {
                                            "type": "text",
                                            "data": "Video quality: ",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 16.0,
                                                "fontWeight": "700",
                                                "color": "0xffffffff"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "data": "Good",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 14.0,
                                                "fontWeight": "bold",
                                                "color": "0xffffffff"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "verticalSpacer",
                                    "height": 5.0
                                },
                                {
                                    "type": "wrap",
                                    "horizontalSpacing": 5.0,
                                    "children": [
                                        {
                                            "type": "text",
                                            "data": "Resolution: ",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 16.0,
                                                "fontWeight": "700",
                                                "color": "0xffffffff"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "data": "480p",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 14.0,
                                                "fontWeight": "bold",
                                                "color": "0xffffffff"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "verticalSpacer",
                    "height": 20.0
                },
                {
                    "type": "row",
                    "mainAxisAlignment": "spaceEvenly",
                    "children": [
                        {
                            "type": "inkwell",
                            "splashColor": "0xffef6b72",
                            "child": {
                                "type": "container",
                                "height": 120.0,
                                "width": 120.0,
                                "color": "0xffe50914",
                                "radius": 10.0,
                                "alignment": "center",
                                "child": {
                                    "type": "text",
                                    "data": "Standard",
                                    "textAlignment": "center",
                                    "style": {
                                        "fontSize": 18.0,
                                        "fontWeight": "600",
                                        "color": "0xffffffff"
                                    }
                                }
                            }
                        },
                        {
                            "type": "column",
                            "crossAxisAlignment": "end",
                            "children": [
                                {
                                    "type": "wrap",
                                    "horizontalSpacing": 5.0,
                                    "children": [
                                        {
                                            "type": "text",
                                            "data": "Monthly price: ",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 16.0,
                                                "fontWeight": "700",
                                                "color": "0xffffffff"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "data": "₦3,600",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 14.0,
                                                "fontWeight": "bold",
                                                "color": "0xffffffff"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "verticalSpacer",
                                    "height": 5.0
                                },
                                {
                                    "type": "wrap",
                                    "horizontalSpacing": 5.0,
                                    "children": [
                                        {
                                            "type": "text",
                                            "data": "Video quality: ",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 16.0,
                                                "fontWeight": "700",
                                                "color": "0xffffffff"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "data": "Great",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 14.0,
                                                "fontWeight": "bold",
                                                "color": "0xffffffff"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "verticalSpacer",
                                    "height": 5.0
                                },
                                {
                                    "type": "wrap",
                                    "horizontalSpacing": 5.0,
                                    "children": [
                                        {
                                            "type": "text",
                                            "data": "Resolution: ",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 16.0,
                                                "fontWeight": "700",
                                                "color": "0xffffffff"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "data": "1080p",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 14.0,
                                                "fontWeight": "bold",
                                                "color": "0xffffffff"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "verticalSpacer",
                    "height": 20.0
                },
                {
                    "type": "row",
                    "mainAxisAlignment": "spaceEvenly",
                    "children": [
                        {
                            "type": "inkwell",
                            "splashColor": "0xffef6b72",
                            "child": {
                                "type": "container",
                                "height": 120.0,
                                "width": 120.0,
                                "color": "0xffe50914",
                                "radius": 10.0,
                                "alignment": "center",
                                "child": {
                                    "type": "text",
                                    "data": "Premium",
                                    "textAlignment": "center",
                                    "style": {
                                        "fontSize": 18.0,
                                        "fontWeight": "600",
                                        "color": "0xffffffff"
                                    }
                                }
                            }
                        },
                        {
                            "type": "column",
                            "crossAxisAlignment": "end",
                            "children": [
                                {
                                    "type": "wrap",
                                    "horizontalSpacing": 5.0,
                                    "children": [
                                        {
                                            "type": "text",
                                            "data": "Monthly price: ",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 16.0,
                                                "fontWeight": "700",
                                                "color": "0xffffffff"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "data": "₦4,400",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 14.0,
                                                "fontWeight": "bold",
                                                "color": "0xffffffff"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "verticalSpacer",
                                    "height": 5.0
                                },
                                {
                                    "type": "wrap",
                                    "horizontalSpacing": 5.0,
                                    "children": [
                                        {
                                            "type": "text",
                                            "data": "Video quality: ",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 16.0,
                                                "fontWeight": "700",
                                                "color": "0xffffffff"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "data": "Best",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 14.0,
                                                "fontWeight": "bold",
                                                "color": "0xffffffff"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "verticalSpacer",
                                    "height": 5.0
                                },
                                {
                                    "type": "wrap",
                                    "horizontalSpacing": 5.0,
                                    "children": [
                                        {
                                            "type": "text",
                                            "data": "Resolution: ",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 16.0,
                                                "fontWeight": "700",
                                                "color": "0xffffffff"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "data": "4K+HDR",
                                            "textAlignment": "center",
                                            "style": {
                                                "fontSize": 14.0,
                                                "fontWeight": "bold",
                                                "color": "0xffffffff"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "verticalSpacer",
            "height": 20.0
        }
    ]
}

const bamboo = {
    "backgroundColor": "0xff0fdba8",
    "dismissIconColor": "0xffffffff",
    "dismissButtonColor": "0xff0b5b41",
    "shouldShowDismiss": true,
    "isFullScreen": true,
    "size": {
        "height": 400,
        "width": 400
    },
    "type": "listview",
    "children": [
        {
            "type": "center",
            "child": {
                "type": "circleAvatar",
                "radius": 30.0,
                "imageUrl": "https://media-exp1.licdn.com/dms/image/C4D0BAQGyWYlu5VgtpA/company-logo_200_200/0/1570814861373?e=2159024400&v=beta&t=WIjCrD28MnP6uA83WKq07oMCVM00x4dWbsah8rYsk38"
            }
        },
        {
            "type": "verticalSpacer",
            "height": 10.0
        },
        {
            "type": "text",
            "data": "SE-what? We gat you!",
            "textAlignment": "center",
            "style": {
                "fontSize": 30.0,
                "fontWeight": "800",
                "color": "0xffffffff"
            },
            "verticalPadding": 20.0
        },
        {
            "type": "image",
            "imageUrl": "https://ci6.googleusercontent.com/proxy/xDsRYIjp-sY-YvJONM5DE6rFhsBjaZkETvtfI38fvmGVn8WrKTCaf0Penf5bGFT_4tZXraFJ38fE4VmDD8p8Hf-bkRGH1TH6hQWySaA5BiYAX8orUObKOarR_SL66Q=s0-d-e1-ft#https://userimg-bee.customeriomail.com/images/client-env-89804/SEC_Safe.jpg",
            "size": {
                "width": 250.0,
                "height": 250.0
            }
        },
        {
            "type": "verticalSpacer",
            "height": 20.0
        },
        {
            "type": "padding",
            "padding": {
                "left": 10.0,
                "right": 10.0
            },
            "child": {
                "type": "text",
                "data": "   Please be assured that your assets are safe on Bamboo and that you will always have easy access to your funds and assets on the Bamboo Platform. We are still able to carry out all our operations and will continue to do so.\n\n   By opening a Bamboo account, you have also opened an account with our US broker partner, DriveWeath LLC. DriveWealth is licensed by the U.S. Securities and Exchange Commission and is also a member of the Financial Industry Regulatory Authority (FINRA) and the U.S. Securities Investor Protection Corporation (SIPC).\n\n   The SIPC insures your Bamboo account up to $500,000. All your wallet balances on Bamboo are insured up to $250,000 by the U.S. Federal Deposit Insurance Corporation (FDIC).\n\n   If you have any questions please don’t hesitate to contact us at support@investbamboo.com.\n\n   Once again, thank you for your continued faith and trust in us. We will continue to do our best to serve you.\n\nBest,\nRichmond Bassey,\nCEO, Bamboo",
                "textAlignment": "left",
                "style": {
                    "fontSize": 16.0,
                    "fontWeight": "400",
                    "color": "0xffffffff"
                },
                "verticalPadding": 30.0
            }
        }
    ]
}

module.exports = { abeg, netflix, bamboo };