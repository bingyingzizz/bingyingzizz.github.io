# 透镜空间是光滑三维流形
`imp.lens-space-smooth-manifold` · 推出 · strong 边 · 根 `../`

`def.lens-space` 透镜空间 + `lem.free-proper-quotient-manifold` 自由真不连续作用的光滑商 → `def.smooth-manifold` 光滑流形

$S^{3}\subset\mathbb{C}^{2}$ 由 $|z_{1}|^{2}+|z_{2}|^{2}=1$ 定义，梯度 $(2\bar z_{1},2\bar z_{2})$ 在球面上不为零，故 $S^{3}$ 是光滑三维流形。



$\Gamma=\mathbb{Z}/p$ 以 $(z_{1},z_{2})\mapsto(\zeta z_{1},\zeta^{q}z_{2})$ 光滑作用。$\gcd(p,q)=1$ 时作用自由：若 $\zeta z_{1}=z_{1}$ 且 $\zeta^{q}z_{2}=z_{2}$，则 $z_{1}=0$ 或 $\zeta=1$，$z_{2}=0$ 或 $\zeta^{q}=1$；结合 $|z_{1}|^{2}+|z_{2}|^{2}=1$ 可知 $\zeta=1$。



有限群在 Hausdorff 空间上的自由作用自动真不连续：每个点有开邻域与所有非平凡像不交（即上一引理证明的第一段）。



于是引理给出：轨道空间 $L(p,q)=S^{3}/\Gamma$ 有唯一光滑结构使商映射为局部微分同胚，从而是三维光滑流形。∎
