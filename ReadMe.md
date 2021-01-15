# Clone Tiki Application

## Image App

![Home Boot](./img/Screenshot_1610691563.png) | ![Home ](./img/Screenshot_1610691573.png)
![Home ](./img/Screenshot_1610691582.png) | ![Home ](./img/Screenshot_1610691658.png)
![Home ](./img/Screenshot_1610691685.png) | ![Home ](./img/Screenshot_1610691698.png)
![Home Boot](./img/Screenshot_1610691718.png) | ![Home ](./img/Screenshot_1610691725.png)
![Home Boot](./img/Screenshot_1610691738.png) | ![Home ](./img/Screenshot_1610691744.png)
![Home Boot](./img/Screenshot_1610691752.png) | ![Home ](./img/Screenshot_1610691764.png)
![Home Boot](./img/Screenshot_1610691772.png) | ![Home ](./img/Screenshot_1610691813.png)
![Home Boot](./img/Screenshot_1610691828.png) | ![Home ](./img/Screenshot_1610691845.png)
![Home Boot](./img/Screenshot_1610691858.png) | ![Home ](./img/Screenshot_1610691873.png)
![Home Boot](./img/Screenshot_1610691882.png) | ![Home ](./img/Screenshot_1610691888.png)
![Home Boot](./img/Screenshot_1610691898.png) | ![Home ](./img/Screenshot_1610691951.png)
![Home Boot](./img/Screenshot_1610691962.png)| ![Home ](./img/Screenshot_1610691991.png)
![Home Boot](./img/Screenshot_1610692010.png) | ![Home ](./img/Screenshot_1610692110.png)

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
- [React Native Firebase](https://redux.js.org/)
- [Redux Persist](https://redux.js.org/)

---

## luxon datetime: format time

[react-native-app-intro-slider](https://github.com/Jacse/react-native-app-intro-slider)

# Notes

- ScrollableTabView: thư viện bị lỗi getNode đi vào nodemodule->react-native-scrollable-tab-view->index.js-> Xoá getNode()
- Cài thêm @react-native-community/viewpager -> sau đó link
