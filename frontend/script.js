async function ask() {
  console.log("🟢 Ask clicked");

  const pdfInput = document.getElementById("pdf");
  const questionInput = document.getElementById("question");
  const status = document.getElementById("status");
  const answer = document.getElementById("answer");

  const pdf = pdfInput.files[0];
  const question = questionInput.value;

  console.log("📄 PDF:", pdf);
  console.log("❓ Question:", question);

  if (!pdf || !question) {
    console.warn("⚠️ Missing PDF or question");
    alert("Please upload a PDF and enter a question");
    return;
  }

  status.innerText = "Thinking...";
  answer.innerText = "";

  const formData = new FormData();
  formData.append("pdf", pdf);
  formData.append("question", question);

  console.log("🚀 Sending request to backend");

  try {
    const res = await fetch("http://127.0.0.1:8000/ask", {
      method: "POST",
      body: formData,
    });

    console.log("📡 Response status:", res.status);

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();
    console.log("✅ Response JSON:", data);

    status.innerText = "";
    answer.innerText = data.answer;
  } catch (err) {
    console.error("🔥 Fetch failed:", err);
    status.innerText = "Something went wrong. Check console.";
  }
}
