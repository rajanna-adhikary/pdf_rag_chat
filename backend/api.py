from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, UploadFile, File, Form
import shutil
from pathlib import Path

from rag_engine import answer_from_pdf

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow all (for dev only)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

@app.post("/ask")
async def ask_pdf(
    pdf: UploadFile = File(...),
    question: str = Form(...)
):
    print("➡️ Request received")
    print("📄 PDF:", pdf.filename)
    print("❓ Question:", question)
    pdf_path = UPLOAD_DIR / pdf.filename

    with open(pdf_path, "wb") as buffer:
        shutil.copyfileobj(pdf.file, buffer)

    answer = answer_from_pdf(str(pdf_path), question)

    return {"answer": answer}
