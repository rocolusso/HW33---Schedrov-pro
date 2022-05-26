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

const arr = [1,2,3];
const arr2 = [1,2,[1.1,1.2,1.3], 3];
const arr3 = [1,2,[1.1,1.2,1.3], [2,5,7], 3];

const generateList = (array) => {

    if (Array.isArray(array)){

        let ulTag = document.createElement('ul');
        document.body.prepend(ulTag);

        for (let i of array) {

            let liTag = document.createElement('li');
            liTag.innerHTML = `${i}`;
            ulTag.append(liTag);

            if (Array.isArray(i)){

                const arrTypeElement = document.querySelector(` body ul li:nth-child(${array.indexOf(i) +1 }) `);
                const ulTag2 = document.createElement('ul');
                ulTag2.id ='inner-ul';
                arrTypeElement.append(ulTag2);

                for (let k of i ){
                    let liTag2 = document.createElement('li');
                    liTag2.innerHTML = `${k}`;
                    ulTag2.append(liTag2);
                }

                document.getElementById('inner-ul').previousSibling.remove();

            }
        }
    } else {
        alert ('error array bad data');
    }
};

generateList(arr2);