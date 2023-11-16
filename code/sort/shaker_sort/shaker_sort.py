def cocktail_shaker_sort(arr: list[int]) -> list[int]:

    start, end = 0, len(arr) - 1

    while start < end:
        swapped = False

        # Перевод слева на право
        for i in range(start, end):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True

        if not swapped:
            break

        end -= 1  # Уменьшаем указатель

        # Перевод справа на лево
        for i in range(end, start, -1):
            if arr[i] < arr[i - 1]:
                arr[i], arr[i - 1] = arr[i - 1], arr[i]
                swapped = True

        if not swapped:
            break

        start += 1  # Увеличиваем указатель

    return arr