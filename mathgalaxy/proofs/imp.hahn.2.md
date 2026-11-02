# 符号测度 + 正集的封闭性 $\implies$ Hahn 分解
`imp.hahn` · 推出 · strong 边 · 根 `../`

`def.signed-measure` 符号测度 + `prop.positive-set-closure` 正集的封闭性 → `thm.hahn-decomposition` Hahn 分解定理

**③ 断言 $N = X \setminus P$ 是负集。** 反设 $N$ 不含负集，即 $N$ 不是负的。要证它会挤出一个比 $m$ 更大的正集。

**④ 在 $N$ 里挖出正集。** 若 $N$ 不是负集，则存在可测 $A \subseteq N$ 使 $\nu(A) > 0$。「$A$ 是正的」就到此结束；否则存在 $A_1 \subseteq A$ 使 $\nu(A_1) < 0$。取**最小的自然数** $n$ 使

$$\nu(A_1) < -1/n$$

（$n_1$ 取「使存在负测度集 $\le -1/n_{1}$ 的最小 $n$」。**取最小**这一步是关键 —— 它保证后面能取极限。）

再在 $A \setminus A_1$ 里重复同样的操作，得到 $A_2, \ldots $

> 续见 proofs/imp.hahn.3.md
