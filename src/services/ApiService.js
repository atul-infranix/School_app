import axios from 'axios'
import { BASE_URL } from 'constants/api.constant'
import BaseService from './BaseService'

const ApiService = {
    fetchData(param) {
        return new Promise((resolve, reject) => {
            BaseService(param).then(response => {
                resolve(response)
            }).catch(errors => {
                reject(errors)
            })
        })
    },
    getData: (params) => {
        return new Promise((resolve, reject) => {
            fetch(BASE_URL + params.url).then(res => {
                resolve(JSON.parse(res._bodyInit))
            }).catch(errors => {
                reject(errors)
            })
        })
    },
    postData: (params) => {
        return new Promise((resolve, reject) => {
            fetch(BASE_URL + params.url, {
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                // Adding body or contents to send
                body: JSON.stringify(params.data),
            }).then(res => {
                // console.warn(params.data);
                resolve(JSON.parse(res._bodyInit))
            }).catch(errors => {
                reject(errors)
            })
        })
    }
}

export default ApiService