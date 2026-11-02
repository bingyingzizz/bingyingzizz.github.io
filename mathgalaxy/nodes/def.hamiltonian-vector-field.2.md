# Hamilton 向量场　`def.hamiltonian-vector-field`　·　续页（第 2 页）
[在星图里打开](../#n=def.hamiltonian-vector-field)　·　第 1 页 [nodes/def.hamiltonian-vector-field.md](./def.hamiltonian-vector-field.md)

## 陈述（续）
能量函数（Hamiltonian）变成运动方程 —— 这是整个分析力学的形式化
核心。
设 $(M, \omega)$ 是辛流形，$H \in C^{\infty}(M)$。由 $\omega$ 非退化，存在唯
一的向量场 $X_{H}$ 使
$$\iota_{X_{H}}\omega = -dH ,$$
称 $X_{H}$ 为 $H$ 的 **Hamilton 向量场**（$\iota$ 是内乘，见 `def.interior-produ
ct`）。它的积分曲线满足**Hamilton 方程**：在 Darboux 坐标下
$$\dot{q}_{i} = \frac{\partial H}{\partial p_{i}}, \qquad \dot{p}_{i} = -\frac{\part
ial H}{\partial q_{i}} .$$
**关键性质**：$\mathcal{L}_{X_{H}}\omega = 0$（$H$ 的流保持 $\omega$），所以
也保持体积形式 $\omega^{n}/n!$ —— 这就是 **Liouville 定理**。

> 续见 [nodes/def.hamiltonian-vector-field.3.md](./def.hamiltonian-vector-field.3.md)
