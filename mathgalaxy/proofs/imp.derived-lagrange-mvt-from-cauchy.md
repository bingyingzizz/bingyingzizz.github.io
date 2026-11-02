# Cauchy 中值定理取 $g(x)=x$ 就是 Lagrange 中值定理
`imp.derived-lagrange-mvt-from-cauchy` · 推出 · strong 边 · 根 `../`

`thm.cauchy-mvt` Cauchy 中值定理 → `thm.mvt` Lagrange 中值定理

Cauchy 中值定理：$f,g$ 在 $[a,b]$ 上连续、在 $(a,b)$ 内可导、$g^{\prime} \ne 0$，则存在 $\xi \in (a,b)$ 使

$$\frac{f(b)-f(a)}{g(b)-g(a)} = \frac{f^{\prime}(\xi)}{g^{\prime}(\xi)} .$$

**取 $g(x) = x$。** 则 $g^{\prime}(x) = 1 \ne 0$ 处处成立（$g^{\prime} \ne 0$ 的前提满足），$g(b)-g(a) = b-a \ne 0$（分母有意义），代入得

$$\frac{f(b)-f(a)}{b-a} = f^{\prime}(\xi),$$

即 $f(b)-f(a) = f^{\prime}(\xi)\,(b-a)$。$g$ 的两个前提（连续、可导、导数非零）对 $g(x)=x$ 自动成立，所以 Cauchy 版本的条件不比 Lagrange 版本更强，特化是合法的。$\blacksquare$

> Cauchy 版本真正的增量在「两个增量用同一个 $\xi$」—— 那才是 L'Hôpital 法则的入口；取 $g = x$ 时这份增量消失，退回 Lagrange。
