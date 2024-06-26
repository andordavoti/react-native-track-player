"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5383],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5471:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="Hooks",c={unversionedId:"api/hooks",id:"version-3.1/api/hooks",title:"Hooks",description:"React v16.8 introduced hooks. If you are using a version of React Native that is before v0.59.0, your React Native version does not support hooks.",source:"@site/versioned_docs/version-3.1/api/hooks.md",sourceDirName:"api",slug:"/api/hooks",permalink:"/docs/3.1/api/hooks",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-3.1/api/hooks.md",tags:[],version:"3.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"app",previous:{title:"Queue",permalink:"/docs/3.1/api/functions/queue"},next:{title:"State",permalink:"/docs/3.1/api/constants/state"}},p={},u=[{value:"<code>useTrackPlayerEvents</code>",id:"usetrackplayerevents",level:2},{value:"<code>useProgress</code>",id:"useprogress",level:2},{value:"<code>usePlaybackState</code>",id:"useplaybackstate",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"React v16.8 introduced ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"hooks"),". If you are using a version of React Native that is before ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/blog/2019/03/12/releasing-react-native-059"},"v0.59.0"),", your React Native version does not support hooks."),(0,o.kt)("h2",{id:"usetrackplayerevents"},(0,o.kt)("inlineCode",{parentName:"h2"},"useTrackPlayerEvents")),(0,o.kt)("p",null,"Register an event listener for one or more of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.1/api/events"},"events")," emitted by the TrackPlayer. The subscription is removed when the component unmounts."),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.1/api/events"},"events section")," for a full list of supported events."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useState } from 'react';\nimport { Text, View } from 'react-native';\nimport { useTrackPlayerEvents, Event, State } from 'react-native-track-player';\n\n// Subscribing to the following events inside MyComponent\nconst events = [\n  Event.PlaybackState,\n  Event.PlaybackError,\n];\n\nconst MyComponent = () => {\n  const [playerState, setPlayerState] = useState(null)\n\n  useTrackPlayerEvents(events, (event) => {\n    if (event.type === Event.PlaybackError) {\n      console.warn('An error occured while playing the current track.');\n    }\n    if (event.type === Event.PlaybackState) {\n      setPlayerState(event.state);\n    }\n  });\n\n  const isPlaying = playerState === State.Playing;\n\n  return (\n    <View>\n      <Text>The TrackPlayer is {isPlaying ? 'playing' : 'not playing'}</Text>\n    </View>\n  );\n};\n")),(0,o.kt)("h2",{id:"useprogress"},(0,o.kt)("inlineCode",{parentName:"h2"},"useProgress")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"State"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"position"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"The current position in seconds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"buffered"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"The buffered position in seconds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"duration"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"The duration in seconds")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useProgress")," accepts an interval to set the rate (in miliseconds) to poll the track player's progress. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"1000")," or every second."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Text, View } from 'react-native';\nimport { useProgress } from 'react-native-track-player';\n\nconst MyComponent = () => {\n  const { position, buffered, duration } = useProgress()\n\n  return (\n    <View>\n      <Text>Track progress: {position} seconds out of {duration} total</Text>\n      <Text>Buffered progress: {buffered} seconds buffered out of {duration} total</Text>\n    </View>\n  )\n}\n")),(0,o.kt)("h2",{id:"useplaybackstate"},(0,o.kt)("inlineCode",{parentName:"h2"},"usePlaybackState")),(0,o.kt)("p",null,"Register an event listener for the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.1/api/events#playbackstate"},"PlaybackState")," event emitted by the TrackPlayer. The subscription is removed when the component unmounts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useState } from 'react';\nimport { Text, View } from 'react-native';\nimport { usePlaybackState, State } from 'react-native-track-player';\n\nconst MyComponent = () => {\n  const playerState = usePlaybackState();\n  const isPlaying = playerState === State.Playing;\n\n  return (\n    <View>\n      <Text>The TrackPlayer is {isPlaying ? 'playing' : 'not playing'}</Text>\n    </View>\n  );\n};\n")))}m.isMDXComponent=!0}}]);