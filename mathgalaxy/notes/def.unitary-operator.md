# 酉算子　`def.unitary-operator`　·　说明
根 `../`

酉 $\iff$ 保内积的可逆算子（$\langle ux, uy\rangle = \langle x, y\rangle$ 且满射）。

⚠️ **无穷维里「等距」$\ne$「酉」**：单侧移位 $S(x_1, x_2, \ldots) = (0, x_1, x_2, \ldots)$ 满足 $\|Sx\| = \|x\|$（等距），但不满；$S^*S = I$ 而 $S\,S^* = I - P_{\ker S^*}$ 是投影。这就是「部分等距」这个概念的用处：它把「在某个闭子空间上是等距」包起来。

⭐ 极分解 $u = V|u|$（$V$ 部分等距，$|u| = \sqrt{u^*u}$）就是部分等距的标准出场方式。有限维版本见 `def.unitary-matrix`。
