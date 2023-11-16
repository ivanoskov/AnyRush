from random import randrange


def quick_sort(collection: list) -> list:
    if len(collection) < 2:
        return collection
    pivot_index = randrange(len(collection))  # за опорный элемент выбираем случайный
    pivot = collection[pivot_index]
    greater: list[int] = []  # Все элементы больше опорного
    lesser: list[int] = []  # Все элементы меньше опорного

    for element in collection[:pivot_index]:
        (greater if element > pivot else lesser).append(element)

    for element in collection[pivot_index + 1 :]:
        (greater if element > pivot else lesser).append(element)

    return [*quick_sort(lesser), pivot, *quick_sort(greater)]