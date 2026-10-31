# 曲率线网　`prop.curvature-lines`　·　说明
根 `../`

**两行证明**：若 $F = M = 0$，则 $\{r_{u}, r_{v}\}$ 正交且 $II$ 无交叉项，两个方向都满足 $W(r_{u}) \parallel r_{u}$，故都是主方向；反之两个**不同**的主方向必正交（谱定理，`def.principal-curvature`），故 $F = 0$，又 $M = II(r_{u}, r_{v}) = \langle W(r_{u}), r_{v}\rangle = k\langle r_{u}, r_{v}\rangle = 0$。见入边。

⚠️ **为什么要排除脐点**：$k_{1} = k_{2}$ 时每个切方向都是主方向，「曲率线」不再有区分度，此时 $F$ 与 $M$ 只满足 $M = kF$，可以同时不为零。所以判别法只在非脐点区域使用。

**曲率线的微分方程**：曲线 $(u(t), v(t))$ 的切方向是主方向，当且仅当

$$\begin{vmatrix} (\mathrm{d}u^{1})^{2} & -\mathrm{d}u^{1}\mathrm{d}u^{2} & (\mathrm{d}u^{2})^{2} \\ E & F & G \\ L & M & N \end{vmatrix} = 0 .$$

> 续见 notes/prop.curvature-lines.2.md
