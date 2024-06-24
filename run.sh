#!/bin/bash

env="$1"
op="$2"

if [ "$env" = "dev" ]; then
    if [ "$op" = "up" ] || [ "$op" = "down" ]; then
        docker-compose -f "docker-compose.$env.yaml" $op
    else
        echo "Invalid operation: $op. Use 'up' or 'down'."
    fi
else
    echo "Invalid environment: $env. Only 'dev' is supported."
fi