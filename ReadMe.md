# Clone Tiki Application

## Structure Project

- assets
- components
- constants
- data
- screens
- Stacks

## Run App

### Clone Repo:

`git clone https://gitlab.com/rnzone99/bhtd/mshop.git`

### Install Dependencies:

`npm install`

### Start App

`npm run android`

---

### Build Eealease App

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
- [Redux Persist](https://redux.js.org/)

---

## luxon datetime: format time

[react-native-app-intro-slider](https://github.com/Jacse/react-native-app-intro-slider)

# Notes

- ScrollableTabView: thư viện bị lỗi getNode đi vào nodemodule->react-native-scrollable-tab-view->index.js-> Xoá getNode()
- Cài thêm @react-native-community/viewpager -> sau đó link
