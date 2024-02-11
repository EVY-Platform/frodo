//
//  ContentView.swift
//  EVY
//
//  Created by Geoffroy Lesage on 11/12/2023.
//

import SwiftUI

struct ContentView: View {
    @State private var rows = try! JSONDecoder().decode([EVYRow].self, from: json)
    
    var body: some View {
        List(rows.indices, id: \.self) { index in
            rows[index]
                .padding(.bottom, Constants.majorPadding)
                .listRowSeparator(.hidden)
        }
        .listStyle(PlainListStyle())
        .ignoresSafeArea()
    }
}

let json = """
[
    {
        "type": "Carousel",
        "content": {
            "image_ids": [
                "printer_logo",
                "printer"
            ]
        }
    },
    {
        "type": "Title",
        "content": {
            "title": "Amazing 😊 Fridge",
            "title_detail": "$250",
            "subtitle_1": "::star.square.on.square.fill:: 88% - 4 items sold",
            "subtitle_2": "Rosebery, NSW  -  Posted on Nov 8th"
        }
    },
    {
        "type": "SegmentedControl",
        "content": {
            "children": [
                {
                    "title": "Pickup",
                    "children": [{
                        "type": "TimeslotPicker",
                        "content": {
                            "icon": "pickup",
                            "subtitle": "Meet at the pickup address",
                            "details": "+ $5.50",
                            "dates_with_timeslots": [
                                {
                                    "header": "Wed",
                                    "date": "8 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "11:30",
                                            "available": true
                                        },
                                        {
                                            "timeslot": "12:00",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Thu",
                                    "date": "9 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "10:30",
                                            "available": false
                                        }
                                    ]
                                },
                                {
                                    "header": "Fri",
                                    "date": "10 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "10:30",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Sat",
                                    "date": "11 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "11:30",
                                            "available": true
                                        },
                                        {
                                            "timeslot": "12:00",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Sun",
                                    "date": "12 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "10:30",
                                            "available": true
                                        },
                                        {
                                            "timeslot": "11:30",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Sun",
                                    "date": "13 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "10:30",
                                            "available": true
                                        },
                                        {
                                            "timeslot": "11:30",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Sun",
                                    "date": "14 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "10:30",
                                            "available": true
                                        },
                                        {
                                            "timeslot": "11:30",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Sun",
                                    "date": "15 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "10:30",
                                            "available": true
                                        },
                                        {
                                            "timeslot": "11:30",
                                            "available": true
                                        }
                                    ]
                                }
                            ]
                        }
                    }]
                },
                {
                    "title": "Deliver",
                    "children": [{
                        "type": "TimeslotPicker",
                        "content": {
                            "icon": "delivery",
                            "subtitle": "Delivered at your door",
                            "details": "+ $10",
                            "dates_with_timeslots": [
                                {
                                    "header": "Wed",
                                    "date": "10 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "12:00",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Thu",
                                    "date": "11 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "11:30",
                                            "available": false
                                        },
                                        {
                                            "timeslot": "12:00",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Fri",
                                    "date": "12 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "8:30",
                                            "available": true
                                        },
                                        {
                                            "timeslot": "10:00",
                                            "available": false
                                        }
                                    ]
                                },
                                {
                                    "header": "Sat",
                                    "date": "13 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "11:30",
                                            "available": true
                                        },
                                        {
                                            "timeslot": "12:00",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Sun",
                                    "date": "14 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "10:30",
                                            "available": true
                                        },
                                        {
                                            "timeslot": "11:30",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Sun",
                                    "date": "15 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "10:30",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Sun",
                                    "date": "16 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "10:30",
                                            "available": true
                                        },
                                        {
                                            "timeslot": "11:30",
                                            "available": true
                                        }
                                    ]
                                },
                                {
                                    "header": "Sun",
                                    "date": "17 nov.",
                                    "timeslots": [
                                        {
                                            "timeslot": "10:30",
                                            "available": true
                                        },
                                        {
                                            "timeslot": "11:30",
                                            "available": true
                                        }
                                    ]
                                }
                            ]
                        }
                    }]
                }
            ]
        }
    },
    {
        "type": "Text",
        "content": {
            "title": "Description",
            "content": "Great fridge, barely used. I have to get ride of it because there is already a fridge in my new place. Great fridge, barely used. I have to get ride of it because there is already a fridge in my new place. Great fridge, barely used. I have to get ride of it because there is already a fridge in my new place. Great fridge, barely used. I have to get ride of it because there is already a fridge in my new place. Great fridge, barely used. I have to get ride of it because there is already a fridge in my new place. Great fridge, barely used. I have to get ride of it because there is already a fridge in my new place. ",
            "maxLines": "2"
        }
    },
    {
        "type": "ContainerList",
        "content": {
            "children": [
                {
                    "type": "Detail",
                    "content": {
                        "icon": "condition",
                        "title": "Condition",
                        "subtitle": "Like new",
                        "detail": ""
                    }
                },
                {
                    "type": "Detail",
                    "content": {
                        "icon": "reason",
                        "title": "Selling reason",
                        "subtitle": "Moving out",
                        "detail": ""
                    }
                },
                {
                    "type": "Detail",
                    "content": {
                        "icon": "dimensions",
                        "title": "Dimensions",
                        "subtitle": "250 (w) x 120 (h) x 250 (l)",
                        "detail": ""
                    }
                }
            ]
        }
    },
    {
        "type": "Address",
        "content": {
            "title": "Pickup location",
            "line_1": "23-25 Rosebery Avenue",
            "line_2": "2018 Rosebery, NSW",
            "location": {
                "latitude": -33.91514116915074,
                "longitude": 151.20676069630827
            }
        }
    },
    {
        "type": "PaymentOptions",
        "content": {
            "title": "Payment methods accepted",
            "options": [
                {
                    "icon": "creditcard",
                    "label": "Card",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "building.columns",
                    "label": "Bank",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "dollarsign.square",
                    "label": "Cash",
                    "disclaimer": "",
                }
            ]
        }
    },
    {
        "type": "PaymentOptions",
        "content": {
            "title": "Payment methods accepted",
            "options": [
                {
                    "icon": "creditcard",
                    "label": "Card",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "building.columns",
                    "label": "Bank",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "dollarsign.square",
                    "label": "Cash",
                    "disclaimer": "",
                }
            ]
        }
    },
    {
        "type": "PaymentOptions",
        "content": {
            "title": "Payment methods accepted",
            "options": [
                {
                    "icon": "creditcard",
                    "label": "Card",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "building.columns",
                    "label": "Bank",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "dollarsign.square",
                    "label": "Cash",
                    "disclaimer": "",
                }
            ]
        }
    },
    {
        "type": "PaymentOptions",
        "content": {
            "title": "Payment methods accepted",
            "options": [
                {
                    "icon": "creditcard",
                    "label": "Card",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "building.columns",
                    "label": "Bank",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "dollarsign.square",
                    "label": "Cash",
                    "disclaimer": "",
                }
            ]
        }
    },
    {
        "type": "PaymentOptions",
        "content": {
            "title": "Payment methods accepted",
            "options": [
                {
                    "icon": "creditcard",
                    "label": "Card",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "building.columns",
                    "label": "Bank",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "dollarsign.square",
                    "label": "Cash",
                    "disclaimer": "",
                }
            ]
        }
    },
    {
        "type": "PaymentOptions",
        "content": {
            "title": "Payment methods accepted",
            "options": [
                {
                    "icon": "creditcard",
                    "label": "Card",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "building.columns",
                    "label": "Bank",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "dollarsign.square",
                    "label": "Cash",
                    "disclaimer": "",
                }
            ]
        }
    },
    {
        "type": "PaymentOptions",
        "content": {
            "title": "Payment methods accepted",
            "options": [
                {
                    "icon": "creditcard",
                    "label": "Card",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "building.columns",
                    "label": "Bank",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "dollarsign.square",
                    "label": "Cash",
                    "disclaimer": "",
                }
            ]
        }
    },
    {
        "type": "PaymentOptions",
        "content": {
            "title": "Payment methods accepted",
            "options": [
                {
                    "icon": "creditcard",
                    "label": "Card",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "building.columns",
                    "label": "Bank",
                    "disclaimer": "::lock:: EVY buyer protection",
                },
                {
                    "icon": "dollarsign.square",
                    "label": "Cash",
                    "disclaimer": "",
                }
            ]
        }
    }
]
""".data(using: .utf8)!

#Preview {
    return ContentView()
}