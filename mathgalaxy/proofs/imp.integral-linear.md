# 振幅判据 $\implies$ 线性与区间可加
`imp.integral-linear` · 推出 · strong 边 · 根 `../`

`thm.riemann-criterion` 可积的振幅判据 → `prop.integral-linear` 积分的线性与区间可加

**振幅的次可加性**：在同一区间 $I$ 上，$\omega(f + g) \le \omega(f) + \omega(g)$，$\omega(cf) = |c|\,\omega(f)$（因为 $\sup(f + g) \le \sup f + \sup g$、$\inf(f + g) \ge \inf f + \inf g$）。

1. 设 $f, g$ 可积。

给定 $\varepsilon > 0$，取分割 $P_f$ 使 $\sum \omega(f)\Delta x < \varepsilon / 2$，$P_g$ 同理；

令 $P = P_f \cup P_g$，加细不增振幅和，于是 $\sum \omega(f + g)\Delta x \le \sum \omega(f)\Delta x + \sum \omega(g)\Delta x < \varepsilon$。

> 续见 proofs/imp.integral-linear.2.md
