## 📁 Project Structure

```
Persona/
├── backend/      # FastAPI backend
│   ├── ai_agent.py
│   └──backend.py
├── frontend/     # React frontend
│   ├── package.json
│   └── ...
└── README.md
```

---

## ⚙️ Getting Started

To run this project locally, follow the steps below for both the backend and frontend.

---

## 🛠️ Backend Setup (FastAPI)

1. **Open a terminal**.
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Navigate to the backend directory:
   ```bash
   cd backend
   ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Run the FastAPI server:
   ```bash
   uvicorn backend:app --reload
   ```

> Ensure the file is named `backend.py` and it contains:
> ```python
> from fastapi import FastAPI
> app = FastAPI()
> ```

The backend will typically be available at [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## 🌐 Frontend Setup (React / Vite)

1. **Open a second terminal**.
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will usually be available at [http://localhost:5173](http://localhost:5173)

---