# Clone Tiki Application

## Image App

<div style="display:flex, margin: 20px, flex: wrap">
     <img src="./img/Screenshot_1610691563.png" width="270" height="500">
     <img src="./img/Screenshot_1610691573.png" width="270" height="500">
     <img src="./img/Screenshot_1610691582.png" width="270" height="500">
     <img src="./img/Screenshot_1610691658.png" width="270" height="500">
     <img src="./img/Screenshot_1610691685.png" width="270" height="500">
     <img src="./img/Screenshot_1610691698.png" width="270" height="500">
     <img src="./img/Screenshot_1610691718.png" width="270" height="500">
     <img src="./img/Screenshot_1610691725.png" width="270" height="500">
     <img src="./img/Screenshot_1610691738.png" width="270" height="500">
     <img src="./img/Screenshot_1610691744.png" width="270" height="500">
     <img src="./img/Screenshot_1610691752.png" width="270" height="500">
     <img src="./img/Screenshot_1610691764.png" width="270" height="500">
     <img src="./img/Screenshot_1610691772.png" width="270" height="500">
     <img src="./img/Screenshot_1610691813.png" width="270" height="500">
     <img src="./img/Screenshot_1610691828.png" width="270" height="500">
     <img src="./img/Screenshot_1610691845.png" width="270" height="500">
     <img src="./img/Screenshot_1610691858.png" width="270" height="500">
     <img src="./img/Screenshot_1610691873.png" width="270" height="500">
     <img src="./img/Screenshot_1610691882.png" width="270" height="500">
     <img src="./img/Screenshot_1610691888.png" width="270" height="500">
     <img src="./img/Screenshot_1610691898.png" width="270" height="500">
     <img src="./img/Screenshot_1610691951.png" width="270" height="500">
     <img src="./img/Screenshot_1610691991.png" width="270" height="500">
     <img src="./img/Screenshot_1610691962.png" width="270" height="500">
     <img src="./img/Screenshot_1610692010.png" width="270" height="500">
     <img src="./img/Screenshot_1610692110.png" width="270" height="500">
</div>
<div style="display:flex, margin: 20px, flex: wrap">
     <img src="./img/Screenshot_1610854635.png" width="270" height="500">  
     <img src="./img/Screenshot_1610854645.png" width="270" height="500">  
     <img src="./img/Screenshot_1610854682.png" width="270" height="500">  
     <img src="./img/Screenshot_1610854666.png" width="270" height="500">  
     <img src="./img/Screenshot_1610854864.png" width="270" height="500">  
</div>
## Structure Project

- assets
- components
- constants
- data
- i18n
- screens
- navigation
- Redux

## Run App

### Clone Repo:

`git clone https://github.com/duongnq2798/ecommerce_tiki_clone.git`

### Install Dependencies:

`npm install`

### Start App

`npm run android`

---

### Build Realease App

` cd android`
./gradlew assembleRelease
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android

- Endcode Base64 ->>> uri

```
const encodedData = 'R0lGODlhAQABAIAAAAAA...7';
<Image source={{uri: `data:image/gif;base64,${encodedData}`}} />

```

## Pakage Uses

- [React Native](https://reactnative.dev/): `0.63.3`
- [React Native Paralax Scroll View](https://github.com/i6mi6/react-native-parallax-scroll-view): `1.1.4`
- [React Navigation](https://reactnavigation.org/)
- [React Native Firebase](https://rnfirebase.io/)
- [Redux](https://redux.js.org/)
- [React Native Firebase](https://redux.js.org/)
- [Redux Persist](https://redux.js.org/)

---

## luxon datetime: format time

[react-native-app-intro-slider](https://github.com/Jacse/react-native-app-intro-slider)

# Notes
