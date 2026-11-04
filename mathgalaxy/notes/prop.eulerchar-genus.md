# Euler 示性数与亏格　`prop.eulerchar-genus`　·　说明
根 `../`

⭐ **两种算法给出同一个数**（这正是 `thm.euler-characteristic` 的内容：「数单纯形」与「数 Betti 数」一致）：

- **组合侧**：$\chi = V - E + F$，给 $S$ 一个三角剖分去数；

- **同调侧**：$\chi = \sum_{i}(-1)^{i}\operatorname{rank} H_{i} = 1 - 2g + 1 = 2 - 2g$（$H_{0} \cong \mathbb{Z}$、$H_{1} \cong \mathbb{Z}^{2g}$、$H_{2} \cong \mathbb{Z}$）。

同调那一行是**一行算完**的 —— 这也是为什么亏格要用同调定义（`def.genus` 的注里写了原因：避开分类定理）。

⚠ **组合侧的骨架**：从「一个环面的剖分」（$V = 9$、$E = 27$、$F = 18$，故 $\chi = 0$）出发，每做一次连通和挖一个球、沿边界粘一个洞，$\chi$ 就减 2（球面 $\chi = 2$ $\to$ 环面 $0$ $\to$ 双环面 $-2$）。**为什么不逐格写 $g$ 个环面的剖分**：粘接处的顶点/边/面簿记在 $g$ 大时很啰嗦，本图没有展开。

⭐ 三个直接读数：球面 $g = 0$、$\chi = 2$；环面 $g = 1$、$\chi = 0$；双环面 $g = 2$、$\chi = -2$。

> 续见 notes/prop.eulerchar-genus.2.md
