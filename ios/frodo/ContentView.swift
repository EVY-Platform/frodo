//
//  ContentView.swift
//  frodo
//
//  Created by Geoffroy Lesage on 11/12/2023.
//

import SwiftUI

struct ContentView: View {
    let rows: [EVYRow]
    
    var body: some View {
        List(rows.indices, id: \.self) { index in
            if index == 0 {
                rows[index]
                    .frame(height: 250)
                    .listRowInsets(.init(top: 0, leading: 0, bottom: 0, trailing: 0))
            } else {
                rows[index]
            }
            
        }
        .listStyle(PlainListStyle())
        .ignoresSafeArea()
    }
}

#Preview {
    let json = """
    [
        {
            "type": "Carousel",
            "content": {
                "photo_ids": ["printer_logo", "printer"]
            }
        },
        {
            "type": "Title",
            "content": {
                "title": "Amazing Fridge",
                "title_detail": "$250",
                "subtitle_1": ":star_doc: 88% - 4 items sold",
                "subtitle_2": "Rosebery, NSW  -  Posted on Nov 8th"
            }
        },
        {
            "type": "ContentShort",
            "content": {
                "title": "Description",
                "content":
                    "Great fridge, barely used. I have to get ride of it because there is already a fridge in my new place."
            }
        },
    ]
    """.data(using: .utf8)!
    var rows = try! JSONDecoder().decode([EVYRow].self, from: json)
    return ContentView(rows: rows)
}
