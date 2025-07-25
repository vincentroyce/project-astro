import { useState } from 'preact/hooks';

let Greeting = ({messages}) => {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{greeting}! Thank you for visiting!</h3>
      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}

export default Greeting