FROM python:3.10.1

WORKDIR /app/backend

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

COPY requirements.txt /app/backend/

RUN pip install -r requirements.txt

COPY . /app/backend/

RUN python manage.py migrate

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]