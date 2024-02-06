# SDUI Rows

### Base rules
* Empty strings will be displayed and will NOT be ignored, but will essentially not be visible to the user
* Missing keys will not be allowed, all keys/properties of a row are required)
* All strings can include:
    * **variables** surrounded with curley braces: "Hello {name}, how are you?"
    * **icons** surrounded with double colons: "EVY ::evy_icon:: is the best!"
    * **emojis** prefixed with a colon: "I like :dog a lot"

### Base schema template:

```
{
	type: "string",
	content: "object",
    "fading_placeholder": {
        "value": "string",
        "condition": "string"
    },
    "data": {
        "source": "string",
        "destination": "string"
    }

}
```
NB: Fading placeholder is a special prop that shows a placeholder text on a row instead of it's content, until a condition is met  

### Display Rows

```
{
    "type": "Carousel",
    "content": {
        "image_ids": "string[]"
    }
}
```

```
{
    "type": "Title",
    "content": {
        "title": "string",
        "title_detail": "string",
        "subtitle_1": "string",
        "subtitle_2": "string"
    }
}
```

```
{
    "type": "TimeslotPicker",
    "content": {
        "icon": "string",
        "subtitle": "string",
        "details": "string",
        "dates_with_timeslots": [
            {
                "header": "string",
                "date": "string",
                "timeslots": [
                    {
                        "timestamp": "string",
                        "available": "boolean"
                    }
                ]
            }
        ]
    },
    "data": {
        "source": "string",
        "destination": "string"
    }
}
```

```
{
    "type": "Calendar",
    "content": {
        "dates_with_timeslots": [
            {
                "header": "string",
                "date": "string",
                "timeslots": [
                    {
                        "start_timestamp": "string",
                        "end_timestamp": "string",
                        "type": "string"
                    }
                ]
            }
        ]
    },
    "formatting": [{
        "content": "string",
        "format": "string"
    }],
    "data": {
        "source": "string",
        "destination": "string"
    }
}
```

```
{
    "type": "Text",
    "content": {
        "title": "string",
        "content": "string",
        "maxLines": "number"
    }
}
```

```
{
    "type": "Detail",
    "content": {
        "title": "string",
        "icon": "string",
        "subtitle": "string",
        "detail": "string"
    }
}
```

```
{
    "type": "Disclaimer",
    "content": {
        "icon": "string",
        "title": "string",
        "subtitle": "string"
    }
}
```

```
{
    "type": "Address",
    "content": {
        "title": "string",
        "line_1": "string",
        "line_2": "string",
        "location": "location"
    }
}
```

```
{
    "type": "PaymentOptions",
    "content": {
        "title": "string",
        "options": [
            {
                "icon": "string",
                "label": "string",
            },
        ],
    }
}
```

```
{
    "type": "SegmentedControl",
    "content": {
        "children": [
            {
                "title": "string",
                "children": "ROW[]",
            },
        ],
    }
}
```

```
{
    "type": "ContainerList",
    "content": {
        "children": "ROW[]"
    }
}
```

### Container rows
```
{
    "type": "ColumnContainer",
    "content": {
        "title": "string",
        "children": "ROW[]"
    }
}
```

### Editable rows

```
{
    "type": "Info",
    "content": {
        "title": "string"
    }
}
```

```
{
    "type": "Input",
    "content": {
        "title": "string",
        "value": "string",
        "placeholder": "string"
    },
    "formatting": [{
        "content": "string",
        "format": "string"
    }],
    "data": {
        "source": "string",
        "destination": "string"
    }
}
```

```
{
    "type": "Search",
    "content": {
        "title": "string",
        "value": "string",
        "placeholder": "string"
    },
    "formatting": [{
        "content": "string",
        "format": "string"
    }],
    "data": {
        "source": "string",
        "destination": "string"
    }
}
```

```
{
    "type": "SearchMulti",
    "content": {
        "title": "string",
        "values": "string[]",
        "placeholder": "string"
    },
    "formatting": [{
        "content": "string",
        "format": "string"
    }],
    "data": {
        "source": "string",
        "destination": "string"
    }
}
```

```
{
    "type": "AddressInput",
    "content": {
        "title": "string",
        "value": "string",
        "action_title": "string"
    },
    "formatting": [{
        "content": "string",
        "format": "string"
    }],
    "data": {
        "source": "string",
        "destination": "string"
    }
}
```

```
{
    "type": "PhotoUpload",
    "content": {
        "icon": "string",
        "subtitle": "string",
        "content": "string",
        "image_ids": "string",
    },
    "formatting": [{
        "content": "string",
        "format": "string"
    }],
    "data": {
        "source": "string",
        "destination": "string"
    }
}
```

```
{
    "type": "Select",
    "content": {
        "placeholder": "string",
        "value": "string"
    },
    "formatting": [{
        "content": "string",
        "format": "string"
    }],
    "data": {
        "source": "string",
        "destination": "string"
    }
}
```

```
{
    "type": "Wheel",
    "content": {
        "value": "string"
    },
    "formatting": [{
        "content": "string",
        "format": "string"
    }],
    "data": {
        "source": "string",
        "destination": "string"
    }
}
```