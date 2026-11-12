# Schur 三角化 $\Longrightarrow$ 谱定理（矩阵版）
`imp.spectral-matrix` · 推出 · strong 边 · 根 `../`

`thm.schur-triangularization` Schur 三角化 → `thm.spectral-matrix` 谱定理（矩阵版）

对 $T$ 的第 $(1,1)$ 元比较：$(T^{*}T)_{11} = \sum_{j}|t_{j1}|^{2} = |t_{11}|^{2}$（第一列只有 $t_{11}$），$(TT^{*})_{11} = \sum_{j}|t_{1j}|^{2}$；相等给出 $t_{12} = \cdots = t_{1n} = 0$。于是 $T = \operatorname{diag}(t_{11}, T_{1})$，$T_{1}$ 仍上三角且正规；对 $T_{1}$ 重复该论证，归纳得 $T$ 对角。故 $A = UTU^{*}$ 酉可对角化。

**实情形**：实对称矩阵是正规矩阵，故有复谱分解 $A = U\Lambda U^{*}$。其特征值全实：若 $Ax = \lambda x$、$x \ne 0$，则 $\lambda\|x\|^{2} = \langle Ax, x\rangle = \langle x, Ax\rangle = \overline{\lambda}\|x\|^{2}$，故 $\lambda = \overline{\lambda}$。对实特征值 $\lambda$，$(A - \lambda I)x = 0$ 是实系数方程组，其解空间有实基，故特征向量可取实；于是 $U$ 可取为实正交矩阵 $Q$，$Q^{T}AQ$ 为实对角阵。∎
