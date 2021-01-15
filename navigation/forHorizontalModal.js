import {Animated} from 'react-native';
const {multiply} = Animated;

function forHorizontalModal({current, next, inverted, layouts: {screen}}) {
  const translateFocused = multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.width, 0],
      extrapolate: 'clamp',
    }),
    inverted,
  );

  const overlayOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.07],
    extrapolate: 'clamp',
  });

  const shadowOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.3],
    extrapolate: 'clamp',
  });

  return {
    cardStyle: {
      transform: [
        // Translation for the animation of the current card
        {translateX: translateFocused},
        // Translation for the animation of the card in back
        {translateX: 0},
      ],
    },
    overlayStyle: {opacity: overlayOpacity},
    shadowStyle: {shadowOpacity},
  };
}

export default forHorizontalModal;
