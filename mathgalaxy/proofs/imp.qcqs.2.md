# 拟紧拟分离层 $\iff$ 小对象
`imp.qcqs` · 推出 · strong 边 · 根 `../`

`def.quasi-compact` 拟紧对象 + `def.quasi-separated` 拟分离对象 + `def.precanonical-topology` 预标准拓扑 → `thm.pretopos-qcqs` 预拓扑斯由拓扑斯唯一确定

拟分离：设 $Y \to X$、$Z \to X$ 且 $Y, Z$ 拟紧。要证 $Y \times_{X} Z$ 拟紧。由第 3 条性质（拟紧 $\iff$ 存在小对象到它的满射），取满射 $Y' \to Y$、$Z' \to Z$（$Y', Z' \in \mathcal{C}$），则

$$Y' \times_{X} Z' \longrightarrow Y \times_{X} Z$$

是满射，而左边的纤维积在 $\mathcal{C}$ 里（$\mathcal{C}$ 有有限极限），所以 $Y \times_{X} Z$ 有小对象满射覆盖，因而拟紧。∎

> 续见 proofs/imp.qcqs.3.md
