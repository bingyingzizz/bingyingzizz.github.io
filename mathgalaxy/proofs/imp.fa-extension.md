# 完备性 $\implies$ 稠密延拓存在
`imp.fa-extension` · 推出 · strong 边 · 根 `../`

`def.complete` 完备 → `thm.bounded-extension` 有界算子的延拓

给 $x \in E$，取 $g_n \in G$ 使 $g_n \to x$。

则 $\|u(g_n) - u(g_m)\| \le \|u\|\,\|g_n - g_m\| \to 0$，故 $(u(g_n))$ 在 $F$ 中 Cauchy；

$F$ 完备，定义 $\tilde u(x) := \lim_n u(g_n)$。
与取法无关：换一列 $g_n'$ 时 $\|u(g_n) - u(g_n')\| \to 0$。

线性与界：$\|\tilde u(x)\| \le \|u\|\,\|x\|$，且在 $G$ 上与 $u$ 相同故 $\|\tilde u\| \ge \|u\|$。

唯一性：$G$ 稠密、两者都连续。

$\blacksquare$

> 这条常被当成「显然」跳过，但它依赖 $F$ 完备。
