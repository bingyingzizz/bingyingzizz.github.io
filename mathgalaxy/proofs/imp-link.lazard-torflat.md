# 平坦 = 有限生成自由模的滤过余极限 $\implies$ 平坦当且仅当高次挠积全消失
`imp-link.lazard-torflat` · 推出 · strong 边 · 根 `../`

`thm.lazard` 平坦模的结构定理 → `prop.tor-flat-vanishing` 平坦与挠积消失

$(1) \implies (3)$：由 Lazard，$F \cong \varinjlim F_{i}$，$F_{i}$ 有限生成自由。对任意 $N$ 取投射消解 $Q_{\bullet} \to N$，则
$$\operatorname{Tor}_{n}^{R}(F, N) = H_{n}(F\otimes Q_{\bullet}) = H_{n}\bigl(\varinjlim_{i} (F_{i}\otimes Q_{\bullet})\bigr) = \varinjlim_{i} H_{n}(F_{i}\otimes Q_{\bullet}) = \varinjlim_{i} \operatorname{Tor}_{n}^{R}(F_{i}, N),$$
其中「$H_{n}$ 与滤过余极限交换」用的是滤过余极限**正合** ✓。

> 续见 proofs/imp-link.lazard-torflat.2.md
