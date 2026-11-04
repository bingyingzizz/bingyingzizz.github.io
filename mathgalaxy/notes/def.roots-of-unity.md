# 单位根　`def.roots-of-unity`　·　说明
根 `../`

⭐ **它为什么在 Galois 那条线上**：用根式解方程时，最后一步是「开 $n$ 次方」，而开方在域里的样子正是「添加一个 $n$ 次单位根之后，$x^{n} - a$ 的根可以写成 $\sqrt[n]{a}\cdot\zeta^{k}$」。所以**根式可解 $\implies$ 可解**那个方向必须先把 $\mu_{n}$ 加进来（`thm.radical-solvable` 的路线里提到过）。

⭐ **$\Phi_{n}$ 的伽罗瓦群是 $(\mathbb{Z}/n)^{\times}$**（每个 $\sigma$ 由 $\zeta \mapsto \zeta^{k}$ 决定，$k$ 与 $n$ 互素）—— 这是「伽罗瓦群可以是任何有限阿贝尔群」的第一次亮相（Kronecker–Weber 的起点）。

⭐ **$\mu_{n} \subseteq \mathbb{Q}$ 只有 $n = 1, 2$**：$n \ge 3$ 时 $\zeta$ 不是有理数。所以「添加单位根」是真的扩张，不是形式上的。

⚠ **本图没有「分圆域 $\mathbb{Q}(\zeta_{n})$」节点**：那是这条线的下一步（它的伽罗瓦群与分圆多项式一起构成一个完整例子），留作后续。
