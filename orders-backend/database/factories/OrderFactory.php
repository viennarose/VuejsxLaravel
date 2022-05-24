<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'customerName' => $this->faker->name,
            'contact' => $this->faker->phoneNumber,
            'item' => $this->faker->randomElement(["Presto", "Rebisco Crackers", "Hansel", "Fita"]),
            'quantity' => $this->faker->numberBetween($min=1, $max=50),
            'price' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 50, $max = 100),
            'total' => $this->faker->randomDigit,
        ];
    }
}
