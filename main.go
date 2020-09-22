package main

import (
    "himeji/card"
    "himeji/httpd/handler"
    "net/http"
    "github.com/gin-gonic/gin"
)

func main() {
    card := card.New()
		card.Init()
		r := gin.Default()
		r.Static("/assets", "./assets")
		r.LoadHTMLGlob("templates/*.tmpl")
    r.GET("/", func(c *gin.Context) {c.HTML(http.StatusOK, "card.tmpl", gin.H{})})
    r.GET("/card", handler.GetCards(card))
    r.GET("/shuffle", handler.ShuffleCards(card))
    r.GET("/getcard0", handler.GetCard(card, 0))
    r.GET("/getcard1", handler.GetCard(card, 1))
    //r.POST("/article", handler.ArticlePost(article))
    r.Run() // listen and serve on 0.0.0.0:8080
}

