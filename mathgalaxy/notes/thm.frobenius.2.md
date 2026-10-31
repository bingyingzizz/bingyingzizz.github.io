# Frobenius 定理　`thm.frobenius`　·　说明
根 `../`

**「局部」不能升成「整体」**：定理给的是每点附近有叶片坐标，**不**保证整体上有坐标把 $\mathcal{D}$ 拉直成 $\mathbb{R}^{n}$ 的坐标面（那要求叶空间本身是乘积流形）。稠密叶（环面上的无理斜率线）就是反例：局部全是直线，整体却绕回来稠密。

**分析版本**：Frobenius 等价于「一阶线性偏微分方程组 $\partial_{i}f = \sum_{j} a^{j}_{i}\partial_{j}f$（$i > k$）局部可解」的相容性条件。相容性条件就是对合，而它恰好是「混合偏导可交换」（$\mathrm{d}^{2} = 0$）的读法 —— 与 `def.exterior-derivative` 的 notes 里那句「$\mathrm{d}^{2} = 0$ 与结构方程同源」是同一件事。

**口径**：本图用「$k$ 维子空间族」的语言；一般教材用「微分理想 $I \subseteq \Omega^{\bullet}(M)$ 的积分流形」，两者等价（取 $I$ 为湮灭 $\mathcal{D}$ 的形式生成的理想）。本图不引入理想语言，以免两套记号打架。

> 续见 notes/thm.frobenius.3.md
