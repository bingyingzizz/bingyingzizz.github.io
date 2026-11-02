# 复数的模与辐角 $\implies$ 模长三角不等式
`imp.complex-triangle` · 推出 · strong 边 · 根 `../`

`def.complex` 复数 ℂ → `prop.complex-triangle` 模长的三角不等式

设 $S = \sum_{k=1}^{n} z_k$。$S = 0$ 时结论即 $0 \le \sum |z_k|$，显然。

**关键一步：把和转到实轴上。** 取 $\theta$ 为 $S$ 的一个辐角（即 $S = |S| e^{i\theta}$），两边乘 $e^{-i\theta}$：$e^{-i\theta} S = |S|$ 是**非负实数**，于是

$$|S| = e^{-i\theta} S = \operatorname{Re}\left( e^{-i\theta} S \right) = \sum_{k=1}^{n} \operatorname{Re}\left( e^{-i\theta} z_k \right).$$

**逐项放缩。** 对每个 $k$ 有 $\operatorname{Re} w \le |w|$，故

$$|S| \le \sum_{k=1}^{n} \left| e^{-i\theta} z_k \right| = \sum_{k=1}^{n} |z_k|,$$

最后一步用到 $|e^{-i\theta}| = 1$ 与模的乘法性 $|zw| = |z||w|$（这是 $\mathbb{C}$ 的乘法定义直接给出的）。

> 续见 proofs/imp.complex-triangle.2.md
