# Gauss 方程　`thm.gauss-equation`　·　说明
根 `../`

⭐ **本包的枢纽**：一个偏导数都不用展开。$\mathbb{R}^{3}$ 上曲率形式恒为零，拆项后残留的 $\omega^{1}_{\ 3}\wedge\omega^{2}_{\ 3}$ 就是曲率 —— 曲率等于两个外蕴形式的外积。

**坐标版对照**：用 $r_{ij} = \Gamma^{k}_{\ ij}r_{k}+h_{ij}n$ 的混合偏导可交换推出 Gauss 方程，并写成 $R_{ijkl} = h_{ik}h_{jl}-h_{il}h_{jk}$、$R_{1212} = LN-M^{2} = K(EG-F^{2})$。这里改用 $\mathrm{d}\omega^{i}_{\ j}$ 读系数，是同一组方程的更短写法。

⚠️ **指标次序是约定**：若记 $R_{ijkl} = \langle R(e_{i}, e_{j})e_{k}, e_{l}\rangle$，上面的向量形式写成 $R_{ijkl} = h_{jk}h_{il}-h_{ik}h_{jl}$，符号与另一种指标次序相反；若取 $R_{ijkl} = h_{ik}h_{jl}-h_{il}h_{jk}$ 对应把 $W$ 放在后一对位置的约定，那时 $R_{1212} = LN-M^{2} = K(EG-F^{2})$ 成立。用指标式之前先对齐 $R$ 的约定，符号才有意义。

> 续见 notes/thm.gauss-equation.2.md
