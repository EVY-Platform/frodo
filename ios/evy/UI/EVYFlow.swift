//
//  EVYFlow.swift
//  EVY
//
//  Created by Geoffroy Lesage on 11/12/2023.
//

import SwiftUI

public enum EVYFlowType: String, Codable {
    case create
    case read
    case update
    case delete
}

struct EVYFlow: Decodable, Encodable {
    let id: String
    let name: String
    let type: EVYFlowType
    let data: String
    let pages: [EVYPage]
    
    func getPageById(_ id: String) -> EVYPage? {
        pages.first { $0.id == id }
    }
}
