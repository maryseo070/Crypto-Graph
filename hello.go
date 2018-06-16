package main

import (
    "io"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        io.WriteString(w, "Hello world!")
    })

    err := http.ListenAndServe(":8000", nil)
    if err != nil {
        panic(err)
    }
}
