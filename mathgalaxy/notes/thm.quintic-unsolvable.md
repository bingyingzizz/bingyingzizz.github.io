# 五次方程没有根式解　`thm.quintic-unsolvable`　·　说明
根 `../`

**证明**。取 $f = x^{5} - 4x + 2$，分四步：$f$ 不可约 $\implies$ 伽罗瓦群传递且含 5-循环；$f$ 恰有三个实根 $\implies$ 复共轭给出换位；5-循环与换位生成 $S_{5}$；最后用 `thm.radical-solvable` 与 `prop.sn-solvable`。

**第一步：$f$ 在 $\mathbb{Q}$ 上不可约**。反设 $f = gh$，其中 $g, h \in \mathbb{Z}[x]$ 本原、$1 \le \deg g \le 4$（Gauss 引理把 $\mathbb{Q}[x]$ 的分解搬到 $\mathbb{Z}[x]$）。模 $2$ 约化：$f \equiv x^{5} \pmod 2$，因为 $-4x$ 与 $2$ 都被 $2$ 整除。$\mathbb{F}_{2}[x]$ 是唯一分解整环，$x^{5}$ 的非常数首一因子只有 $x^{k}$，故 $\bar g = x^{k}$、$\bar h = x^{5-k}$（$1 \le k \le 4$）。于是 $g(0) \equiv h(0) \equiv 0 \pmod 2$，即 $4 \mid g(0)h(0) = f(0) = 2$，矛盾。故 $f$ 不可约。∎

> 续见 notes/thm.quintic-unsolvable.2.md
