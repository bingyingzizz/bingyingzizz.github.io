# Frenet 方程是线性 ODE $\implies$ 曲线基本定理
`imp.tu-curve-fundamental` · 推出 · strong 边 · 根 `../`

`thm.frenet-serret` Frenet–Serret 公式 → `thm.curve-fundamental-theorem` 曲线基本定理

**存在性。** 把 Frenet 公式写成矩阵方程

$$X'(s) = A(s)\,X(s),\qquad X = \begin{pmatrix} T \\ N \\ B \end{pmatrix},\qquad A(s) = \begin{pmatrix} 0 & \kappa & 0 \\ -\kappa & 0 & \tau \\ 0 & -\tau & 0 \end{pmatrix}.$$

$A$ 连续，故这是系数连续的**线性** ODE 组：给定 $s_{0}$ 与初值 $X(s_{0})$，它在整个区间 $I$ 上有唯一 $C^{1}$ 解。

**解始终是正交标架。** $A$ 反称，于是对任意两个解 $u,v$ 有 $\frac{\mathrm{d}}{\mathrm{d}s}\langle u,v\rangle = \langle Au,v\rangle+\langle u,Av\rangle = 0$。初值取标准正交，则解处处标准正交；初值取 $\det X(s_{0}) = +1$，则因行列式连续且只能取 $\pm 1$，解落在 $\mathrm{SO}(3)$ 里。

> 续见 proofs/imp.tu-curve-fundamental.2.md
