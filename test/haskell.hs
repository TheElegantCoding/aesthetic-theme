-- ==========================================
-- HASKELL TEST FILE
-- ==========================================

module Main where

import Data.List (sort)

-- Tipos de datos y registros
data Persona = Persona
  { nombre :: String
  , edad   :: Int
  } deriving (Show, Eq)

-- Sinónimo de tipo
type BaseDeDatos = [Persona]

-- Función con patrón de coincidencia y guardas
clasificarEdad :: Int -> String
clasificarEdad n
  | n < 18    = "Menor de edad"
  | n < 65    = "Adulto"
  | otherwise = "Adulto mayor"

-- Función recursiva y operaciones con listas
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

-- Función principal (IO)
main :: IO ()
main = do
  putStrLn "=== Prueba de Haskell ==="

  let p1 = Persona { nombre = "Ana", edad = 25 }
      p2 = Persona { nombre = "Carlos", edad = 42 }
      resultado = factorial 5

  putStrLn ("Factorial de 5 es: " ++ show resultado)
  putStrLn ("Clasificación de Ana: " ++ clasificarEdad (edad p1))
  print (p1 == p2)