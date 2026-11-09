# 酉算子　`def.unitary-operator`　·　说明
根 `../`

酉算子就是「可逆的等距」：$\langle ux, uy\rangle = \langle x, y\rangle$ 且 $u$ 满射。

⚠️ **无穷维里「等距」$\ne$「酉」**：单侧移位 $S(x_1, x_2, \ldots) = (0, x_1, x_2, \ldots)$ 满足 $\|Sx\| = \|x\|$（等距），但不满；$S$ 是部分等距而不是酉算子。部分等距的完整定义与等价条件见 `def.partial-isometry`。

⭐ 极分解 $u = V|u|$（$V$ 部分等距，$|u| = \sqrt{u^*u}$）就是部分等距的标准出场方式。有限维版本见 `def.unitary-matrix`。
