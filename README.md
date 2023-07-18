# React Native - Milestone 1: MVP
## LAB - Class 43
### Author: Coriana Williams

### Problem Domain# Phase 1 Requirements
The problem domain of the ChatScreen component is to provide a functional and user-friendly chat interface, allowing users to interact with messages effectively. 

The ChatScreen component is responsible for rendering the chat interface, managing the state of messages, and handling user interactions such as sending and deleting messages. The tests for this component verify that it behaves correctly in various scenarios, ensuring that messages are displayed correctly, new messages are added to the chat list, and deleted messages are removed from the list.

### Links and Resources
- ![Sandbox URL1 - class 43](https://codesandbox.io/p/github/Coriana1/js-401d53-class-43/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clk7sbxpf000g3b6mxn4r29d9%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clk7sbxpf000b3b6mpkyrvdy9%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clk7sbxpf000f3b6m3vepnqbv%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clk7sbxpf000d3b6mpu3brl7d%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clk7sbxpf000b3b6mpkyrvdy9%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clk7sbxpe000a3b6mdjhp7c5f%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clk7sbxpf000b3b6mpkyrvdy9%2522%252C%2522activeTabId%2522%253A%2522clk7sbxpe000a3b6mdjhp7c5f%2522%257D%252C%2522clk7sbxpf000d3b6mpu3brl7d%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clk7sbxpf000c3b6mae9iv95e%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%257D%255D%252C%2522id%2522%253A%2522clk7sbxpf000d3b6mpu3brl7d%2522%252C%2522activeTabId%2522%253A%2522clk7sbxpf000c3b6mae9iv95e%2522%257D%252C%2522clk7sbxpf000f3b6m3vepnqbv%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clk7sbxpf000e3b6mmwf3zc8o%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clk7sbxv3000lh2ewchpf81na%2522%257D%255D%252C%2522id%2522%253A%2522clk7sbxpf000f3b6m3vepnqbv%2522%252C%2522activeTabId%2522%253A%2522clk7sbxpf000e3b6mmwf3zc8o%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)
- ![GitHub Actions ci/cd](https://github.com/Coriana1/js-401d53-class-43/actions)
- ![Expo Docs](https://expo.dev/)

## Collaborators
Eva Grace, Kaedon O'Meara, Ethan Storm, AI for testing 

### Setup
- e.g. `expo start`

#### Tests
- npm test

#### UML
- ![UML - Class 43](./assets/lab43UML.png)