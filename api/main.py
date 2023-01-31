from fastapi import FastAPI
from authenticator import authenticator
from fastapi.middleware.cors import CORSMiddleware
from routers import accounts, yelp, allergies, diet_restrict
import os


app = FastAPI()
app.include_router(accounts.router, tags=['Accounts'])
app.include_router(authenticator.router, tags=['Authentication'])
app.include_router(yelp.router, tags=['YelpAPI'])
app.include_router(allergies.router, tags=['Allergies'])
app.include_router(diet_restrict.router, tags=['Diet Restrictions'])

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000", None)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# @app.get("/api/launch-details")
# def launch_details():
#     return {
#         "launch_details": {
#             "year": 2022,
#             "month": 12,
#             "day": "9",
#             "hour": 19,
#             "min": 0,
#             "tz:": "PST"
#         }
#     }
