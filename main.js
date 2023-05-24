const apiUrl = 'https://api.openai.com/v1/chat/completions';
const api = '';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${api}`
};

// Add event listener to the button
document.getElementById("generate").addEventListener("click", function() {
    // Get the input values
    const input = document.getElementById("input").value;
    let completion = "";

    const data = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }]
    };

    document.getElementById("demo").innerHTML = "Hi";
    fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            // Handle the response here
            console.log(result);
            const completionResult = result.choices[0].message;
            const completionContent = completionResult.content;
            completion = completionContent;
            document.getElementById("demo").innerHTML = completion;
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });

});