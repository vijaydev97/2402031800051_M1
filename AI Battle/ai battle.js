const GEMINI_API_KEY = "your api";
const OPENROUTER_API_KEY = "your api";

async function compareAI() {
  const prompt = document.getElementById("prompt").value;

  if (!prompt.trim()) {
    alert("Enter a prompt");
    return;
  }

  document.getElementById("geminiOutput").innerText = "Loading...";
  document.getElementById("openrouterOutput").innerText = "Loading...";

getGemini(prompt);
getOpenRouter(prompt);
}

async function getGemini(prompt) {
const start = performance.now();

try {
    const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        contents: [
            {
        parts: [{ text: prompt }]
            }
        ]
        })
    }
    );

    const data = await response.json();

    const end = performance.now();

    document.getElementById("geminiTime").innerText =
    `Response Time: ${((end - start)/1000).toFixed(2)} sec`;

    document.getElementById("geminiOutput").innerText =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    JSON.stringify(data, null, 2);

} catch (error) {
    document.getElementById("geminiOutput").innerText =
    error.message;
}
}

async function getOpenRouter(prompt) {
const start = performance.now();

try {
    const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ]
        })
      }
    );

    const data = await response.json();

    const end = performance.now();

    document.getElementById("openrouterTime").innerText =
    `Response Time: ${((end - start)/1000).toFixed(2)} sec`;

    document.getElementById("openrouterOutput").innerText =
      data.choices?.[0]?.message?.content ||
      JSON.stringify(data, null, 2);

  } catch (error) {
    document.getElementById("openrouterOutput").innerText =
      error.message;
  }
}