
# 💼 SmartResume - Frontend

This is the **frontend** of SmartResume — an intelligent resume analyzer app built with **Next.js**, TailwindCSS, and Axios.

It allows users to:

- 🧑‍💼 Register & Login
- 📤 Upload resumes (PDF)
- 📊 Analyze resume content
- 💾 View & download past resumes
- 🗑️ Delete unwanted files
- 🔐 Access everything securely via session-based auth

Live URL 👉 [smart-resume-ja3k.vercel.app](https://smart-resume-ja3k.vercel.app)

---

## 🎥 Demo

check review demo -


---![Screenshot (267)](https://github.com/user-attachments/assets/59a2295e-3e75-450a-a93b-42c884fce30e)

![Screenshot (268)](https://github.com/user-attachments/assets/d722b159-0532-42c9-91ca-4847f66100c1)

 ![Screenshot (269)](https://github.com/user-attachments/assets/ae042923-0d8f-4180-9eb2-b34413a4970b)

![Screenshot (270)](https://github.com/user-attachments/assets/bb788821-bb65-4cc1-9ab3-8755251a1b5c)

![Screenshot (271)](https://github.com/user-attachments/assets/c4ee2d00-bab0-442a-bcf7-2be814cec079)

![Screenshot (272)](https://github.com/user-attachments/assets/6100505b-0ce3-4aac-a618-75d6bf5fa7a7)

![Screenshot (273)](https://github.com/user-attachments/assets/de505d95-d20a-41a0-b208-83752eb18e18)






## 🛠️ Tech Stack


- ✅ Next.js 13+
- ✅ Tailwind CSS
- ✅ Axios
- ✅ Session Cookies (cross-origin)
- ✅ PDF.js (for viewing uploaded resumes)
- ✅ React Protected Routes

---

## 📦 Installation & Setup

### 1. Clone the Repo

```bash
git clone https://github.com/A-yushupadhyay/SmartResume.git
cd SmartResume

```


Create .env.local File
NEXT_PUBLIC_API_URL=https://smartresumebackendapi.onrender.com
⚠️ Make sure this URL matches your deployed backend API.

🚀 Run Locally
npm run dev
Frontend will start on http://localhost:3000

🔐 Auth Handling
Uses cookie-based sessions set by Express backend

Axios requests are made with withCredentials: true

Protected routes use a custom <ProtectedRoute> wrapper

📁 Pages Overview
Path	Description
/      	      --->          Landing Page
/register	    --->         Register a new user
/login	      --->        Login existing user
/upload	      --->     Upload + analyze resumes
/dashboard    --->     Download different resume 



🌐 Deployment (Vercel)
This project is deployed on Vercel with backend hosted on Render.

 Deployed Frontend: https://smart-resume-ja3k.vercel.app

 Deployed Backend: https://smartresumebackendapi.onrender.com

✨ Features
Resume parsing using pdf-parse

Auto job matching based on keywords

File viewer + downloader using PDF.js

Session-based authentication

Mobile responsive UI with Tailwind


📄 License
MIT License


-----------------------------------------@
                                         @
👤 Author                               @
Made with ❤️ by Ayush Upadhyay          @
                                        @
--------------------------------------- @
