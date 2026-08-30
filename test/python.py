# ==========================================
# PYTHON ULTIMATE COMPREHENSIVE TEST FILE
# ==========================================

import asyncio
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Union, Callable, Protocol
from abc import ABC, abstractmethod
import math

# 1. Constants and Global Variables
GLOBAL_CONFIG: Dict[str, Union[str, int]] = {
    "version": "3.12.0",
    "timeout": 30,
    "debug_mode": True
}

# 2. Decorators
def log_execution(func: Callable) -> Callable:
    """Decorador de prueba para registrar llamadas a funciones."""
    def wrapper(*args, **kwargs):
        print(f"[LOG] Ejecutando: {func.__name__}")
        result = func(*args, **kwargs)
        return result
    return wrapper

# 3. Protocols and Abstract Base Classes (ABCs)
class Renderable(Protocol):
    def render(self) -> str:
        ...

class DatabaseConnection(ABC):
    @abstractmethod
    def connect(self) -> bool:
        pass

# 4. Dataclasses and Object-Oriented Programming
@dataclass
class User:
    username: str
    email: str
    permissions: List[str] = field(default_factory=list)
    is_active: bool = True

    def __str__(self) -> str:
        status = "Activo" if self.is_active else "Inactivo"
        return f"Usuario: {self.username} ({status})"

class AdminUser(User):
    def grant_access(self) -> None:
        print(f"Admin {self.username} concedió acceso total.")

# 5. Functions, Type Hints, and Control Flow
@log_execution
def process_numbers(numbers: List[int]) -> Dict[str, float]:
    """Procesa una lista de números aplicando lógica condicional."""
    if not numbers:
        raise ValueError("La lista de números no puede estar vacía.")

    total = 0
    evens = []

    for n in numbers:
        total += n
        if n % 2 == 0:
            evens.append(n)
        elif n == 13:
            continue  # Salto de ejemplo
        else:
            pass      # Bloque pasivo

    average = total / len(numbers)

    # Expresión condicional (operador ternario)
    evaluation = "Alto" if average > 10 else "Bajo"

    return {
        "sum": float(total),
        "average": average,
        "evaluation": evaluation
    }

# 6. Generators and List Comprehensions
def fibonacci_generator(n: int):
    """Generador eficiente de la serie de Fibonacci."""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

squares_list = [x ** 2 for x in range(10) if x % 2 == 0]
squares_dict = {x: x ** 2 for x in range(5)}

# 7. Asynchronous Programming
async def fetch_data(endpoint: str) -> Optional[str]:
    print(f"Obteniendo datos de {endpoint}...")
    await asyncio.sleep(1)
    return f"Datos de {endpoint}"

async def main_async() -> None:
    results = await asyncio.gather(
        fetch_data("/api/v1/users"),
        fetch_data("/api/v1/status")
    )
    print("Resultados asíncronos:", results)

# 8. Main Execution Block
if __name__ == "__main__":
    print("=== INICIO DE PRUEBA PYTHON ===")

    # Instanciación de objetos
    admin = AdminUser(username="DevMaster", email="dev@astralys.co", permissions=["all"], is_active=True)
    print(admin)
    admin.grant_access()

    # Pruebas de funciones y manejo de excepciones
    try:
        sample_data = [4, 8, 15, 16, 23, 42]
        stats = process_numbers(sample_data)
        print("Estadísticas:", stats)
    except ValueError as e:
        print(f"Error capturado: {e}")

    # Ejecución de generadores
    fib_sequence = list(fibonacci_generator(6))
    print("Secuencia Fibonacci:", fib_sequence)

    # Ejecución de async
    asyncio.run(main_async())