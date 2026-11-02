# 等度连续与一致等度连续　`thm.equicontinuous-uniform`　·　说明
根 `../`

证法：给 $\varepsilon > 0$。每点 $x$ 取 $\eta_x > 0$ 使 $\delta(y, x) < \eta_x \implies d(f(y), f(x)) < \varepsilon/2$（对一切 $f$）。紧性给有限覆盖 $K = \bigcup_i B(x_i, \eta_{x_i}/2)$，取 $\eta := \min_i \eta_{x_i}/2$。若 $\delta(x, y) < \eta$，取 $i$ 使 $x \in B(x_i, \eta_{x_i}/2)$（故 $y \in B(x_i, \eta_{x_i})$），于是 $d(f(x), f(y)) \le d(f(x), f(x_i)) + d(f(x_i), f(y)) < \varepsilon$。

⭐ 讲义末尾用的是 **Lebesgue 数** $\lambda$（$\delta(x,y) < \lambda$ 就落在某个覆盖成员里）。两种写法等价；Lebesgue 数版本的好处是 $\lambda$ 只依赖覆盖。
