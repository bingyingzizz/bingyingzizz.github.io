# Schwarz–Pick 取 $z_{0} = 0$、$f(0) = 0$ 就是 Schwarz 引理
`imp.derived-schwarz-from-pick` · 推出 · strong 边 · 根 `../`

`thm.schwarz-pick` Schwarz–Pick 定理 → `lem.schwarz` Schwarz 引理

Schwarz–Pick：对全纯 $f : \mathbb{D} \to \mathbb{D}$ 与任意 $z_{0} \in \mathbb{D}$，

$$\left| \frac{f(z) - f(z_{0})}{1 - \overline{f(z_{0})}\, f(z)} \right| \le \left| \frac{z - z_{0}}{1 - \overline{z_{0}}\, z} \right|, \qquad \frac{|f^{\prime}(z_{0})|}{1 - |f(z_{0})|^{2}} \le \frac{1}{1 - |z_{0}|^{2}} .$$

**取 $z_{0} = 0$ 并假设 $f(0) = 0$。** 两处分母都变成 $1$，左边分子变成 $|f(z) - 0|$，右边分子变成 $|z - 0|$，于是

$$|f(z)| \le |z|, \qquad |f^{\prime}(0)| \le 1 ,$$

正是 Schwarz 引理的 (1)(2)。

> 续见 proofs/imp.derived-schwarz-from-pick.2.md
