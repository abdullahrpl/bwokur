// AI script
$(document).ready(function () {
    const API_KEY = "AIzaSyCdrTI0Rgpia6lNkKmG1A380zvG7KbLNn4";
    const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
  
    function formatResponse(text) {
      return text.replace(/\n/g, "<br>").replace(/\s{2,}/g, " &nbsp;");
    }
  
    $("#chatForm").submit(function (e) {
      e.preventDefault();
      const userInput = $("#userInput").val();
      $("#chatBox").append(`<p><strong>Anda:</strong> ${userInput}</p>`);
  
      const promptPrefix =
        "";
  
      $.ajax({
        url: `${API_URL}?key=${API_KEY}`,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: userInput + promptPrefix + userInput,
                },
              ],
            },
          ],
        }),
        success: function (response) {
          const aiResponse = response.candidates[0].content.parts[0].text;
          const formattedResponse = formatResponse(aiResponse);
          $("#chatBox").append(`<p><strong>AI DemiKita:</strong> <br>${formattedResponse} </p>`);
          $("#chatBox").scrollTop($("#chatBox")[0].scrollHeight);
        },
        error: function (xhr, status, error) {
          console.error("Error:", error);
          $("#chatBox").append(`<p><strong>Error:</strong> Terjadi kesalahan saat memproses permintaan Anda.</p>`);
          $("#chatBox").scrollTop($("#chatBox")[0].scrollHeight);
        },
      });
  
      $("#userInput").val("");
    });
  });
  