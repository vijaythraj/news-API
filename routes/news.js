const express = require('express')
const News = require('../models/news')
const router = express.Router()

router.get('/',async (req,res) => {
    try{
        const news_articles = await News.find()
        res.json(news_articles)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/:id',getPost,(req,res) => {
    res.send(res.news_article.author)
})

router.post('/',async (req,res) => {
    const news_article = new News({
        Headline:req.body.Headline,
        Byline:req.body.Byline,
        location:req.body.location,
        date:req.body.date,
        Description:req.body.Description,
        author:req.body.author
    })

    try{
        const newArticle = await news_article.save()
        res.status(201).json(newArticle)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})

router.patch('/:id',(req,res) => {
    
})

router.delete('/:id',getPost,async (req,res) => {
    try{
        await res.news_article.fi({_id: NewsId})
    } catch(err) {
        res.json({message: err.message})
    }
})

async function getPost(req,res,next){
    try{
        news_article = await News.findById(req.params.id)
        if(news_article == null){
            return res.status(404).json({message: "cannot find the news article you are looking for"})
        }
    } catch(err) {
        return res.status(500).json({message: err.message})
    }

    res.news_article = news_article
    next()
}

module.exports = router