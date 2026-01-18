# PDF RAG Chat Application

A full-stack **PDF-based Question Answering system** built using a **Retrieval-Augmented Generation (RAG)** approach.  
The application allows users to upload PDF documents and ask natural language questions, retrieving accurate answers grounded in the document content.

---

## 🚀 Features

- Upload and process multiple PDF documents
- Extract and chunk document text for efficient retrieval
- Semantic search using embeddings
- Context-aware question answering
- Lightweight frontend with clean UI
- Backend designed with modular, testable components

---

## 🛠️ Tech Stack

**Backend**
- Python
- Flask
- Text processing & retrieval logic
- Modular RAG pipeline (retrieval + response generation)

**Frontend**
- HTML
- CSS
- JavaScript

---

## 🧠 System Design Overview

1. PDF documents are uploaded and parsed on the backend  
2. Text is split into manageable chunks  
3. Relevant chunks are retrieved based on query similarity  
4. Retrieved context is used to generate accurate responses  
5. The system gracefully handles missing or low-relevance results  

This project focuses on **system behavior, data flow, and failure handling**, rather than just UI.

---

## 📂 Project Structure
```text 
pdf_rag_web/
│
├── backend/
│   ├── api.py              # Flask API endpoints
│   ├── rag_engine.py       # Core RAG logic
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```


---

## ▶️ How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/rajanna-adhikary/pdf_rag_chat.git
cd pdf_rag_chat
```
### 2️⃣ Install backend dependencies
```bash
pip install -r backend/requirements.txt
```

### 3️⃣ Start the backend server
```bash
python backend/api.py
```

### 4️⃣ Open the frontend
```bash
Open `frontend/index.html` in your browser.
```
---

## 🧪 Testing & Debugging Focus
- Validated retrieval accuracy for relevant queries

- Handled edge cases such as empty documents and low-similarity matches

- Designed the system to be easily extensible for logging and automated testing

---

## 🎯 Learning Outcomes
- Understanding of Retrieval-Augmented Generation pipelines

- Experience with backend-first system design

- Debugging multi-component systems

- Writing clean, modular, and testable Python code

---

## 📌 Future Improvements

- Add automated test cases for retrieval logic

- Improve performance for large document sets

- Introduce logging and monitoring hooks

- Secure API endpoints for production deployment
  
---

👤 Author

Rajanna Adhikary
BE – Computer Science
Batch of 2027

 ⭐ If you find this project useful, feel free to star the repository.






