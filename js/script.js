let meta = document.createElement('meta');
meta.setAttribute(`charset`, `UTF-8`);
document.head.appendChild(meta);

let metaXUA = document.createElement('meta');
metaXUA.setAttribute(`http-equiv`, `X-UA-Compatible`);
metaXUA.setAttribute(`content`, `IE=edge`);
document.head.appendChild(metaXUA);

let metaV = document.createElement('meta');
metaV.setAttribute(`name`, `viewport`);
metaV.setAttribute(`content`, `width=device-width, initial-scale=1.0`);
document.head.appendChild(metaV);

let title = document.createElement('title');
title.innerHTML = 'DOM'
document.head.appendChild(title);

let style = document.createElement('style');
style.innerHTML = `

*{
    margin: 0;
    padding: 0;
    font-weight: 200;
    font-size: 22px;
}

.container{
    width: 70%;
    margin: 0 auto;
}

.h1{
    color: 33, 33, 33;
    text-align: center;
    font-size: 42px;
    margin-top: 80px;
    margin-bottom: 10px;
}

.p{
    color: #9FA3A7;
    text-align: center;
    margin-bottom: 55px;
}

.list-items{
    display: flex;
    text-align: center;
    justify-content: center;
}

.list-item{
    width: 400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    border: 1px solid #E8E9ED;
}

.list-item:nth-child(2){
    border-left: 0;
}

.FREELANCER{
    text-transform: uppercase;
    padding-top: 81px;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #9FA3A7;
    margin-bottom: 19px;
}

.item_text{
    color: #212121;
    margin-bottom: 25px;
    width: 210px;
    font-size: 36px;
    line-height: 46px;
    font-weight: bold;
}

.item_subtext{
    color: #9FA3A7;
    font-size: 12px;
    width: 210px;
    margin-bottom: 52px;
}

.button {
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    padding: 15px 22px;
    color: #212121;
    border: 3px solid #FFC80A;
    border-radius: 25px;
    margin-bottom: 90px;
}

.list-item:hover {
    background-color: #8F75BE;
    color: #fff;
}

.list-item:hover .FREELANCER {
    color: #FFC80A;
}

.list-item:hover .item_text,
.list-item:hover .item_subtext,
.list-item:hover .button{
    color:#FFFFFF;
}

`
document.head.appendChild(style);

let container = document.createElement('div');
container.setAttribute(`class`, `container`);
document.body.appendChild(container);

let h1 = document.createElement('h1');
h1.setAttribute(`class`, `h1`);
h1.innerHTML = 'Choose Your Option';
container.appendChild(h1);

let p1 = document.createElement('h1');
p1.setAttribute(`class`, `p`);
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
container.appendChild(p1);


let ul = document.createElement('ul');
ul.setAttribute(`class`, `list-items`);
container.appendChild(ul);

let li = document.createElement('li');
li.setAttribute(`class`, `list-item`);
ul.appendChild(li);

let freelancer = document.createElement('p');
freelancer.setAttribute(`class`, `FREELANCER`);
freelancer.innerHTML = 'FREELANCER';
li.appendChild(freelancer);

let item_text = document.createElement('h3');
item_text.setAttribute(`class`, `item_text`);
item_text.innerHTML = 'Initially designed to';
li.appendChild(item_text);

let item_subtext = document.createElement('p');
item_subtext.setAttribute(`class`, `item_subtext`);
item_subtext.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
li.appendChild(item_subtext);

let button = document.createElement('a');
button.setAttribute(`class`, `button`);
button.innerHTML = 'start here';
li.appendChild(button);

let li2 = li.cloneNode(true);
ul.appendChild(li2)

let studio = li2.querySelector('.FREELANCER')
studio.innerHTML = 'studio';