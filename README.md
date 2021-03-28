# react-native-stacks :pancakes:

## What is it?

SwiftUI inspired Stacks and Spacer views

### Views

- **VStack:** Vertical Stack
- **HStack:** Horizontal Stack
- **ZStack:** Overlay Stack
- **Spacer:** Spacing within Stacks

## Installation

**Step 1:** Install the package in your React Native project

```console
yarn add react-native-stacks
```

## Usage

Import the components you need like this

```javascript
import { VStack, HStack, Spacer } from 'react-native-stacks';
```

And display them like this

```jsx
return (
  <VStack
    aligment='leading'
    background='white'
    padding={{ leading: 30 }}
    cornerRadius={20}
  >
    <Text>Orders</Text>
    <Spacer />
    <HStack>
      <Button onPress={add} title='Add' />
      <Button onPress={remove} title='Remove' />
    </HStack>
  </VStack>
);
```

vs. SwiftUI...

```swift
var body: some View {
  VStack(alignment: .leading) {
    Text("Orders")
    Spacer()
    HStack() {
      Button(action: add) {
        Text("Add")
      }
      Button(action: remove) {
        Text("Remove")
      }
    }
  }.background(Color(UIColor.systemGray6))
   .cornerRadius(20)
   .padding(.leading, 30)
}
```
