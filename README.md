# Mingle Server Prototype

> A prototype of virtual enviroment that enables people to interact in a 3D space

![header](image)

## Introduction

The goal of this project is to create a virtual alternative to real world enviroments, enable people to interact within a 3D space with others, while seeing their video from a camera and hearing their voice through their microphone. The catch is that the audio must be heard only by those nearby it's source. The biggest reference to this project is this website: 

https://yorb.itp.io/

Check the website for reference and inspiration.

## Getting Started

This prototype is made of 2 parts: a Node.js server that is hosted at [Heroku](https://mingle-server-1.herokuapp.com/), and a Unity3D project available [here](https://github.com/matheusberger/Mingle) along with instructions on how to run it.

### Requirements

- Unity 2019.4 or later
- Node.js (if running locally)
- Internet connection

## Usage

After cloning this repo, navigate to its directory with the Terminal or Windows Powershell and use "npm start" to run the server. All code is within mingle.js file and it's not optimal yet. To stop running the server press cmd+c or ctrl+c depending on your OS.

## Roadmap

### Node Server

- [x] Handle new connections
- [ ] Handle desconnections
- [x] Send and receive users' position info
- [ ] Send and receive users' audio stream
- [ ] Send and receive users' video stream
- [x] Host the server online

### Unity App

- [x] Make first person view movement and camera
- [x] Prototype 3D audio
- [x] Establish connection with server via Socket.io
- [x] Send and receive users' position info
- [ ] Send and receive users' audio stream
- [ ] Send and receive users' video stream
- [ ] Build to WebGL and host it online
- [ ] Add images to facilitate readme's understanding

## Known Issues

## Copyright

This project is copyright of [VoxarLabs](https://www.cin.ufpe.br/~voxarlabs/)

## Contributors

- Matheus Berger [@matheusberger](https://github.com/matheusberger)

## Links used in this project

- [StackOverflow: video/audio streaming with socket.io](https://stackoverflow.com/questions/49868353/send-video-audio-over-socket-io-from-browser)
- [NPM Package: socket.io streaming](https://www.npmjs.com/package/socket.io-stream)
- [Node.js: Stream API](https://nodejs.org/api/stream.html)
- [Github: JS Stream Handbook](https://github.com/substack/stream-handbook)