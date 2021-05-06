# react-native-toggle-buttons

react-native-toggle-buttons

## Installation

```sh
npm install react-native-toggle-buttons
```

## Usage

```js
import ToggleButton from 'react-native-toggle-buttons';

// ...

<ToggleButton.Group row onValueChange={}>
  <ToggleButton title={'Button1'} value={1} />
  <ToggleButton title={'Button2'} value={2} />
  <ToggleButton title={'Button3'} value={3} />
</ToggleButton.Group>;
```

## Available ToggleButton.Group Props

| name          |     default     |            description |
| ------------- | :-------------: | ---------------------: |
| selected      |      null       |         selected value |
| space         |        0        |  space between buttons |
| buttonStyle   |       {}        |           button style |
| color         |     'gray'      |          buttons color |
| colorSelected |     'blue'      |  selected button color |
| textColor     |      null       |      button text color |
| onValueChange | (value) => func | button selection event |

## Available ToggleButton Props

| name  | default |  description |
| ----- | :-----: | -----------: |
| title |  null   | button title |
| value |  null   | button value |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
