import Vue from 'vue'

import {apiUrl} from '../main.js';
import Auth from '../auth'

const endPoint = 'http://api-demo.seekom.com'

export function getToken(auth, cb, errorCb) {
    var payload = {
        'clientId': auth.clientId,
        'client_secret': auth.clientSecret,
        'grant_type': 'authorization_code',
        'code': auth.code
    }

    // Vue.http.post(endPoint + '/oauth/token', payload)
    // .then(
    //     function(response) {
    //         cb('success')
    //     },
    //     function(response) {
    //         errorCb('error');
    //     }
    // )
    var response = {
        "access_token":"4RN8kM8NpxqrJpBWhV2mN/MwGLUuhXIWtN364RMhya1dAnQRfC3u7sash+Ob3J3y",
        "token_type":"Bearer",
        "expires_in":86400,
        "refresh_token":"q\/9zZb4NCyRQQb4IzHIUg1DA1PP3dcYDaDWnEimQr8GIpFidnfaE0odoZ4E88EBW",
        "refresh_token_expires_in":31536000
    }
    setTimeout(function() {
        cb(response)
    },2000)
}

export function getPropertyMetaData(cb, errorCb) {
    // var auth = new Auth()
    // var token = auth.getToken()
    // if (!token || !token.access_token) {
    //     errorCb({
    //         code: 401,
    //         message: 'token not found',
    //         trace: ''
    //     })
    // }
    // Vue.http.headers.common['Authorization'] = token.access_token;
    //
    // Vue.http.get(endPoint + '/properties-metadata')
    // .then(
    //     function(response) {
    //         cb(response)
    //     },
    //     function(response) {
    //         errorCb(response);
    //     }
    // )
    var response = {
    "facilities": {
        "1": "Parking",
        "2": "Laundry",
        "3": "Lift",
        "4": "Disabled",
        "5": "Internet",
        "6": "Conference",
        "7": "Business",
        "8": "Room Service",
        "9": "Dining",
        "10": "Bar",
        "11": "Pets",
        "12": "Pool",
        "13": "Spa",
        "14": "Airconditioning",
        "15": "Satellite TV"
    },
    "types": {
        "3": "Apartment",
        "4": "Bed & Breakfast",
        "5": "Cabin / Bungalow",
        "6": "Holiday Park",
        "7": "Chalet",
        "15": "Homestay / Farmstay",
        "16": "Guest House",
        "17": "Health Spa / Retreat",
        "19": "Backpackers / Hostel",
        "20": "Hotel",
        "21": "Inn",
        "22": "Lodge",
        "27": "Motel",
        "30": "Resort",
        "33": "Campground",
        "34": "Holiday Home",
        "35": "Cottage / Villa",
        "45": "Boutique",
        "48": "Colonial / Historical"
    },
    "ratings": {
        "0": "Pending",
        "1": "1 Star",
        "2": "2 Stars",
        "3": "3 Stars",
        "4": "4 Stars",
        "5": "5 Stars",
        "": "None",
        "1.5": "1.5 Stars",
        "2.5": "2.5 Stars",
        "3.5": "3.5 Stars",
        "4.5": "4.5 Stars"
    },
    "times": {
        "1000": "10:00 AM",
        "1030": "10:30 AM",
        "1100": "11:00 AM",
        "1130": "11:30 AM",
        "1200": "12:00 PM",
        "1230": "12:30 PM",
        "1300": "01:00 PM",
        "1330": "01:30 PM",
        "1400": "02:00 PM",
        "1430": "02:30 PM",
        "1500": "03:00 PM",
        "1530": "03:30 PM",
        "1600": "04:00 PM",
        "1630": "04:30 PM",
        "1700": "05:00 PM",
        "1730": "05:30 PM",
        "1800": "06:00 PM",
        "1830": "06:30 PM",
        "1900": "07:00 PM",
        "1930": "07:30 PM",
        "2000": "08:00 PM",
        "2030": "08:30 PM",
        "2100": "09:00 PM",
        "2130": "09:30 PM",
        "2200": "10:00 PM",
        "2230": "10:30 PM",
        "2300": "11:00 PM",
        "0000": "12:00 AM",
        "0030": "12:30 AM",
        "0100": "01:00 AM",
        "0130": "01:30 AM",
        "0200": "02:00 AM",
        "0230": "02:30 AM",
        "0300": "03:00 AM",
        "0330": "03:30 AM",
        "0400": "04:00 AM",
        "0430": "04:30 AM",
        "0500": "05:00 AM",
        "0530": "05:30 AM",
        "0600": "06:00 AM",
        "0630": "06:30 AM",
        "0700": "07:00 AM",
        "0730": "07:30 AM",
        "0800": "08:00 AM",
        "0830": "08:30 AM",
        "0900": "09:00 AM",
        "0930": "09:30 AM"
    }
}
cb(response)
}

export function getProperty(cb, errorCb) {
    var response = [
        {
            "type": "properties",
            "id": "100",
            "attributes": {
                "name": "Andromeda Resort",
                "type": "30",
                "enabled": true,
                "currency": "NZD",
                "closed-date-ranges": [],
                "description": null,
                "promotions": null,
                "lead-in-special": null,
                "carpark": null,
                "additional-information": null,
                "directions": null,
                "location": null,
                "star-rating": null,
                "website": "http://www.seekom.com/accommodation/Property.php?o",
                "reception-hours": null,
                "creditcard": {
                    "fee": 0,
                    "extra": {
                        "id": null,
                        "name": null
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "14:00:00"
                },
                "facilities": {
                    "property": [],
                    "room": null,
                    "general": []
                },
                "policies": {
                    "payment": null,
                    "cancellation": "property",
                    "child": null,
                    "checkIn": null
                },
                "address": {
                    "physical": "Jellicoe Street\nMartinborough\nWairarapa\nNew Zealand",
                    "country": {
                        "iso-short-code": "NZL",
                        "code": "NZ",
                        "name": "New Zealand"
                    },
                    "region": {
                        "id": 42,
                        "name": "Wairarapa"
                    },
                    "sub-region": {
                        "id": 359,
                        "name": "Martinborough"
                    },
                    "postal": "Jellicoe Street\nMartinborough\nWairarapa\nNew Zealand"
                },
                "phone": {
                    "main": "12342566789",
                    "tollfree": "0800 123 456",
                    "fax": null
                },
                "contact": {
                    "name": "Clare Glover",
                    "email": "support@seekom.com"
                }
            }
        },
        {
            "type": "properties",
            "id": "101",
            "attributes": {
                "name": "Arapawa Luxury Retreat",
                "type": "30",
                "enabled": true,
                "currency": "NZD",
                "closed-date-ranges": [],
                "description": null,
                "promotions": null,
                "lead-in-special": null,
                "carpark": null,
                "additional-information": null,
                "directions": null,
                "location": null,
                "star-rating": null,
                "website": null,
                "reception-hours": null,
                "creditcard": {
                    "fee": null,
                    "extra": {
                        "id": null,
                        "name": null
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "14:00:00"
                },
                "facilities": {
                    "property": [],
                    "room": null,
                    "general": []
                },
                "policies": {
                    "payment": null,
                    "cancellation": null,
                    "child": null,
                    "checkIn": null
                },
                "address": {
                    "physical": null,
                    "country": {
                        "iso-short-code": "NZL",
                        "code": "NZ",
                        "name": "New Zealand"
                    },
                    "region": {
                        "id": 25,
                        "name": "Marlborough"
                    },
                    "sub-region": {
                        "id": 1156,
                        "name": "Queen Charlotte Sound"
                    },
                    "postal": null
                },
                "phone": {
                    "main": null,
                    "tollfree": null,
                    "fax": null
                },
                "contact": {
                    "name": null,
                    "email": null
                }
            }
        },
        {
            "type": "properties",
            "id": "105",
            "attributes": {
                "name": "Milky Way Motel",
                "type": "27",
                "enabled": true,
                "currency": "AUD",
                "closed-date-ranges": [],
                "description": null,
                "promotions": null,
                "lead-in-special": null,
                "carpark": null,
                "additional-information": null,
                "directions": null,
                "location": null,
                "star-rating": "4.5",
                "website": "web.seekom.com",
                "reception-hours": null,
                "creditcard": {
                    "fee": 2,
                    "extra": {
                        "id": 810,
                        "name": "cc fee"
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "14:00:00"
                },
                "facilities": {
                    "property": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ],
                    "room": null,
                    "general": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ]
                },
                "policies": {
                    "payment": null,
                    "cancellation": null,
                    "child": null,
                    "checkIn": null
                },
                "address": {
                    "physical": "267 Wakefield Street\nWellington",
                    "country": {
                        "iso-short-code": "NZL",
                        "code": "NZ",
                        "name": "New Zealand"
                    },
                    "region": {
                        "id": 42,
                        "name": "Wairarapa"
                    },
                    "sub-region": {
                        "id": 359,
                        "name": "Martinborough"
                    },
                    "postal": "267 Wakefield Street\nWellington"
                },
                "phone": {
                    "main": "04 974 8008",
                    "tollfree": "04 974 8008",
                    "fax": null
                },
                "contact": {
                    "name": "Clare Glover",
                    "email": "clare@seekom.com"
                }
            }
        },
        {
            "type": "properties",
            "id": "102",
            "attributes": {
                "name": "Monsieur et Madame Resort & Spa",
                "type": "30",
                "enabled": true,
                "currency": "NZD",
                "closed-date-ranges": [],
                "description": null,
                "promotions": null,
                "lead-in-special": null,
                "carpark": null,
                "additional-information": null,
                "directions": null,
                "location": null,
                "star-rating": null,
                "website": null,
                "reception-hours": null,
                "creditcard": {
                    "fee": 0,
                    "extra": {
                        "id": null,
                        "name": null
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "14:00:00"
                },
                "facilities": {
                    "property": [],
                    "room": null,
                    "general": []
                },
                "policies": {
                    "payment": null,
                    "cancellation": null,
                    "child": null,
                    "checkIn": null
                },
                "address": {
                    "physical": null,
                    "country": {
                        "iso-short-code": "FRA",
                        "code": "FR",
                        "name": "France"
                    },
                    "region": {
                        "id": 57,
                        "name": "Paris"
                    },
                    "sub-region": {
                        "id": 3285,
                        "name": "Versailles"
                    },
                    "postal": null
                },
                "phone": {
                    "main": null,
                    "tollfree": null,
                    "fax": null
                },
                "contact": {
                    "name": null,
                    "email": null
                }
            }
        },
        {
            "type": "properties",
            "id": "104",
            "attributes": {
                "name": "PMS Test Property Buy Currency: US$",
                "type": "27",
                "enabled": true,
                "currency": "USD",
                "closed-date-ranges": [],
                "description": null,
                "promotions": null,
                "lead-in-special": null,
                "carpark": null,
                "additional-information": null,
                "directions": null,
                "location": null,
                "star-rating": null,
                "website": null,
                "reception-hours": null,
                "creditcard": {
                    "fee": null,
                    "extra": {
                        "id": null,
                        "name": null
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "14:00:00"
                },
                "facilities": {
                    "property": [],
                    "room": null,
                    "general": []
                },
                "policies": {
                    "payment": null,
                    "cancellation": null,
                    "child": null,
                    "checkIn": null
                },
                "address": {
                    "physical": "267 Wakefield Street",
                    "country": {
                        "iso-short-code": "USA",
                        "code": "US",
                        "name": "United States of America (the)"
                    },
                    "region": {
                        "id": 602,
                        "name": "Montana"
                    },
                    "sub-region": {
                        "id": 3031,
                        "name": "Great Falls"
                    },
                    "postal": null
                },
                "phone": {
                    "main": "049748008",
                    "tollfree": null,
                    "fax": null
                },
                "contact": {
                    "name": null,
                    "email": "support@seekom.com"
                }
            }
        },
        {
            "type": "properties",
            "id": "103",
            "attributes": {
                "name": "Seekom Test Property (USA)",
                "type": "27",
                "enabled": true,
                "currency": "NZD",
                "closed-date-ranges": [],
                "description": null,
                "promotions": null,
                "lead-in-special": null,
                "carpark": null,
                "additional-information": null,
                "directions": null,
                "location": null,
                "star-rating": null,
                "website": null,
                "reception-hours": null,
                "creditcard": {
                    "fee": 0,
                    "extra": {
                        "id": null,
                        "name": null
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "14:00:00"
                },
                "facilities": {
                    "property": [],
                    "room": null,
                    "general": []
                },
                "policies": {
                    "payment": null,
                    "cancellation": null,
                    "child": null,
                    "checkIn": null
                },
                "address": {
                    "physical": "267 Wakefield Street",
                    "country": {
                        "iso-short-code": "USA",
                        "code": "US",
                        "name": "United States of America (the)"
                    },
                    "region": {
                        "id": 602,
                        "name": "Montana"
                    },
                    "sub-region": {
                        "id": 3031,
                        "name": "Great Falls"
                    },
                    "postal": null
                },
                "phone": {
                    "main": "049748008",
                    "tollfree": null,
                    "fax": null
                },
                "contact": {
                    "name": null,
                    "email": "support@seekom.com"
                }
            }
        },
        {
            "type": "properties",
            "id": "107",
            "attributes": {
                "name": "Hart Hotel",
                "type": "20",
                "enabled": true,
                "currency": "NZD",
                "closed-date-ranges": [],
                "description": null,
                "promotions": null,
                "lead-in-special": null,
                "carpark": null,
                "additional-information": null,
                "directions": null,
                "location": null,
                "star-rating": null,
                "website": null,
                "reception-hours": null,
                "creditcard": {
                    "fee": 0,
                    "extra": {
                        "id": null,
                        "name": null
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "14:00:00"
                },
                "facilities": {
                    "property": [],
                    "room": null,
                    "general": []
                },
                "policies": {
                    "payment": "test2 ",
                    "cancellation": "test2",
                    "child": null,
                    "checkIn": null
                },
                "address": {
                    "physical": "42/35 Pirie Street,\nMount Victoria\nWellington 6023",
                    "country": {
                        "iso-short-code": "NZL",
                        "code": "NZ",
                        "name": "New Zealand"
                    },
                    "region": {
                        "id": 31,
                        "name": "Wellington Central"
                    },
                    "sub-region": {
                        "id": 366,
                        "name": "Wellington CBD"
                    },
                    "postal": "42/35 Pirie Street,\nMount Victoria\nWellington 6023"
                },
                "phone": {
                    "main": null,
                    "tollfree": null,
                    "fax": null
                },
                "contact": {
                    "name": null,
                    "email": null
                }
            }
        },
        {
            "type": "properties",
            "id": "106",
            "attributes": {
                "name": "Hotel Deutsche Eiche  (EUR)",
                "type": "20",
                "enabled": true,
                "currency": "EUR",
                "closed-date-ranges": [],
                "description": null,
                "promotions": null,
                "lead-in-special": null,
                "carpark": null,
                "additional-information": null,
                "directions": null,
                "location": null,
                "star-rating": null,
                "website": null,
                "reception-hours": null,
                "creditcard": {
                    "fee": 0,
                    "extra": {
                        "id": null,
                        "name": null
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "14:00:00"
                },
                "facilities": {
                    "property": [],
                    "room": null,
                    "general": []
                },
                "policies": {
                    "payment": null,
                    "cancellation": null,
                    "child": null,
                    "checkIn": null
                },
                "address": {
                    "physical": null,
                    "country": {
                        "iso-short-code": "NZL",
                        "code": "NZ",
                        "name": "New Zealand"
                    },
                    "region": {
                        "id": 31,
                        "name": "Wellington Central"
                    },
                    "sub-region": {
                        "id": 366,
                        "name": "Wellington CBD"
                    },
                    "postal": null
                },
                "phone": {
                    "main": "049748008",
                    "tollfree": null,
                    "fax": null
                },
                "contact": {
                    "name": null,
                    "email": "steffen+Eiche@seekom.com"
                }
            }
        },
        {
            "type": "properties",
            "id": "108",
            "attributes": {
                "name": "Cloverlea Hotel",
                "type": "20",
                "enabled": true,
                "currency": "NZD",
                "closed-date-ranges": [],
                "description": null,
                "promotions": null,
                "lead-in-special": null,
                "carpark": null,
                "additional-information": null,
                "directions": null,
                "location": null,
                "star-rating": "4.0",
                "website": null,
                "reception-hours": null,
                "creditcard": {
                    "fee": 0,
                    "extra": {
                        "id": null,
                        "name": null
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "14:00:00"
                },
                "facilities": {
                    "property": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ],
                    "room": null,
                    "general": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ]
                },
                "policies": {
                    "payment": null,
                    "cancellation": null,
                    "child": null,
                    "checkIn": null
                },
                "address": {
                    "physical": "111 Long Drive \nWellington  4418",
                    "country": {
                        "iso-short-code": "NZL",
                        "code": "NZ",
                        "name": "New Zealand"
                    },
                    "region": {
                        "id": 51,
                        "name": "Wellington Region"
                    },
                    "sub-region": {
                        "id": 3165,
                        "name": "Raumati Beach"
                    },
                    "postal": "111 Long Drive \nWellington  4418"
                },
                "phone": {
                    "main": "04 974 8008",
                    "tollfree": "0800 333 555",
                    "fax": "04 456 1368"
                },
                "contact": {
                    "name": "Reena Ravji ",
                    "email": "reena@seekom.com"
                }
            }
        },
        {
            "type": "properties",
            "id": "109",
            "attributes": {
                "name": "iBex Motel",
                "type": null,
                "enabled": true,
                "currency": "NZD",
                "closed-date-ranges": [],
                "description": null,
                "promotions": null,
                "lead-in-special": null,
                "carpark": null,
                "additional-information": null,
                "directions": null,
                "location": null,
                "star-rating": null,
                "website": null,
                "reception-hours": null,
                "creditcard": {
                    "fee": 0,
                    "extra": {
                        "id": null,
                        "name": null
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "14:00:00"
                },
                "facilities": {
                    "property": [],
                    "room": null,
                    "general": []
                },
                "policies": {
                    "payment": null,
                    "cancellation": null,
                    "child": null,
                    "checkIn": null
                },
                "address": {
                    "physical": null,
                    "country": {
                        "iso-short-code": "NZL",
                        "code": "NZ",
                        "name": "New Zealand"
                    },
                    "region": {
                        "id": 42,
                        "name": "Wairarapa"
                    },
                    "sub-region": {
                        "id": 359,
                        "name": "Martinborough"
                    },
                    "postal": "6840 Lehner Mountain\nKent 11832"
                },
                "phone": {
                    "main": "+21349748008",
                    "tollfree": "+21349748008",
                    "fax": null
                },
                "contact": {
                    "name": null,
                    "email": "julia@seekom.com"
                }
            }
        },
        {
            "type": "properties",
            "id": "111",
            "attributes": {
                "name": "Magellan Holiday Park",
                "type": "6",
                "enabled": true,
                "currency": "NZD",
                "closed-date-ranges": [],
                "description": null,
                "promotions": null,
                "lead-in-special": null,
                "carpark": null,
                "additional-information": null,
                "directions": null,
                "location": null,
                "star-rating": null,
                "website": null,
                "reception-hours": null,
                "creditcard": {
                    "fee": null,
                    "extra": {
                        "id": null,
                        "name": null
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "14:00:00"
                },
                "facilities": {
                    "property": [],
                    "room": null,
                    "general": []
                },
                "policies": {
                    "payment": null,
                    "cancellation": null,
                    "child": null,
                    "checkIn": null
                },
                "address": {
                    "physical": null,
                    "country": {
                        "iso-short-code": "NZL",
                        "code": "NZ",
                        "name": "New Zealand"
                    },
                    "region": {
                        "id": 46,
                        "name": "Queenstown"
                    },
                    "sub-region": {
                        "id": 265,
                        "name": "Arthurs Point"
                    },
                    "postal": null
                },
                "phone": {
                    "main": null,
                    "tollfree": null,
                    "fax": null
                },
                "contact": {
                    "name": null,
                    "email": null
                }
            }
        },
        {
            "type": "properties",
            "id": "110",
            "attributes": {
                "name": "Orion's Belt Bungalows",
                "type": "5",
                "enabled": true,
                "currency": "NZD",
                "closed-date-ranges": [],
                "description": "Self contained modern Bungalows with specatular lake views, various Bungalow sizes available, located in the heart of the Wairarapa. Come and see all the different restaurants, bars, wineries, and cafes central Wairarapa has to offer.",
                "promotions": "Mid-week specials available. Please enquire.",
                "lead-in-special": "Come stay in the heart of the Wairarapa!",
                "carpark": "We have onsite car parking available, free of charge for our guests. ",
                "additional-information": "Reception Hours: 7am-7pm\n\n<b>Damage Policy</b>\nAny damage will incur additional fees\n",
                "directions": null,
                "location": null,
                "star-rating": null,
                "website": "web.seekom.com",
                "reception-hours": "6.30am - 10pm",
                "creditcard": {
                    "fee": null,
                    "extra": {
                        "id": null,
                        "name": null
                    }
                },
                "times": {
                    "checkin": "14:00:00",
                    "checkout": "10:00:00",
                    "max-checkin": "23:00:00"
                },
                "facilities": {
                    "property": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7
                    ],
                    "room": "All Bungalows contain spa baths, lake view balconys, and kitchenettes.",
                    "general": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7
                    ]
                },
                "policies": {
                    "payment": "<b>test test</b>",
                    "cancellation": "If you give us 5+ days notice of cancellation, we will refund 100% of your booking. If you cancel within 5 days of check-in, we will refund 50% of your booking.\nIf you do not show, we will not refund your booking.  ",
                    "child": "We are child friendly, but please ensure children are supervised in our boutique bungalows.",
                    "checkIn": "Check-in from any time after 2pm"
                },
                "address": {
                    "physical": "267 Jellicoe Street\nWairarapa\n 6013",
                    "country": {
                        "iso-short-code": "NZL",
                        "code": "NZ",
                        "name": "New Zealand"
                    },
                    "region": {
                        "id": 42,
                        "name": "Wairarapa"
                    },
                    "sub-region": {
                        "id": 359,
                        "name": "Martinborough"
                    },
                    "postal": "267 Jellicoe Street\nWairarapa\n 6013"
                },
                "phone": {
                    "main": null,
                    "tollfree": null,
                    "fax": null
                },
                "contact": {
                    "name": "Clare Glover",
                    "email": "clare@seekom.com"
                }
            }
        }
    ]
    setTimeout(function() {
        cb(response)
    }, 1000)
}
