//
//  EVYRow.swift
//  EVY
//
//  Created by Geoffroy Lesage on 11/12/2023.
//

import SwiftUI

public enum RowCodingKeys: String, CodingKey {
    case type
    case view
    case edit
    case action
}

public enum EVYRowError: Error {
	case cannotParseRow
}

protocol EVYRowProtocol: View, Codable {
	static var JSONType: String { get }
	func complete() -> Bool
	func incompleteMessages() -> [String]
}

extension EVYRowProtocol {
	func complete() -> Bool { true }
	func incompleteMessages() -> [String] { [] }
}

struct EVYRow: View, Codable, Identifiable {
    let id = UUID()
    
    let type: String
	let view: any EVYRowProtocol

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: RowCodingKeys.self)
        type = try container.decode(String.self, forKey: .type)
        
        switch type {
            
			// Container rows
            case EVYColumnContainerRow.JSONType:
                view = try EVYColumnContainerRow(container: container)
            
            case EVYListContainerRow.JSONType:
                view = try EVYListContainerRow(container: container)
            
            case EVYSelectSegmentContainerRow.JSONType:
                view = try EVYSelectSegmentContainerRow(container: container)
            
            case EVYSheetContainerRow.JSONType:
                view = try EVYSheetContainerRow(container: container)
        
            // Display rows
            case EVYInfoRow.JSONType:
                view = try EVYInfoRow(container: container)
            
            case EVYTextRow.JSONType:
                view = try EVYTextRow(container: container)
            
            case EVYTextActionRow.JSONType:
                view = try EVYTextActionRow(container: container)
            
            case EVYInputListRow.JSONType:
                view = try EVYInputListRow(container: container)

            // Editable rows
            case EVYDropdownRow.JSONType:
                view = try EVYDropdownRow(container: container)
            
            case EVYInlinePickerRow.JSONType:
                view = try EVYInlinePickerRow(container: container)
            
            case EVYInputRow.JSONType:
                view = try EVYInputRow(container: container)
            
            case EVYSearchRow.JSONType:
                view = try EVYSearchRow(container: container)
            
            case EVYSelectPhotoRow.JSONType:
                view = try EVYSelectPhotoRow(container: container)
            
            case EVYTextAreaRow.JSONType:
                view = try EVYTextAreaRow(container: container)
            
            case EVYCalendarRow.JSONType:
                view = try EVYCalendarRow(container: container)
            
            // Action rows
            case EVYButtonRow.JSONType:
                view = try EVYButtonRow(container: container)
            
            case EVYTextSelectRow.JSONType:
                view = try EVYTextSelectRow(container: container)
                    
            default:
				throw EVYRowError.cannotParseRow
        }
    }
	
	func encode(to encoder: Encoder) throws {
		var container = encoder.container(keyedBy: RowCodingKeys.self)
		try container.encode(type, forKey: .type)
		try container.encode(view, forKey: .view)
	}
	
	func complete() -> Bool {
		view.complete()
	}
    
    var body: some View {
        AnyView(view)
    }
}
