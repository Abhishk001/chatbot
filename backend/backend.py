from pydantic import BaseModel
from fastapi import FastAPI
from typing import List
from fastapi.middleware.cors import CORSMiddleware


app=FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],  
)

class RequestState(BaseModel):
    query: str


from ai_agent import get_response_from_frontend



@app.post("/chat")
def chat_endpoint(request: RequestState): 
    query = request.query

    response= get_response_from_frontend(query)
    return response

# create server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)