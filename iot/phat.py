#!/usr/bin/python3

import envirophat
import json
import requests
import os
import time

def readSensors():
    sensors = {
        "temperature": envirophat.weather.temperature(),
        "pressure": envirophat.weather.pressure()
    }

    return sensors 

if __name__ == "__main__":
    url = os.environ["ENDPOINT"]
    print(url)

    sensorsJson = json.dumps(readSensors(), sort_keys=True, indent=2)

    print("------")
    print(sensorsJson)

    headers = {'content-type': 'application/json'}
    r = requests.post(url, data={"message":sensorsJson}, headers=headers)
    print(r.status_code)
