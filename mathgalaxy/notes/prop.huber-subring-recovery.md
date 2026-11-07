# A⁺ 由谱决定　`prop.huber-subring-recovery`　·　说明
根 `../`

⭐ 这条说明：**$A^+$ 不是额外数据，而是谱上的「单位球截面」**。

换句话说，$(A,A^+)$ 与「$A$ 加上一个谱的开闭子集」是同一件事 —— 这正是把环论翻译成几何的地方。

⚠ 一般 $A^+$ 不可能是任意子环：必须整闭。

反例：$A = \mathbb{Z}[T]$、$A^+ = \mathbb{Z}[T^2]$ 不整闭（$T$ 在 $\mathbb{Z}[T^2]$ 上整），对应的子集并不是某个**整闭**子环的 $\operatorname{Spa}$（逆映射会把它还原成整闭包 $\widetilde{\mathbb{Z}[T^{2}]} \ne \mathbb{Z}[T^{2}]$）。

⭐ 为什么它是**最小**的：整闭子环总含 $\mathbb{Z}\cdot 1$，故必含 $\widetilde{\mathbb{Z}}$（整元素对整闭子环封闭）；而整元素在**一切**赋值下满足 $|a| \le 1$ —— 若 $|a| > 1$，则 $a^{n} + c_{n-1}a^{n-1} + \cdots + c_{0} = 0$（$c_{i} \in \mathbb{Z}$，故 $|c_{i}| \le 1$）的左端被 $a^{n}$ 支配，不可能为 $0$。所以它含在一切单位球里，取它时筛掉的点最少。

> 续见 notes/prop.huber-subring-recovery.2.md
