# 中值定理 $\implies$ 凸性的导数判据
`imp.convex-criterion` · 推出 · strong 边 · 根 `../`

`thm.mvt` Lagrange 中值定理 → `thm.convex-criterion` 凸性的导数判据

记 $R(x, y) := \dfrac{f(x) - f(y)}{x - y}$（$x \ne y$）。凸性的定义等价于：$R(x, y)$ 关于 $x$ 递增（固定 $y$）。

**(i) 凸 $\implies f'$ 递增。** 由中值定理，对 $x < z$ 存在 $\xi \in (x, z)$ 使 $f' (\xi) = R(z, x)$；把上式里的 $y$ 分别取成 $x$ 与 $z$ 并比较，可得

$$f'(x) \le R(z, x) \le f'(z)$$

（左不等式对 $h \to 0^{+}$ 取极限即得；右不等式同理。）故 $f'$ 递增。

**(ii) $f'$ 递增 $\implies$ 凸。** 给定 $x < z$ 与 $t \in [0, 1]$，记 $w := (1 - t)x + tz$。对 $[x, w]$ 与 $[w, z]$ 各用一次中值定理，得两点 $\xi_1 < \xi_2$，于是 $f'(\xi_1) \le f'(\xi_2)$，展开整理即得凸性不等式。

> 续见 proofs/imp.convex-criterion.2.md
