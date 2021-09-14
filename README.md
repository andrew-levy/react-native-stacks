# react-native-stacks :pancakes:

SwiftUI inspired Stack and Spacer components

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
import React from 'react';
import { Text, Button } from 'react-native';
import { VStack, HStack, Spacer } from 'react-native-stacks';

function Example() {
  return (
    <VStack aligment='leading' spacing={20}>
      <Text>Orders</Text>
      <Spacer />
      <HStack>
        <Button onPress={add} title='Add' />
        <Spacer />
        <Button onPress={remove} title='Remove' />
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

A vertical stack

#### Props:

#### `spacing`

The amount of space between each item in the stack

> required: no
>
> type: `number`
>
> default: `0`

#### `alignment`

The horizontal alignment for the stack items

- `leading`: left align
- `center`: center align
- `trailing`: right align

> required: no
>
> type: `'leading' | 'center' | 'trailing'`
>
> default: `'center'`

---

### `<HStack />`

A horizontal stack

#### Props:

#### `spacing`

The amount of space between each item in the stack

> required: no
>
> type: `number`
>
> default: `0`

#### `alignment`

The vertical alignment for the stack items

- `leading`: top align
- `center`: center align
- `trailing`: bottom align

> required: no
>
> type: `'leading' | 'center' | 'trailing'`
>
> default: `'center'`

---

### `<ZStack />`

An overlay stack

#### Props:

#### `alignment`

The horizontal and vertical alignment for the stack items. Since a ZStack overlays items on top of one another, we are able to align them both vertically and horizontally:

Veritcal

- `leading`: top align
- `center`: center align
- `trailing`: bottom align

Horizontal

- `leading`: left align
- `center`: center align
- `trailing`: right align

> required: no
>
> type: `{ vertical: Alignment, horizontal: Alignment }`
>
> default: `{ vertical: 'center', horizontal: 'center' }`

such that,

```typescript
type Alignment = 'leading' | 'center' | 'trailing';
```

---

### `<Spacer />`

A component to provide space between stack items. Adding a Spacer to the bottom of a stack will shift all of the previous stack items up, and opposite for the top. Adding a Spacer between views in a stack will push them apart.
