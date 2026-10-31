# Schwarz 引理 + 圆盘自同构 $\implies$ Schwarz–Pick 定理
`imp.schwarz-pick` · 推出 · strong 边 · 根 `../`

`lem.schwarz` Schwarz 引理 + `def.mobius` 分式线性变换 → `thm.schwarz-pick` Schwarz–Pick 定理

**第一步：造圆盘的自同构。** 对 $|a| < 1$ 令

$$\varphi_a(z) := \frac{z - a}{1 - \overline{a}\, z}.$$

分母在 $|z| < 1$ 上不为零（$|\overline{a} z| < 1$）；$\varphi_a(a) = 0$；直接代入可验 $\varphi_{-a}(\varphi_a(z)) = z$，故它是 $\mathbb{D}$ 到自身的双射。

**第二步：把两个点都挪到原点。** 令

$$F := \varphi_{f(z_0)} \circ f \circ \varphi_{z_0}^{-1}.$$

这是 $\mathbb{D} \to \mathbb{D}$ 的全纯映射，且 $F(0) = \varphi_{f(z_0)}(f(z_0)) = 0$。

**第三步：套 Schwarz 引理。** 得 $|F(w)| \le |w|$，把 $w = \varphi_{z_0}(z)$ 代回即

$$\left| \frac{f(z) - f(z_0)}{1 - \overline{f(z_0)} f(z)} \right| \le \left| \frac{z - z_0}{1 - \overline{z_0} z} \right|.$$

> 续见 proofs/imp.schwarz-pick.2.md
