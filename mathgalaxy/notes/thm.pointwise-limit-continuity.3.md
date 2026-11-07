# 连续点集是稠密 G_δ　`thm.pointwise-limit-continuity`　·　说明
根 `../`

**在 $O$ 上连续**：取 $x\in O$、$\varepsilon>0$。取 $k$ 使 $1/k < \varepsilon/3$。因 $x\in O_{k}$，存在 $n$ 使 $x\in\operatorname{int}F_{n,k}$，取开邻域 $U\ni x$、$U\subseteq F_{n,k}$。因 $f_{n}(x)\to f(x)$，取 $m\ge n$ 使 $d(f_{m}(x),f(x)) < \varepsilon/3$。$f_{m}$ 在 $x$ 连续，取开邻域 $V\subseteq U$、$x\in V$，使 $y\in V$ 时 $d(f_{m}(y),f_{m}(x)) < \varepsilon/3$。对 $y\in V$ 三项估计：$d(f(y),f_{m}(y)) = \lim_{i\to\infty} d(f_{i}(y),f_{m}(y)) \le \frac{1}{k} < \frac{\varepsilon}{3}\quad(\text{因 } y\in F_{n,k},\ m\ge n),$ 于是 $d(f(y),f(x)) \le d(f(y),f_{m}(y)) + d(f_{m}(y),f_{m}(x)) + d(f_{m}(x),f(x)) < \varepsilon.$ 故 $f$ 在 $x$ 连续，$O\subseteq\operatorname{cont}(f)$，特别地 $\operatorname{cont}(f)$ 稠密。

> 续见 notes/thm.pointwise-limit-continuity.4.md
