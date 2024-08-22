//
//  EVYInputListRow.swift
//  evy
//
//  Created by Geoffroy Lesage on 21/8/2024.
//

import SwiftUI

struct EVYInputListRowView: Decodable {
    let content: ContentData
    
    struct ContentData: Decodable {
        let title: String
        let value: String
        let placeholder: String
    }
}
    
struct EVYInputListRow: View {
    public static let JSONType = "InputList"
    
    private let view: EVYInputListRowView
    
    init(container: KeyedDecodingContainer<RowCodingKeys>) throws {
        self.view = try container.decode(EVYInputListRowView.self, forKey:.view)
    }
    
    var body: some View {
        VStack(alignment:.leading) {
            if (view.content.title.count > 0) {
                EVYTextView(view.content.title)
                    .padding(.vertical, Constants.minPading)
            }
            EVYInputList(input: view.content.value,
                         placeholder: view.content.placeholder)
        }
    }
}



#Preview {
    let item = DataConstants.item.data(using: .utf8)!
    try! EVY.data.create(key: "item", data: item)
    
    let json =  SDUIConstants.tagsInputListRow.data(using: .utf8)!
    return try? JSONDecoder().decode(EVYRow.self, from: json)
}