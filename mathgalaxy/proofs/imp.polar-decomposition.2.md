# 谱定理 $\Longrightarrow$ 极分解
`imp.polar-decomposition` · 推出 · strong 边 · 根 `../`

`thm.spectral-matrix` 谱定理（矩阵版） → `thm.polar-decomposition` 极分解

**③ $A$ 可逆时**。令 $U := AP^{-1}$。则 $U^{*}U = P^{-1}A^{*}AP^{-1} = P^{-1}P^{2}P^{-1} = I$，故 $U$ 酉，且 $A = UP$；$P$ 正定（$A$ 可逆时 $A^{*}A$ 正定，$\mu_{i} > 0$）。

**④ $A$ 奇异时**。由 $\|Px\|^{2} = \langle A^{*}Ax, x\rangle = \|Ax\|^{2}$ 得 $\ker P = \ker A$。在 $\operatorname{im}P$ 上定义 $U(Px) := Ax$：若 $Px = 0$ 则 $Ax = 0$，故良定义；且 $\|U(Px)\| = \|Ax\| = \|Px\|$，故 $U$ 是 $\operatorname{im}P \to \operatorname{im}A$ 的等距。把 $U$ 延拓为酉映射：取 $\operatorname{im}P$ 的标准正交基并延拓到全空间，令 $U$ 把 $(\operatorname{im}P)^{\perp} = \ker P$ 等距地送到 $(\operatorname{im}A)^{\perp}$（两边维数都等于 $n - \operatorname{rank}A$）。于是 $U$ 酉且 $A = UP$；$P$ 仍唯一，$U$ 在 $\ker A$ 上不唯一。∎
