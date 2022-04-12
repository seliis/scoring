package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New())

	app.Post("/", func(c *fiber.Ctx) error {
		fmt.Println(string(c.Body()))
		return c.SendString("this is response msg")
	})

	app.Listen(":8080")
}
