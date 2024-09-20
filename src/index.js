
// Import the Supabase client
import { createClient } from '@supabase/supabase-js';

// // Initialize Supabase with your URL and API key
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_PASSWORD
const supabase = createClient(supabaseUrl, supabaseKey);

async function insertMessage(content) {
  const { data, error } = await supabase
    .from('messages')
    .insert([{ content: content }]);

  if (error) {
    console.error('Error inserting message:', error);
  } else {
    console.log('Inserted message:', data);
  }
}

async function fetchMessages() {
  const { data, error } = await supabase
    .from('messages')
    .select('*');

  if (error) {
    return error;
  } else {
    return data;
  }
}

// Example usage
(async () => {
  //await insertMessage('Hello, Supabase!');
  const messages = await fetchMessages();
  document.querySelector("#app").innerHTML = messages.map(m=>`<p>${m.content}</p>`).join('')
})();
