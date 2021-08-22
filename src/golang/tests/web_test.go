package tests

import (
	"net/http"
	"net/http/httptest"
	"os"
	"strings"
	"testing"
	"votingMicroservicesApp/pkg/config"
	"votingMicroservicesApp/pkg/handlers"

	"github.com/stretchr/testify/assert"
)

func TestMain(m *testing.M) {
	config.InitializeAppConfig(false)
	code := m.Run()
	config.ShutDown()
	os.Exit(code)
}

func TestCreateVotingSession(t *testing.T) {
	router := handlers.SetupRouter()

	w := httptest.NewRecorder()
	payload := strings.NewReader(`  {
    "uuid": null,
    "name": "voting",
    "candidates": [
        {
          "uuid": "null",
          "name": "Roberts",
          "votes": 5
        },
        {
          "uuid": "null",
          "name": "Park",
          "votes": 0
        }
    ]
  }`)
	req, _ := http.NewRequest("POST", "/create", payload)
	router.ServeHTTP(w, req)

	assert.Equal(t, 201, w.Code)
}
