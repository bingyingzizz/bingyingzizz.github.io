# 理想的定义 $\implies$ 交、和、积与商环泛性质
`imp.ideal-basic` · 推出 · strong 边 · 根 `../`

`def.ideal` 理想 + `def.ring` 环 → `prop.ideal-basic` 理想的运算与商环泛性质

**(i)** $I \cap J$：加法子群显然；对 $a \in A$、$x \in I\cap J$ 有 $ax, xa \in I$ 且 $\in J$。$I + J$：加法子群（两个子群之和）；对 $x + y \in I + J$，$a(x+y) = ax + ay \in I + J$。包含性：$I = I + 0 \subseteq I + J$，同理 $J$；若理想 $K \supseteq I \cup J$，则对 $x + y \in I + J$ 有 $x, y \in K$，故 $x + y \in K$，即 $I + J \subseteq K$。

**(ii)** $IJ$ 对加法封闭（两个有限和相加仍是有限和）。对 $a \in A$，$a\sum x_k y_k = \sum (a x_k) y_k$，而 $a x_k \in I$，故仍在 $IJ$；右乘同理。$IJ \subseteq I \cap J$：每个 $x_k y_k \in I$（$x_k \in I$，$I$ 是理想）且 $\in J$（$y_k \in J$），有限和仍在 $I \cap J$。

> 续见 proofs/imp.ideal-basic.2.md
