# 幂零群可解
`imp.nilpotent-solvable` · 推出 · strong 边 · 根 `../`

`def.nilpotent-group` 幂零群 → `def.solvable-group` 可解群

设 $\gamma_0 = G$、$\gamma_{i+1} = [G, \gamma_i]$，并设 $G^{(i)}$ 是导列。对 $i$ 归纳证明 $\gamma_i \subseteq G^{(i)}$。

$i = 0$：$\gamma_0 = G = G^{(0)}$。若 $\gamma_i \subseteq G^{(i)}$，则
$$\gamma_{i+1} = [G, \gamma_i] \subseteq [G, G^{(i)}] = G^{(i+1)} .$$
若 $G$ 幂零，取 $c$ 使 $\gamma_c = \{e\}$，则 $G^{(c)} \supseteq \gamma_c = \{e\}$，故 $G^{(c)} = \{e\}$，即 $G$ 可解。$\blacksquare$

> $\gamma_i \subseteq G^{(i)}$ 是关键：下中心列夹在导列与 $G$ 之间。
