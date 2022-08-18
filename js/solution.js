'use strict';

/*
Написать функцию generateList(array), которая принимает массив из чисел и массивов чисел
(например [1,2,3]) и генерирует список из элементов:

<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>

А если в массиве встречается массив (например, [1,2, [1.1,1.2,1.3] ,3])
то делать вложенный список. Для проверки на массив используйте Array.isArray()

<ul>
	<li>1</li>
	<li>2</li>
	<li>
		<ul>
			<li>1.1</li>
			<li>1.2</li>
			<li>1.3</li>
		</ul>
	</li>
	<li>3</li>
</ul>

 */
void function () {
    const arr = [1, 2, 3];
    const arr2 = [1, 2, [1.1, 1.2, 1.3], 3];
    const arr3 = [1, 2, [1.1, 1.2, 1.3], 3, 4, 5, [2, 3, [3, 2, 4], 4, 5]];

    const generateList = (array) => {
        const generateUl = (array) => {

            if (Array.isArray(array)) {
                const generateListItems = (array, elem) => {

                    for (let item of array) {
                        let li = document.createElement('li');
                        if (Array.isArray(item)) {
                            let ulInner = document.createElement('ul');
                            li.append(generateListItems(item, ulInner));
                        } else {
                            li.innerHTML = item;
                        }
                        elem.append(li);
                    }
                    return elem;
                }
                return generateListItems(array, document.createElement('ul'));
            } else {
                return alert('You must enter an Array');
            }

        }
        document.body.append(generateUl(arr3));
    }
    generateList(arr3);
}();
