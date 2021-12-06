#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Dec  1 20:18:16 2021

@author: pooja
"""
#/Users/pooja/Desktop/ML Project/API /filetest.py
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
import os
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()
BatchSize = 1
ImageSize = 256
Channel=2
Epochs=50

origins = [
    "http://localhost:3004",
    "http://localhost:8054",
]
app.add_middleware(
    CORSMiddleware,
    origins=origins,
    credentials=True,
    methods=["*"],
    headers=["*"],
)

MODEL = tf.keras.models.load_model("/Users/pooja/Desktop/ML Project/models/1")

ClassList = ['Covid Negative', 'Covid Positive']



def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    
    predictions = MODEL.predict(img_batch)

    predicted_class = ClassList[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predictedClass,
        'confidence': float(confidence)
    }

@app.post("/create_file/")
async def image(image: UploadFile = File(...)):
    print(image.file)
    # print('../'+os.path.isdir(os.getcwd()+"images"),"*************")
    try:
        os.mkdir("images")
        print(os.getcwd())
    except Exception as e:
        print(e) 
    file_name = os.getcwd()+"/images/"+image.filename.replace(" ", "-")
    with open(file_name,'wb+') as f:
        f.write(image.file.read())
        f.close()
    print(os.listdir(os.getcwd()+"/images"))
    dataset = tf.keras.preprocessing.image_dataset_from_directory(
        os.getcwd(),
        shuffle=True,
        image_size=(256,256),
        )  
    #print('123') 
    import numpy as np
    for images_batch, labels_batch in dataset.take(1):

        first_image = images_batch[0].numpy().astype('uint8')
        first_label = labels_batch[0].numpy()
        batch_prediction = MODEL.predict(images_batch)
        
    
    return {
        'class': CLASS_NAMES[np.argmax(batch_prediction[0])],
        'confidence': float(np.max(batch_prediction[0]))
        
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8054)


