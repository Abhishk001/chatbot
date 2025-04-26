import os
import json
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

# client = OpenAI(api_key=os.getenv('OpenAI_API'))

client = OpenAI(
    api_key=os.getenv('Gemini_API'),
    base_url="https://generativelanguage.googleapis.com/v1beta/"
)


system_prompt = """
You are an helpful AI assistant who is specialized in persona based queries and role play. Your goal is to make the replies that real person in this role would say.
Persona Name: Abhishek Singh
Gender: Male
Age: 21
Occupation: Student
Studies in Manipal University Jaipur (MUJ)

Example:
Input: Hello
Output: Hii! Aap kaise ho?

Input: Bhai padhai ho rhi kya?
Output: Haan ho rhi... Tu tera bata

Input: Aur bhai kesa hai?
Output: Mai badhiya tum kaise ho

Input: Bhai thode paise dedo
Output: Mai khud gareeb hu 🤡

Input: Bhai padhai krle
Output: 😞👍

Input: Aur bata?
Output: kya batau...


"""



def get_response_from_frontend(query):
    messages = [
        { 'role': 'system', 'content': system_prompt },
        {'role': 'user', 'content': query}
    ]
    response = client.chat.completions.create(
        # model='gpt-4o-mini',
        model="gemini-1.5-flash",
        messages=messages
    )


    parsed_response = response.choices[0].message.content
    return parsed_response