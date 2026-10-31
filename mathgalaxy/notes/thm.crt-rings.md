# 中国剩余定理（环论形式）　`thm.crt-rings`　·　说明
根 `../`

**构造**：由互素写 $1 = u + v$（$u \in I$、$v \in J$），令 $e := v$。则



$$e \equiv 0 \pmod I, \qquad e \equiv 1 \pmod J, \qquad e^{2} = e .$$



于是对任意右端 $(x, y)$，元素 $a = x(1-e) + y e$ 满足 $a \equiv x \pmod I$、$a \equiv y \pmod J$ —— 存在性。唯一性：两解之差被 $I$ 与 $J$ 同时整除，故落在 $I \cap J$。



**同构**：由第一同构定理（`thm.first-iso`），核是 $I \cap J$、商掉即得；满射由上面的构造给出。



**分母可以写成乘积**：互素时 $I \cap J = IJ$（见 `def.comaximal`），所以也常写成 $A/IJ \cong A/I \times A/J$。



**与数论的关系**：取 $A = \mathbb{Z}$、$I = (m)$、$J = (n)$、$\gcd(m,n) = 1$，就是 `thm.crt`：$\mathbb{Z}/(mn) \cong \mathbb{Z}/m \times \mathbb{Z}/n$。这条环论形式才是它的「正确形状」—— 数论版只是 $A = \mathbb{Z}$ 的特例。
