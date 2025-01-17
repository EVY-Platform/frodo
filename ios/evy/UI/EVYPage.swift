//
//  EVYPage.swift
//  EVY
//
//  Created by Geoffroy Lesage on 11/12/2023.
//

import SwiftUI

struct EVYPage: View, Codable {
    let id: String
    let title: String
    let rows: [EVYRow]
    let footer: EVYRow
	
	func complete() -> Bool {
		rows.allSatisfy { $0.complete() }
	}
	
	func incompleteMessages() -> [String] {
		rows
			.filter { $0.view.complete() == false }
			.map { $0.view.incompleteMessages() }
			.flatMap(\.self)
	}

    var body: some View {
        ScrollView {
            ForEach(rows) { row in
                row
                    .padding(.horizontal, Constants.majorPadding)
                    .padding(.vertical, Constants.minorPadding)
            }
        }.navigationTitle(title)
        footer
            .overlay(alignment: .top, content: {
                Rectangle()
                    .fill(Constants.borderColor)
                    .frame(height: 1)
                    .padding(.top, -Constants.minorPadding)
            })
    }
}
