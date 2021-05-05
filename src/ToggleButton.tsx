import React, { useContext, createContext, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import Button from './Button';

type ContextType = {
  selected: number;
  space?: number;
  buttonStyle?: ViewStyle | ViewStyle[];
  color?: string;
  colorSelected?: string;
  textColor?: string;
  setselected?: (v: number) => void;
  onValueChange?: (value: number) => void;
};

type ButtonType = {
  title: string;
  value: any;
};

type GroupType = ContextType & {
  row?: boolean;
  children?: React.ReactChild[];
};

const GroupContext = createContext<Partial<ContextType>>({});

const ToggleButton = ({ title, value }: ButtonType) => {
  const {
    selected,
    setselected,
    space,
    buttonStyle,
    color,
    colorSelected,
    textColor,
    onValueChange,
  } = useContext(GroupContext);

  const onPress = () => {
    if (setselected !== undefined) {
      setselected(value);
      onValueChange !== undefined && onValueChange(value);
    }
  };
  return (
    <Button
      title={title}
      color={selected === value ? colorSelected : color}
      textColor={textColor}
      containerStyle={[
        space !== undefined && { marginHorizontal: space },
        buttonStyle,
      ]}
      onPress={onPress}
    />
  );
};

const Group = ({
  row = true,
  selected: value,
  space = 0,
  children,
  buttonStyle,
  color = 'gray',
  colorSelected = 'blue',
  textColor,
  onValueChange,
}: GroupType) => {
  const [selected, setselected] = useState<number>(value);

  // useEffect(() => {
  //   if (onValueChange !== undefined) {
  //     onValueChange(selected);
  //   }
  // }, [selected]);

  return (
    <GroupContext.Provider
      value={{
        selected,
        setselected,
        space,
        buttonStyle,
        color,
        colorSelected,
        textColor,
        onValueChange,
      }}
    >
      <View style={{ flexDirection: row ? 'row' : 'column' }}>
        {children !== undefined && children}
      </View>
    </GroupContext.Provider>
  );
};

ToggleButton.Group = Group;

export default ToggleButton;
