# 切空间 = $\ker Dg(a)$ + 极值 $\implies$ 乘子存在
`imp.lagrange-multiplier` · 推出 · strong 边 · 根 `../`

`thm.regular-value` 正则值原像定理 → `thm.lagrange-multiplier` Lagrange 乘子法

**第二步：$Df(a)$ 在 $T_aM$ 上为零。** 设 $v \in T_aM$，取过 $a$ 的曲线 $\gamma$（$\gamma(0) = a$，$\gamma'(0) = v$，$\gamma \subset M$）。函数 $t \mapsto f(\gamma(t))$ 在 $t = 0$ 取局部极值，故其导数为零：由链式法则 $Df(a)(v) = 0$。

**第三步：纯线性代数。** 现在有两个线性映射 $Dg(a) : \mathbb{R}^{n} \to \mathbb{R}^{m}$（满射）与 $Df(a) : \mathbb{R}^{n} \to \mathbb{R}$（线性型），满足

$$\ker Dg(a) \subseteq \ker Df(a)$$

> 续见 proofs/imp.lagrange-multiplier.3.md
