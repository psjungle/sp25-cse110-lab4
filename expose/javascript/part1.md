1. 20
2. 20
3. ``var`` is function-scoped, so it is accessible outside of the conditional statement, hence why the ``console.log`` on line 13 ran without error.
4. 20
5. Line 13 returns a ``ReferenceError``. This is because ``result`` was defined using ``let``, which means its scope is destroyed outside of the conditional block.
6. The code errors out on line 7, before line 9. This is because we are trying to reassign a ``const``, which is stricly disallowed.
7. Same reasoning as 6.