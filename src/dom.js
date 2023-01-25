console.log('dom file');

const body = document.querySelector('body');

const styleBody = () =>{
    body.style.background = 'peachpuff';
};

const addtitle = (text) =>{
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
}

const addmsg = () =>{
    const para = document.createElement('h3');
    para.textContent = 'msg';
    body.appendChild(para);
}

styleBody();
addtitle('na me talai');
addmsg();