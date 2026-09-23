# 微分定理 + 可数稠密子集 $\implies$ Lebesgue 集几乎处处
`imp.lebesgue-set` · 推出 · strong 边 · 根 `../`

`thm.lebesgue-differentiation` Lebesgue 微分定理 → `thm.lebesgue-set-full` Lebesgue 集几乎处处

$$\frac{1}{m(B(r,x))} \int_{B(r,x)} |f(y) - f(x)| dy \le \frac{1}{m(B(r,x))} \int_{B(r,x)} |f(y) - c| dy + |f(x) - c|$$

右边第一项由 ①（$x \notin E_c$）在 $r \to 0$ 时趋于 $|f(x) - c|$，于是整个右端的极限 $\le$ $|f(x) - c| + \varepsilon < 2\varepsilon$。令 $\varepsilon \to 0$ 得极限为 0，即 $x \in L_f$。

故 $L_f^c \subseteq E$，从而 $m(L_f^c) = 0$。∎

> ⭐ 「把不可数条件化归成可数」这一步是可数性论证的典型手笔，和 Borel–Cantelli 是同一种精神。
