# 纤维度量　`prop.bundle-metric`　·　说明
根 `../`

**证明就是单位分解**：取局部平凡化覆盖 $\{U_{\alpha}\}$，在每个 $U_{\alpha}$ 上把 $E$ 等同于 $U_{\alpha} \times \mathbb{R}^{k}$、取标准内积 $\langle\cdot,\cdot\rangle_{\alpha}$；再取光滑单位分解 $\{\rho_{\alpha}\}$（`thm.smooth-partition-unity`），令 $\langle s,t\rangle := \sum_{\alpha}\rho_{\alpha}\langle s,t\rangle_{\alpha}$。这是**凸组合**：对称双线性显然；正定性由 $\rho_{\alpha} \ge 0$ 与和恒为 $1$ 保证 —— 在每点处它是一组内积的加权平均，权重非负、总和 $1$，故 $\langle s,s\rangle = 0$ 只能 $s = 0$。

**为什么度量没有障碍而别的结构有**：正定对称型构成一个**凸集**，凸组合仍正定；复结构（$J^{2} = -\operatorname{id}$）与辛结构（$\omega$ 非退化且闭）不是凸条件，粘不起来，各有拓扑障碍。所以「$TM$ 总有度量但不一定有近复结构」不是技术不足，而是「凸 vs 非凸」的本质差别。

> 续见 notes/prop.bundle-metric.2.md
