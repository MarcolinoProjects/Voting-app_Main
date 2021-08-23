package handlers

import "github.com/gin-gonic/gin"

func SetupRouter() *gin.Engine {
	route := gin.Default()
	api := route.Group("/api")
	{
		api.POST("/create", CreateVoting)
		api.GET("/list", ListVoting)
		api.GET("/:sessionUuid", GetVotingSessionInfo)
		api.DELETE("/:sessionUuid", DeleteVotingSession)
		api.POST("/:sessionUuid/:candidateUuid", VoteOnCandidate)
	}

	return route
}
