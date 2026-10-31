# 振幅判据 $\implies$ 线性与区间可加
`imp.integral-linear` · 推出 · strong 边 · 根 `../`

`thm.riemann-criterion` 可积的振幅判据 → `prop.integral-linear` 积分的线性与区间可加

1. 设 $f, g$ 可积。给定 $\varepsilon > 0$，取分割 $P_f$ 使 $\sum \omega(f)\Delta x < \varepsilon / 2$，$P_g$ 同理；令 $P = P_f \cup P_g$，加细不增振幅和，于是 $\sum \omega(f + g)\Delta x \le \sum \omega(f)\Delta x + \sum \omega(g)\Delta x < \varepsilon$。故 $f + g$ 可积。
2. 值的关系 $\int (f + g) = \int f + \int g$：在同一分割上，$L(f,P) + L(g,P) \le L(f+g,P) \le U(f+g,P) \le U(f,P) + U(g,P)$，令分割变细即得。
3. 数乘同理（$\omega(cf) = |c|\omega(f)$，值的关系由 $U(cf,P) = cU(f,P)$ 当 $c \ge 0$、$c < 0$ 时互换上下的角色）。
4. **区间可加**：设 $P$ 是 $[a, b]$ 的分割，取 $c$ 为分割点，则 $P$ 分裂成 $[a, c]$ 与 $[c, b]$ 的分割

> 续见 proofs/imp.integral-linear.3.md
