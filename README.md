# react-native-swiftui-stacks :pancakes:

## What is it?

SwiftUI insprired Stacks and Spacer

### Views

- **VStack:** Vertical stack
- **HStack:** Horizontal stack
- **ZStack:** Overlay stack
- **Spacer:** Spacing within Stacks

## Installation

**Step 1:** Install the package in your React Native project

```console
yarn add react-native-stacks
```

## Usage

Import the components you need like this

```javascript
import { VStack, HStack, Spacer } from 'react-native-swiftui-stacks';
```

And display them like this

```jsx
return (
  <VStack
    aligment='leading'
    background={UIColor.systemGray6}
    padding={{ leading: 30 }}
    cornerRadius={20}
  >
    <Text>Some cool text</Text>
    <Spacer />
    <Button onPress={doSomething}>
      <Text>Click the cool button</Text>
    </Button>
  </VStack>
);
```

vs. SwiftUI...

```swift
var body: some View {
  VStack(alignment: .leading) {
    Text("Some cool text").font(.title)
    Spacer()
    Button(action: doSomething) {
      Text("Click the cool button")
    }
  }.background(Color(UIColor.systemGray6))
   .cornerRadius(20)
   .padding(.leading, 30)
}
```
