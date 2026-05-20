import { useState } from 'react'

const imgObj = {
  hello: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGg0djdwZzdwZXhoMm52YnhxOHo4dXVyZXk2cDUwcm1tMm00cW1zNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y4nk5bgwpWL6T5Ax9y/giphy.gif",

}
function App() {
  const [count, setCount] = useState(0)

  return (<><div className="background h-screen w-screen flex justify-center items-center">
  <div className="container rounded-xl shadow-lg p-3 justify-center items-center flex h-50 w-70 bg-black flex-col">
<img src={imgObj.hello} className='h-25 w-25'/>
<p className='text-white text-4xl font-bold font-cursive'>Hello</p>
   <button type="button" className='bg-neutral-50  hover:bg-neutral-600 hover:text-white transition-all duration-300   h-full rounded-lg font-bold cursor-pointer p-2' onClick={() =>{
    sendMail();
   }} >
    Send good morning to everyone
  </button>
  </div>
 
  </div>
  </>);



}
function sendMail(){
  fetch('http://localhost:8080/send-mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Good morning everyone!' }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Good morning email sent successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to send good morning email.');
    }); 
}
export default App
