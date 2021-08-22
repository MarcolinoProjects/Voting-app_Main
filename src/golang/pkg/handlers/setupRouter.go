package handlers

import "github.com/gin-gonic/gin"

func SetupRouter() *gin.Engine {
	route := gin.Default()
	route.POST("/create", CreateVoting)
	route.GET("/list", ListVoting)
	route.GET("/:sessionUuid", GetVotingSessionInfo)
	route.DELETE("/:sessionUuid", DeleteVotingSession)
	route.POST("/:sessionUuid/:candidateUuid", VoteOnCandidate)
	return route
}
