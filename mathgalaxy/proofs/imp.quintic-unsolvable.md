# imp.quintic-unsolvable
`imp.quintic-unsolvable` · 推出 · strong 边 · 根 `../`

`thm.radical-solvable` 根式可解 与 伽罗瓦群可解 + `prop.sn-solvable` 对称群的可解性 + `def.galois-group` 伽罗瓦群 + `def.irreducible-poly` 不可约多项式 → `thm.quintic-unsolvable` 五次方程没有根式解

**证明**。取 $f = x^{5} - 4x + 2$，分四步：$f$ 不可约 $\implies$ 伽罗瓦群传递且含 5-循环；$f$ 恰有三个实根 $\implies$ 复共轭给出换位；5-循环与换位生成 $S_{5}$；最后用 `thm.radical-solvable` 与 `prop.sn-solvable`。

> 续见 proofs/imp.quintic-unsolvable.2.md
