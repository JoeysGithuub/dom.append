const fragment = document.createDocumentFragment()
// const mess = document.querySelector("#messages")

const sect1 = document.createElement('section')
sect1.className = 'message'
sect1.textContent = 'Say what'

fragment.appendChild(sect1);

const sect2 = document.createElement('section')
sect2.className = 'message'
sect2.textContent = 'stranger'

fragment.appendChild(sect2);

const sect3 = document.createElement('section')
sect3.className = 'message'
sect3.textContent = 'I dont know'

fragment.appendChild(sect3);

const sect4 = document.createElement('section')
sect4.className = 'message'
sect4.textContent = 'Joe Black'

fragment.appendChild(sect4);

const sect5 = document.createElement('section')
sect5.className = 'message'
sect5.textContent = 'hello'

fragment.appendChild(sect5);

document.querySelector("#messages").appendChild(fragment)
