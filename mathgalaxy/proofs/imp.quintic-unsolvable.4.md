# imp.quintic-unsolvable
`imp.quintic-unsolvable` · 推出 · strong 边 · 根 `../`

`thm.radical-solvable` 根式可解 与 伽罗瓦群可解 + `prop.sn-solvable` 对称群的可解性 + `def.galois-group` 伽罗瓦群 + `def.irreducible-poly` 不可约多项式 → `thm.quintic-unsolvable` 五次方程没有根式解

**第三步：$G$ 含一个换位**。$f^{\prime}(x) = 5x^{4} - 4$，唯一临界点为 $\pm\alpha$，$\alpha = (4/5)^{1/4} \in (3/4, 1)$。$f$ 在 $(-\infty, -\alpha)$ 与 $(\alpha, \infty)$ 上递增、在 $(-\alpha, \alpha)$ 上递减。又 $\alpha^{5} = \tfrac{4}{5}\alpha$，故 $f(\alpha) = 2 - \tfrac{16}{5}\alpha < 2 - \tfrac{16}{5}\cdot\tfrac{3}{4} = -\tfrac{2}{5} < 0$，而 $f(-\alpha) = 2 + \tfrac{16}{5}\alpha > 0$；且 $x \to -\infty$ 时 $f \to -\infty$，$x \to +\infty$ 时 $f \to +\infty$。由介值定理与上述单调性，$f$ 恰有三个实根，分别落在 $(-\infty, -\alpha)$、$(-\alpha, \alpha)$、$(\alpha, \

> 续见 proofs/imp.quintic-unsolvable.5.md
