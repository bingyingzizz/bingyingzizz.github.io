# 闭子代数是格　`lem.closed-subalgebra-lattice`　·　说明
根 `../`

证法：$\max(f, g) = \frac12(f + g + |f - g|)$，所以只需证「$f \ge 0$、$f \in A$ $\implies$ $\sqrt f \in A$」。

不妨 $\|f\| < 1$：$\sqrt{1 - u}$ 在 $[-1+\varepsilon, 1-\varepsilon]$ 上解析，其 Taylor 级数一致逼近，代 $u = 2 - \varepsilon - f^2 \in A$ 得多项式 $p(2-\varepsilon-f^2) \in A$，它一致逼近 $\sqrt f$；

$A$ 闭故 $\sqrt f \in A$。

⚠️ 「含单位」不能去掉：不给 $1$ 的话 $\sqrt{}$ 这一步没有常数可写。

⭐ 这是 Stone–Weierstrass 的**第一步**：先把「代数」升级成「格」，后面才能用 $\min/\max$ 上下夹住 $f$。
