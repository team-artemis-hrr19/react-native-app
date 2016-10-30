import SendBird from 'sendbird';
import store from '../store.js';
const appId = '784B5E97-7863-4562-B5C1-DE3D6B6491A8';
const sb = new SendBird({appId: appId});


export function sendBirdConnect(userEmail, username, cb) {
  console.log('line 8 of sendbird connect not connected yet', userEmail, username)
  sb.connect(userEmail, function(user, err){
    if(err){
      return console.error("error in sendBird login", err);
      return cb(user);
    }
    console.log("connected but not updated")
    sb.updateCurrentUserInfo(username, '', function(response, error) {
      if(err){
        return console.error("error sendBird login", err);
      }
      console.log('connected and updated')
    });
  });
}

export function sendBirdGetUsers (cb) {
  const query = sb.createUserListQuery();
  query.next(function(users, err) {
    if(err) {
      console.error('line 29 of sendBird.js',err);
      return;
    }
    cb(users.filter(user => user.userId !== sb.currentUser.userId));
  })
}

export function sendBirdCreateGroupChat(cb) {
  var _friendsList = []
  var friendsListState = store.getState().sendBirdState.get('friendsList')
  friendsListState.forEach((item) => {_friendsList.push(item)})
  sb.GroupChannel.createChannel(_friendsList, false, function(channel, error) {
    if (error) {
      console.log(channel)
      return console.error('we got a problem',error);

    }       
    cb(channel);
    //this.updateChannel.call(this, channel); //TODO: implement channel 
    //this._handleNavigation({'push', route: { key: 'groupChat'}});
  });
 }

 export function sendBirdRemoveChannelHandler(){
   sb.removeChannelHandler('MessageHandler')
 }

 export function sendBirdCreateChannelHandler(cb){
   var ChannelHandler = new sb.ChannelHandler();
   ChannelHandler.onMessageReceived = function(channel, message){
    store.getState().sendBirdState.get('messageList')
    //_messages = _messages.concat.
   }
 }

