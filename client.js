  const socket  = io('http://localhost:8000');
  const form = document.getElementById('form-container');
  const msg = document.getElementById('newMessage');
  const msg_container = document.querySelector('#chat-content');

 


  
  const append = (message, position) => {
    const msg_element = document.createElement('div');
    msg_element.innerText = message;
    msg_element.classList.add('message');
    msg_element.classList.add(position);
    msg_container.append(msg_element);
  };
  
  
  const name  = prompt('Please Enter Your Name');
  socket.emit('new_user_joined',name);

  socket.on('user-joined', name =>{
    append(`${name} has Join Chat`,'right');
  });