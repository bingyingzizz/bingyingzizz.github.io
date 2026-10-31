# 赋值的定义 $\implies$ $A^+$ 由谱决定
`imp.huber-subring-recovery` · 推出 · strong 边 · 根 `../`

`def.adic-spectrum` adic 谱 Spa + `def.discrete-huber-pair` 离散 Huber pair → `prop.huber-subring-recovery` A⁺ 由谱决定

**$A^+$ 整闭。** 若 $f \in A$ 在 $A^+$ 上整，则 $f$ 满足 $f^n + a_{n-1}f^{n-1} + \cdots + a_0 = 0$（$a_i \in A^+$）。对任意 $x \in \operatorname{Spa}(A,A^+)$，$|a_i(x)| \le 1$，于是

$$|f(x)|^n = |a_{n-1}f^{n-1} + \cdots + a_0| \le \max_{i} |a_i(x)|\,|f(x)|^{i} \le \max(1, |f(x)|^{n-1}),$$

这迫使 $|f(x)| \le 1$。

> 续见 proofs/imp.huber-subring-recovery.2.md
