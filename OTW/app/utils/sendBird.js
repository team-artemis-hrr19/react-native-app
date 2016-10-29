import SendBird from 'sendbird';

const appId = 'B8C20852-7D51-4294-AF13-5DD3B4FB79B2';
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
