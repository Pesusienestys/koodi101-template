#!/usr/bin/python3

import envirophat
import json
import requests
import os
import time

def readSensors():
    tim = round(time.time())
    sec = tim%60
    tim = (tim-sec)/60
    mi = tim%60
    tim = (tim-mi)/60
    hou = tim%60
    sensors = {
        "temperature": envirophat.weather.temperature(),
        "pressure": envirophat.weather.pressure(),
        "time": [hou,mi,sec]
    }

    return sensors 

if __name__ == "__main__":
    url = os.environ["ENDPOINT"]
    print(url)

    sensorsJson = json.dumps(readSensors(), sort_keys=True, indent=2)

    print("------")
    print(sensorsJson)

    headers = {'content-type': 'application/json'}
    requests.post(url, data=sensorsJson, headers=headers)
