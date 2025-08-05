# Chat Demo

## virtualenv

### Installation

```bash
# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Upgrade pip and install the requirements
pip install --upgrade pip
pip install -r backend/requirements.txt
cd frontend
npm install
```

If you have trouble activating the virtual environment on Windows, try `venv\Scripts\activate`.

### Usage

```bash
# Run the server
source venv/bin/activate
cd backend
uvicorn main:app --reload --port 8000

# Run the simulator
source venv/bin/activate
cd frontend
npm run dev
```
