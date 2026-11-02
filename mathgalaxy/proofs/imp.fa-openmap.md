# 闭覆盖有内点 + 完备 $\implies$ 开映射定理
`imp.fa-openmap` · 推出 · strong 边 · 根 `../`

`lem.countable-closed-cover` 闭覆盖的内点 + `def.banach-space` Banach 空间 → `thm.open-mapping-banach` 开映射定理（Banach 版）

**① 取内点。** $E = \bigcup_k \overline{u(kB_E)}$（满射 + 每个 $x$ 缩放后落在某个 $kB_E$ 里）。

由「闭覆盖有内点」与 Baire，某个 $\overline{u(kB_E)}$ 含内点；

由线性（$u(kB_E) = k\,u(B_E)$）可把内点搬回 $0$，得 $r > 0$ 使 $\overline{u(B_E)} \supseteq rB_F$。
**② 去掉闭包。** 归一化后等价于：$u(B_E)$ 在 $B_F$ 里稠密。

给定 $y \in B_F$，递归构造：取 $x_n$ 使 $\|y_n - u(x_n)\| < \varepsilon/2^n$、$\|x_n\| \le \varepsilon/2^{n-1}$，令 $y_{n+1} := y_n - u(x_n)$。

$E$ 完备使 $x := \sum x_n$ 收敛且 $\|x\| \le 2\varepsilon$；

> 续见 proofs/imp.fa-openmap.2.md
