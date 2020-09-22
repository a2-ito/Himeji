package handler

import (
    "net/http"

    "himeji/card"

    "github.com/gin-gonic/gin"
)

func GetCards(card *card.Cards) gin.HandlerFunc {
    return func(c *gin.Context) {
        result := card.GetAll()
        c.JSON(http.StatusOK, result)
    }
}

func ShuffleCards(card *card.Cards) gin.HandlerFunc {
    return func(c *gin.Context) {
        result := card.Shuffle()
        c.JSON(http.StatusOK, result)
    }
}

func GetCard(card *card.Cards, index int) gin.HandlerFunc {
    return func(c *gin.Context) {
        result := card.GetCard(index)
        c.JSON(http.StatusOK, result)
    }
}


