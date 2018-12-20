package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type EndpointDescription struct {
	Description string      `json:"description"`
	Body        Calculation `json:"body"`
}

type Calculation struct {
	Value1 int `json:"value1"`
	Value2 int `json:"value2"`
}

const PORT int = 8081

func endpointDescription(w http.ResponseWriter, r *http.Request) {
	endpointDesc := EndpointDescription{Description: "This is a Go service that makes subtractions. As payload receives data like the body below.", Body: Calculation{Value1: 6, Value2: 2}}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(endpointDesc)
}

func subtract(w http.ResponseWriter, r *http.Request) {
	var calc Calculation
	err := json.NewDecoder(r.Body).Decode(&calc)

	if err != nil {
		fmt.Println("Error: ", err)
		panic(err)
	}

	result := calc.Value1 - calc.Value2
	fmt.Fprint(w, result)
}

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Subtract (Go) service home page endpoint hit")
}

func handleRequest() {
	fmt.Println("Server running at port ", PORT)
	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.HandleFunc("/", homePage)
	myRouter.HandleFunc("/subtract", endpointDescription).Methods("GET")
	myRouter.HandleFunc("/subtract", subtract).Methods("POST")
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", PORT), myRouter))
}

func main() {
	handleRequest()
}
