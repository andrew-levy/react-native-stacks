[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hugemathguy)

# react-native-stacks :pancakes:

SwiftUI inspired Stack and Spacer components.

![stacks](/assets/readme-stacks.png?raw=true)
[Image from Design + Code ](https://designcode.io/swiftui-course)

- **VStack:** Vertical Stack
- **HStack:** Horizontal Stack
- **ZStack:** Overlay Stack
- **Spacer:** Spacing within Stacks

## Installation

```console
yarn add react-native-stacks
```

## Usage

```jsx
import React from "react";
import { Text, Button } from "react-native";
import { VStack, HStack, Spacer } from "react-native-stacks";

function Example() {
  return (
    <VStack aligmment="leading" spacing={20}>
      <Text>Orders</Text>
      <Spacer />
      <HStack>
        <Button onPress={add} title="Add" />
        <Spacer />
        <Button onPress={remove} title="Remove" />
      </HStack>
    </VStack>
  );
}
```

vs. SwiftUI...

```swift
struct Example: View {
  var body: some View {
    VStack(alignment: .leading, spacing: 20) {
      Text("Orders")
      Spacer()
      HStack() {
        Button(action: add) {
          Text("Add")
        }
        Spacer()
        Button(action: remove) {
          Text("Remove")
        }
      }
    }
  }
}
```

## Documentation

### `<VStack />`

A vertical stack.

#### Props:

#### `spacing`

The amount of space between each item in the stack.

> required: no
>
> type: `number`
>
> default: `0`

#### `alignment`

The horizontal alignment for the stack items.

> required: no
>
> type: `VStackAlignment`
>
> default: `'center'`

```typescript
type VStackAlignment = "leading" | "center" | "trailing";
```

---

### `<HStack />`

A horizontal stack.

#### Props:

#### `spacing`

The amount of space between each item in the stack.

> required: no
>
> type: `number`
>
> default: `0`

#### `alignment`

The vertical alignment for the stack items.

> required: no
>
> type: `HStackAlignment`
>
> default: `'center'`

```typescript
type HStackAlignment = "top" | "center" | "bottom";
```

---

### `<ZStack />`

An overlay stack.

#### Props:

#### `alignment`

The horizontal and vertical alignment for the stack items. Since a ZStack overlays items on top of one another, we are able to align them both vertically and horizontally.


> required: no
>
> type: `ZStackAlignment`
>
> default: `'center'`


```typescript
type ZStackAlignment =
  | "top"
  | "center"
  | "bottom"
  | "leading"
  | "trailing"
  | "topLeading"
  | "topTrailing"
  | "bottomLeading"
  | "bottomTrailing";
```

---

### `<Spacer />`

A component to provide space between stack items. Spacers will fill the available space between components.
