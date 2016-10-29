import SendBird from 'sendbird';

const appId = '88DAD638-1ABE-4C19-9032-E4FE9B49A720';

const sb = new SendBird({appId: appId});

export function sendBirdConnect(userEmail, username, cb) {
  sb.connect(userEmail, function(user, err){
    if(err){
      return console.error("error in sendBird login", err);
      return cb(user);
    }
    sb.updateCurrentUserInfo(username, '', function(response, error) {
      if(err){
        return console.error("error sendBird login", err);
      }
    });
  });
}

export function sendBirdGetUsers (cb) {
  const query = sb.createUserListQuery();
  query.next(function(users, err) {
    if(err) {
      return console.warn('error getting users from Sendbird', err);
    }
    console.log(users);
    cb(users.filter(user => user.userId !== sb.currentUser.userId));
  })
}
