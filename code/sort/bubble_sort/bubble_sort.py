from typing import Any

def bubble_sort_iterative(collection: list[Any]) -> list[Any]:
    length = len(collection)
    for i in range(length):
        swapped = False # Флаг для оптимизации
        for j in range(i):
            if collection[j] > collection[j + 1]:
                swapped = True
                collection[j], collection[j + 1] = collection[j + 1], collection[j] # Меняем элементы местами
        if not swapped:
            break  # Если небыло ни одной замены - список уже отсортирован
    return collection