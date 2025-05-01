1. ``3`` is printed to the console. This is because ``i`` is declared using ``var``, making it function-scoped. Since ``prices.length = 3``, then ``i`` is incremented to that and the loop terminates.
2. ``150`` is printed to the console. Again, this is because ``discountedPrice`` was declared using ``var``, making it function-scoped, and the last value it was assigned to before the loop terminated is ``150``.
3. ``150`` is printed to the console. Again, this is because ``finalPrice`` was declared using ``var``, making it function-scoped, and the last value it was assigned to before the loop terminated is ``150``. Whether it was first declared outside or inside the loop block doesn't matter.
4. The function will return ``[50, 100, 150]``. Same reasoning as 2 and 3, but this time it's a list which collects the computed ``finalPrice`` values.
5. Line 12 returns a ``ReferenceError``. This is because ``i`` is declared using ``let``, making it block-scoped. And since we try to reference it outside the block, it throws an error.
6. Same error and reasoning as 5.
7. ``150`` is printed to the console. This is becasue ``finalPrice`` was declared with function scope, so it is accessible anywhere in the function after it was declared.
8. ``[50, 100, 150]`` is printed to the console. Same reasoning as 7.
9. Line 11 returns a ``ReferenceError``. Same reasoning as 5. 
10. ``3`` is printed to the console. This is because ``length`` was declared with ``const`` at the top of the function, so it's in scope anywhere in the function.
11. The function will return ``[50, 100, 150]``. Calling ``push()`` simply mutates ``discounted`` and doesn't reassign it, which is valid for ``const``.

12.
A. ``student.name`` \
B. ``student['Grad Year']`` \
C. ``student.greeting()`` \
D. ``student['Favorite Teacher'].name`` \
E. ``student.courseLoad[0]``

13.
A. ``'32'``: ``+`` with a string causes concatenation. \
B. ``1``: ``-`` forces a numeriic conversion. \
C. ``3``: ``null`` becomes ``0``. \
D. ``'3null'``: same as A. \
E. ``4``: ``true`` becomes ``1``. \
F ``0``: ``false`` and ``null`` are 0. \
G. ``'3undefined'``: same as A. \
H. ``NaN``: ``-`` forces a numeric conversion, ``undefined`` becomes ``NaN`` in numeric context.

14. 
A. ``true``: numeric conversion, ``2 > 1 -> true``. \
B. ``false``: both are strings, so a lexicographic comparison is done. \
C. ``true``: loose ``==`` causes numeric conversion. \
D. ``false``: strict ``===`` checks type. \
E. ``false``: loose ``==`` causes numeric conversion of ``true`` to ``1``. \
F. ``true``: ``Boolean(2)`` is ``true``.

15. ``==`` is a(n) loose/abstract comparison, so it converts operands to a common type before comparing. ``===`` is a strict comparison, so it compares type and value without converting.

16.
```
21
45
5
2
```

17. The function call will return ``[2, 4, 6]``.
- ``modifyArray`` creates a new array ``newArr = []``.
- It loops over each element of ``[1, 2, 3]``.
- For each element ``x``, it does ``newArr.push(callback(x))``. Here callback is ``doSomething``, which returns ``x * 2``.
- So it pushes ``2``, then ``4``, then ``6``.
- Finally returns ``[2, 4, 6]``.

18. See ``part2-question18.js``.

19.
```
1
4
3
2
```