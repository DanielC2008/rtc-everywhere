'use strict';

var mock = require('../temp-mock');
var temasys = require('./index');

var RTCPeerConnectionMock = mock({
  methods: [
    'addIceCandidate',
    'addStream',
    'close',
    'createAnswer',
    'createDTMFSender',
    'createDataChannel',
    'createOffer',
    'setLocalDescription',
    'setRemoteDescription',
    'removeStream',
    'getLocalStreams',
    'getRemoteStreams',
    'getStats',
    'getStreamById',
    'updateIce'
  ],
  properties: [
    'iceConnectionState',
    'iceGatheringState',
    'localDescription',
    'remoteDescription',
    'onaddstream',
    'ondatachannel',
    'onicecandidate',
    'oniceconnectionstatechange',
    'onnegotiationneeded',
    'onremovestream',
    'onsignalingstatechange',
    'signalingState'
  ]
});

var RTCSessionDescriptionMock = mock({
  properties: [
    'type',
    'sdp'
  ]
});

var RTCIceCandidateMock = mock({
  properties: [
    'candidate',
    'sdpMid',
    'sdpMLineIndex'
  ]
});

module.exports = {
  RTCPeerConnection: function(){
    var inst = new RTCPeerConnectionMock(arguments);
    temasys(function(rtc){
      mock.resolve(inst, rtc.RTCPeerConnection);
    });
    return inst;
  },
  RTCSessionDescription: function(){
    var inst = new RTCSessionDescriptionMock(arguments);
    temasys(function(rtc){
      mock.resolve(inst, rtc.RTCSessionDescription);
    });
    return inst;
  },
  RTCIceCandidate: function(){
    var inst = new RTCIceCandidateMock(arguments);
    temasys(function(rtc){
      mock.resolve(inst, rtc.RTCIceCandidate);
    });
    return inst;
  }
};