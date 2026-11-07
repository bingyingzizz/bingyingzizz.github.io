# Schur 三角化　`thm.schur-triangularization`　·　说明
根 `../`

**证明**（对 $n$ 归纳）。$n = 1$ 时取 $U = (1)$ 即可。设 $n \ge 2$。

**取特征向量**：特征多项式 $\chi_{A}(t) = \det(tI - A)$ 是 $n$ 次复系数多项式，由**代数基本定理**它有根 $\lambda$；于是存在 $0 \ne x \in \mathbb{C}^{n}$ 使 $Ax = \lambda x$。把 $x$ 单位化，仍记 $x$，$\lVert x\rVert = 1$。

**补成标准正交基**：由 **Gram–Schmidt**，把 $x$ 扩充为 $\mathbb{C}^{n}$ 的标准正交基 $u_{1} = x, u_{2}, \ldots, u_{n}$。令 $U_{1} := (u_{1}, \ldots, u_{n})$（以它们为列），则 $U_{1}$ 是酉矩阵，且 $U_{1}^{*}u_{j} = e_{j}$。于是 $U_{1}^{*}AU_{1}$ 的第一列是 $U_{1}^{*}Ax = \lambda U_{1}^{*}x = \lambda e_{1}$：它的形状是「左上角 $\lambda$、左下角全 $0$、右下角一个 $(n-1)$ 阶块 $A_{1}$、右上角某个行向量 $w^{*}$」。

> 续见 notes/thm.schur-triangularization.2.md
