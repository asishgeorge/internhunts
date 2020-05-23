const functions = require('firebase-functions');
const express = require('express')
const cheerio = require('cheerio')
const request = require('request')
const axios = require('axios')
const app = express();

app.get('/get/:data', (req, res) => {
    const key = req.params.data.trim();
    console.log(key);

    internshalaExtract(key)
        .then((r) => {
            res.send(r)
        })


})

async function internshalaExtract (keyword) {

    const baseURL = 'https://internshala.com'
    const source = 'Internshala'
    var result = []
    const k = encodeURI(keyword)
    await axios.get('https://internshala.com/internships/keywords-' + k)
        .then((re) => {

            const $ = cheerio.load(re.data)

            $('.individual_internship').each((i, el) => {
                var product = $(el).find('.company').children('h4').first().text().replace(/\s\s+/g, '');
                var pURL = $(el).find('.company h4 a').first().attr('href')
                var productURL = baseURL + pURL
                var companyName = $(el).find('.company h4 a').last().text().replace(/\s\s+/g, '');
                var cURL = $(el).find('.company h4 a').last().attr('href')
                var companyURL = baseURL + cURL
                var startDate, duration, incentives, postedOn, applyBy;

                $(el).find('td').each((i, e) => {
                    switch (i) {
                        case 0:
                            startDate = $(e).text().replace(/\s\s+/g, '');
                            break;
                        case 1:
                            duration = $(e).text().replace(/\s\s+/g, '');
                            break;

                        case 2:
                            incentives = $(e).text().replace(/\s\s+/g, '');
                            break;

                        case 3:
                            postedOn = $(e).text();
                            break;

                        case 4:
                            applyBy = $(e).text();
                            break;
                    }
                })

                var j = {
                    product,
                    productURL,
                    companyName,
                    companyURL,
                    startDate,
                    duration,
                    incentives,
                    postedOn,
                    applyBy,
                    source
                }

                if (product) {
                    result.push(j)
                } else {

                }
            })


        })
        .catch(err => console.log(err))

    return result
}

exports.app = functions.https.onRequest(app)