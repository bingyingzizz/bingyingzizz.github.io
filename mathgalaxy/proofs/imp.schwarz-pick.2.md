# Schwarz 引理 + 圆盘自同构 $\implies$ Schwarz–Pick 定理
`imp.schwarz-pick` · 推出 · strong 边 · 根 `../`

`lem.schwarz` Schwarz 引理 + `def.mobius` 分式线性变换 → `thm.schwarz-pick` Schwarz–Pick 定理

**第四步：导数形式。** 链式法则在 $w = 0$（$z = z_0$）处拆开：

$$F'(0) = \varphi_{f(z_0)}'(f(z_0))\cdot f'(z_0)\cdot \frac{1}{\varphi_{z_0}'(z_0)}.$$

代入 $\varphi_a'(w) = \dfrac{1 - |a|^2}{(1 - \overline{a}\, w)^2}$、$\varphi_a'(a) = \dfrac{1}{1 - |a|^2}$，得

$$F'(0) = \frac{f'(z_0)(1 - |z_0|^2)}{1 - |f(z_0)|^2}.$$

由 $|F'(0)| \le 1$ 即得微分形式。

**第五步：等号。** 某处取等 $\implies$ $F$ 是旋转（Schwarz 引理的 (3)）$\implies$ $f = \varphi_{f(z_0)}^{-1} \circ F \circ \varphi_{z_0}$ 是三个分式线性变换的复合，仍是 $\mathbb{D}$ 的自同构。反之自同构显然处处取等。$\blacksquare$
